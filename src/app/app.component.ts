import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  host: { '[class]': 'hostClass' }
})
export class AppComponent {
  hostClass;

  constructor(private router: Router) { }

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
    });
  }
}
