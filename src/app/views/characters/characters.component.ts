import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.characters = this.contentService.getCharacters();
  }

}
