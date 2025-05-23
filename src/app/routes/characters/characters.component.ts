import { Component, OnInit } from '@angular/core';
import { ContentService } from 'src/app/services/content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characters;
  selectedCharacters = [];

  constructor(
    private contentService: ContentService,
    private router: Router
  ) { }

  ngOnInit() {
    this.characters = this.contentService.getCharacters();
  }

  selectCharacter(index: number) {
    let tag = this.characters[index]['tag'];
    let pos = this.selectedCharacters.indexOf(tag);

    if (pos < 0) {
      this.selectedCharacters.push(tag);
      let c = document.getElementsByClassName('c-' + index);
      for (let i = 0; i < c.length; i++) {
        c[i].classList.add('active');
      }
    } else {
      this.selectedCharacters.splice(pos);
      let c = document.getElementsByClassName('c-' + index);
      for (let i = 0; i < c.length; i++) {
        c[i].classList.remove('active');
      }
    }

    // console.log('selected characters', this.selectedCharacters);
  }

  searchSelectedCharacters() {
    this.router.navigate(['/pages'], { queryParams: { tags: this.selectedCharacters.toString() }});
  }

  resetSelectedCharacters() {
    let characters = document.getElementsByClassName('character');
    for (let i = 0; i < characters.length; i++) {
      characters[i].classList.remove('active');
    }
    this.selectedCharacters = [];
  }

}
