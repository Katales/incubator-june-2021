import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { UsersWPostsComponent } from './components/users-w-posts/users-w-posts.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import {UsersResolveService,
        PostsResolveService} from "./services/";
import {UserFormComponent} from "./components/user-form/user-form.component";
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostDetailsSrvComponent } from './components/post-details-srv/post-details-srv.component';
import { PostsClwComponent } from './components/posts-clw/posts-clw.component';

const routes: Route[] = [
  { path: '', component: HomeComponent},
  { path: 'posts',
    component: PostsComponent,
    resolve: {posts: PostsResolveService},
    children: [
      { path: ':postId',
        component: PostDetailsComponent,
      }
    ]
  },
  { path: 'posts-clw',
    component: PostsClwComponent,
    resolve: {posts: PostsResolveService},
    children: [
      { path: ':postId',
        component: PostDetailsSrvComponent,
      }
    ]
  },
  { path: 'users',
    component: UsersComponent,
    resolve: {users: UsersResolveService}
  },
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
    PostDetailsComponent,
    PostDetailsSrvComponent,
    PostsClwComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
