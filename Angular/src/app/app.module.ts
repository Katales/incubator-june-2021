// [Angular / 03_homework]
// делаем форму с select в котором будут все имена юзеров с jsonPlaceHolder.
//   при выборе определенного юзера и нажитии кнопки происходит  submit и
//   переход на следующую страницу (/users/ID)
//   и выводится подробная инфа про юзера + его посты

import { NgModule } from '@angular/core';
import {Route, RouterModule} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {UsersResolveService,
        PostsResolveService} from "./services/";
import { FormTestComponent } from './components/form-test/form-test.component';
import { UserFormComponent } from './components/userForm/userForm.component';

const routes: Route[] = [
  { path: '', component: HomeComponent },
  // { path: 'formTest', component: FormTestComponent},
  { path: 'userForm', component: UserFormComponent,
    resolve: {users: UsersResolveService, posts: PostsResolveService} },
  //   children: [
  //     { path: 'user_-with-posts/:userid', component: UsersWPostsComponent}
  //   ]
  // },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserFormComponent,
    FormTestComponent
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
