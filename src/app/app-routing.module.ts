import { NgModule } from '@angular/core';
import { StoriesComponent } from './stories/stories.component';
import { HighlightsComponent } from './highlights/highlights.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'highlights', component: HighlightsComponent },
  { path: 'stories', component: StoriesComponent },
  { path: '', redirectTo: '/highlights', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
