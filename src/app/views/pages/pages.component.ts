import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  pages;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.pages = this.contentService.getPages();
  }

}
