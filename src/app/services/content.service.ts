import { Injectable } from '@angular/core';
import { StartupService } from './startup.service';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private content: any;

  constructor(startup: StartupService) { 
    this.content = startup.getContent();
  }

  getCharacter(id: string): any {
    let matchingCharacter = null;
    for (var[index, character] of this.content.characters.entries()) {
      if (character.id === id) {
        matchingCharacter = character;
      }
    }
    return character;
  }

  getCharacters(): any {
    return this.content.characters;
  }

  getPages(): any {
    return this.content.pages;
  }

  getPage(id: string): any {
    let matchingPage = null;
    for (var [index, page] of this.content.pages.entries()) {
      if (page.id === id) {
        matchingPage = page;
        break;
      }
    }

    matchingPage['node'] = index;

    matchingPage['nodes'] = {
      first: null,
      previous: null,
      next: null,
      latest: null
    }
    if (this.content.pages.length) {
      matchingPage.nodes['first'] = this.content.pages[0].id;
      if (index - 1 >= 0) {
        matchingPage.nodes['previous'] = this.content.pages[index - 1].id;
      }
      if (index + 1 < this.content.pages.length) {
        matchingPage.nodes['next'] = this.content.pages[index + 1].id;
      }
      matchingPage.nodes['latest'] = this.content.pages[this.content.pages.length - 1].id;
    }
    return matchingPage;
  }

  getLatestPage() {
    let matchingPage = this.content.pages[this.content.pages.length - 1];

    matchingPage['node'] = this.content.pages.length - 1;
    matchingPage['nodes'] = {
        first: this.content.pages[0].id,
        previous: this.content.pages[this.content.pages.length - 2].id,
        next: null,
        latest: this.content.pages[this.content.pages.length - 1].id
    }

    return matchingPage;
  }

    
}
