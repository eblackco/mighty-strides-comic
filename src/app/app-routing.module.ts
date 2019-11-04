import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from './views/notfound/notfound.component';
import { PagesComponent } from './views/pages/pages.component';
import { PageComponent } from './views/page/page.component';
import { CharactersComponent } from './views/characters/characters.component';
import { ExtrasComponent } from './views/extras/extras.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent
  },
  {
    path: 'pages',
    component: PagesComponent
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'page/:id',
    component: PageComponent
  },
  {
    path: 'page',
    component: PageComponent
  },
  {
    path: 'extras',
    component: ExtrasComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
