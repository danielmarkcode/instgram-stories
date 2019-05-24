import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { Story01Component } from './stories/story01/story01.component';
import { Story02Component } from './stories/story02/story02.component';
import { Story03Component } from './stories/story03/story03.component';
import { Story04Component } from './stories/story04/story04.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    HighlightsComponent,
    PageNotFoundComponentComponent,
    Story01Component,
    Story02Component,
    Story03Component,
    Story04Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
