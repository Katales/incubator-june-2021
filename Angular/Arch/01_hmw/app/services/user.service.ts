import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private siteUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(protected httpCl: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpCl.get<User[]>(this.siteUrl);
  }

  getUser(id: number): Observable<User> {
    return this.httpCl.get<User>(this.siteUrl+'/'+id);
  }
}
