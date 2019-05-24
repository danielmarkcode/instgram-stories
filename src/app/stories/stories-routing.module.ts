import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { Story01Component } from '../stories/story01/story01.component';
import { Story02Component } from '../stories/story02/story02.component';
import { Story03Component } from '../stories/story03/story03.component';
import { Story04Component } from '../stories/story04/story04.component';
import { PageNotFoundComponentComponent } from '../page-not-found-component/page-not-found-component.component';

const appRoutes: Routes = [
  { path: 'story01', component: Story01Component },
  { path: 'stories/story02', component: Story02Component },
  { path: 'stories/story03', component: Story03Component },
  { path: 'stories/story04', component: Story04Component },
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

export class StoriesRoutingModule { }
