import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from 'src/app/services/content.service';
import { environment } from 'src/environments/environment';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  id: string;
  pageSubscription;

  page;
  pageDate: Date = new Date('January 1, 2019 00:00:00');

  zoom: number = 3;
  zoomMin: number = 0;
  zoomMax: number = 3;

  init: boolean = true;
  changingPage: boolean = false;
  playTape: boolean = false;

  shareOpen: boolean = false;
  linkCopied: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contentService: ContentService,
    private sessionService: SessionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pageSubscription = this.activatedRoute.paramMap.subscribe(params => {
      if (params.has('id')) {
        this.id = params.get('id');

        let newPage = this.contentService.getPage(this.id);

        // go home if invalid page was passed, otherwise render the page
        if (newPage === null) {
          if (environment.production === false) { console.log('loaded null page -- going home'); }
          this.router.navigate(['/']);
        } else {
          this.page = newPage;
          this.pageDate = new Date(this.page.releaseDate);

          if (environment.production === false) { console.log('loaded page', this.page, this.pageDate); }

          if (this.init) {
            this.init = false;
          } else {
            this.changingPage = true;
            setTimeout(() => {
              this.changingPage = false;
            }, 500);
            this.playTape = true;
            setTimeout(() => {
              this.playTape = false;
            }, 1100);
          }

        }
      } else {
        let newPage = this.contentService.getLatestPage();
        this.page = newPage;
        this.router.navigate(['/page', newPage.id]);
      }
    })

    this.zoom = this.sessionService.getZoom() || this.zoom;
  }

  ngOnDestroy() {
    this.pageSubscription.unsubscribe();
  }

  loadPage(pageId: string) {
    // if (environment.production === false) { console.log('should load page', pageId); }
    this.router.navigate(['/page', pageId]);
  }

  zoomIn() {
    if (this.zoom < this.zoomMax) {
      this.zoom++;
      this.sessionService.setZoom(this.zoom);
    }
  }

  zoomOut() {
    if (this.zoom > this.zoomMin) {
      this.zoom--;
      this.sessionService.setZoom(this.zoom);
    }
  }

  openShare() {
    this.shareOpen = !this.shareOpen;
  }

  // per: https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
  copyThisPageToClipboard() {
    let href = window.location.href;
    const el = document.createElement('textarea');
    el.value = href;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected = document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
      document.getSelection().removeAllRanges();
      document.getSelection().addRange(selected);
    }

    this.linkCopied = true;
    setTimeout(() => {
      this.linkCopied = false;
    }, 850)
  }
}
