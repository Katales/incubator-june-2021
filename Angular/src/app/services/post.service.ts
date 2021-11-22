import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IPost} from "../interface";
import {API_URL} from "../constants";

@Injectable({
  providedIn: 'root'
})

export class PostServices {

  constructor(protected httpCl: HttpClient) { }

  getPosts(): Observable<IPost[]> {
    return this.httpCl.get<IPost[]>(API_URL.POSTS);
  }

  getPost(id: number): Observable<IPost> {
    return this.httpCl.get<IPost>(API_URL.POSTS + '/' + id);
  }

  getPostsByUserId(userId: number): Observable<IPost[]> {
    return this.httpCl.get<IPost[]>(API_URL.POSTS + '?userId=' + userId);
  }

}
