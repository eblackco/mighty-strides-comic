import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { PagesComponent } from './views/pages/pages.component';
import { PageComponent } from './views/page/page.component';
import { CharactersComponent } from './views/characters/characters.component';
import { AboutComponent } from './views/about/about.component';
import { ExtrasComponent } from './views/extras/extras.component';
import { StartupService } from './services/startup.service';
import { HttpClientModule } from '@angular/common/http';
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
    HttpClientModule
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
