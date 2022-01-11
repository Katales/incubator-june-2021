import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostTitleComponent } from './components/postTitle/postTitle.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Route[] = [
  { path: '', component: HomeComponent, children: [
      { path: 'posts', component: PostsComponent, children: [
          {path: ':postId', component: PostDetailsComponent}
      ]}
  ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostTitleComponent,
    PostDetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
