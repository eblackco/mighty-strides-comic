import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { PagesComponent } from './views/pages/pages.component';
import { PageComponent } from './views/page/page.component';
import { CharactersComponent } from './views/characters/characters.component';
import { AboutComponent } from './views/about/about.component';
import { ExtrasComponent } from './views/extras/extras.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    PagesComponent,
    PageComponent,
    CharactersComponent,
    AboutComponent,
    ExtrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
