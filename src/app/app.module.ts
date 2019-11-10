import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { StartupService } from './services/startup.service';

// https://github.com/angulartics/angulartics2/tree/master/src/lib/providers/gst
import { Angulartics2Module } from 'angulartics2';

import { AppComponent } from './app.component';
import { NotfoundComponent } from './routes/notfound/notfound.component';
import { PagesComponent } from './routes/pages/pages.component';
import { PageComponent } from './routes/page/page.component';
import { CharactersComponent } from './routes/characters/characters.component';
import { AboutComponent } from './routes/about/about.component';
import { ExtrasComponent } from './routes/extras/extras.component';


import { FooterComponent } from './partials/footer/footer.component';

export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.loadContent();
}

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    PagesComponent,
    PageComponent,
    CharactersComponent,
    AboutComponent,
    ExtrasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Angulartics2Module.forRoot()
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
