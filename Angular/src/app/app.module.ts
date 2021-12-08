import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UsersWPostsComponent } from './components/users-w-posts/users-w-posts.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {UsersResolveService,
        PostsResolveService} from "./services/";
import {UserFormComponent} from "./components/userForm/userForm.component";

const routes: Route[] = [
  { path: '', component: HomeComponent},
  { path: 'users', component: UsersComponent},
  { path: 'users-with-posts', component: UsersWPostsComponent,
    resolve: {users: UsersResolveService, posts: PostsResolveService} }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserFormComponent,
    UsersComponent,
    UsersWPostsComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
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
