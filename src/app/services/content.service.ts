import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private content: any = {
    characters: [
      {
        'tag': 'jinx',
        'name': 'Jinx Colton',
        'subtitle': 'Tenor Saxophone<br> Jinx Colton Quartet',
        'description': 'As a veteran of ensembles led by jazz greats such as Gilly Gizesky, Dave Kilometers and Tiberius Nunc, Colton brings serious talent and focus to his debut album as composer-bandleader, <strong>Mighty Strides</strong>.',
        'thumbnail': 'jinx.png'
      },
      {
        'tag': 'posey',
        'name': 'Josephine (Posey) Shaw',
        'subtitle': 'Bass<br> Jinx Colton Quartet',
        'description': 'Colton&rsquo;s longtime friend used to record and tour extensively with Nunc and Kilometers before apparently washing out, but now forges ahead with renewed energy pursuing new opportunities for collaboration.',
        'thumbnail': 'posey.png'
      },
      {
        'tag': 'bark',
        'name': 'Art &ldquo;Bark&rdquo; Baker',
        'subtitle': 'Drums<br> Jinx Colton Quartet',
        'description': 'Hailing from Dogtown, Pennsylvania, Bark recently moved to New York City and quickly caught the attention of Dave Kilometers due to his nimble, energetic drumming, which is on full display for Colton&rsquo;s debut.',
        'thumbnail': 'bark.png'
      },
      {
        'tag': 'tommy',
        'name': 'Tommy Cardigan',
        'subtitle': 'Piano<br> Jinx Colton Quartet',
        'description': 'A talented but enigmatic pianist due to his propensity to favor recording gigs over live performance, Cardigan has recently focused on expanding his musical horizons to encompass ever-more complex and fast moving sonic landscapes.',
        'thumbnail': 'tommy.png'
      }
    ],
    pages: [
      {
        'id': 'cover',
        'title': 'Cover',
        'description': 'This is the cover page!',
        'shortDescription': 'Cover page',
        'releaseDate': 'October 31, 2019 10:00:00',
        'tags': [ 'jinx', 'posey', 'bark', 'tommy' ]
      },
      {
        'id': '1',
        'title': 'Page 1',
        'description': 'This is where things kick off!',
        'shortDescription': 'This is where things kick off!',
        'releaseDate': 'October 31, 2019 10:00:00',
        'tags': [ 'jinx', 'posey', 'bark', 'tommy' ]
      },
      {
        'id': '2',
        'title': 'Page 2',
        'description': 'Second verse, same as the first.',
        'shortDescription': 'Second verse, same as the first.',
        'releaseDate': 'October 31, 2019 10:00:00',
        'tags': [ 'jinx', 'posey' ]
      },
      {
        'id': '3',
        'title': 'Page 3',
        'description': 'Second verse, same as the first.',
        'shortDescription': 'Second verse, same as the first.',
        'releaseDate': 'October 31, 2019 10:00:00',
        'tags': [ 'bark', 'tommy' ]
      },
      {
        'id': '4',
        'title': 'Page 4',
        'description': 'Second verse, same as the first.',
        'shortDescription': 'Second verse, same as the first.',
        'releaseDate': 'October 31, 2019 10:00:00',
        'tags': [ 'jinx' ]
      },
      {
        'id': '5',
        'title': 'Page 5',
        'description': 'Second verse, same as the first.',
        'shortDescription': 'Second verse, same as the first.',
        'releaseDate': 'October 31, 2019 10:00:00',
        'tags': [ 'posey' ]
      },
      {
        'id': '6',
        'title': 'Page 6',
        'description': 'Second verse, same as the first.',
        'shortDescription': 'Second verse, same as the first.',
        'releaseDate': 'October 31, 2019 10:00:00',
        'tags': [ 'bark' ]
      },
      {
        'id': '7',
        'title': 'Page 7',
        'description': 'Second verse, same as the first.',
        'shortDescription': 'Second verse, same as the first.',
        'releaseDate': 'October 31, 2019 10:00:00',
        'tags': [ 'tommy' ]
      },
    ]
  }

  constructor() { }

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
