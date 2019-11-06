import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  pages;

  hasTags: boolean = false;
  tags;

  constructor(
    private contentService: ContentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.pages = this.contentService.getPages();
    this.route.queryParams.subscribe(params => {
      if (params['tags']) {
        this.hasTags = true;
        this.tags = params['tags'].split(',');
      } else {
        this.hasTags = false;
      }
    })
  }

  getTags() {
    return this.tags.toString().replace(',', ', ');
  }

  tagsMatch(pageIndex: number): boolean {
    let match = true;

    for (let i = 0; i < this.tags.length; i++) {
      console.log('evaluate', this.tags[i], 'in page', this.pages[pageIndex]);
      if (this.pages[pageIndex].tags.indexOf(this.tags[i]) < 0) {
        match = false;
      }
    }

    console.log('match', match)
    return match;
  }

  seeAllPages() {
    this.router.navigate(['/pages']);
  }
}
