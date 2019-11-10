import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Angulartics2GoogleGlobalSiteTag } from 'angulartics2/gst';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { '[class]': 'hostClass' }
})
export class AppComponent {
  hostClass;

  mobileNavOpen: boolean = false;

  constructor(
    private router: Router,
    private angulartics: Angulartics2GoogleGlobalSiteTag
  ) {
    angulartics.startTracking();
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);

      let route = evt.urlAfterRedirects.split('/');
      this.hostClass = route[route.length - 1];
      if (route[route.length - 2] === 'page') {
        this.hostClass = 'page page-' + this.hostClass;
      }

      this.mobileNavOpen = false;
    });
  }
}
