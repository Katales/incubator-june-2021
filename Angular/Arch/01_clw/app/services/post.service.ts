import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {Post} from "../model/post";

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private siteUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(protected httpCl: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpCl.get<Post[]>(this.siteUrl);
  }

  getPost(id: number): Observable<Post> {
    return this.httpCl.get<Post>(this.siteUrl + '/' + id);
  }

  getPostsByUserId(userId: number): Observable<Post[]> {
    return this.httpCl.get<Post[]>(this.siteUrl + '?userId=' + userId);
  }

}
