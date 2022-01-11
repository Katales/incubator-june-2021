import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

import {IUser} from "../interface";
import {API_URL} from "../constants";

@Injectable({
  providedIn: 'root'
})

export class UserServices {
  private siteUrl: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(protected httpCl: HttpClient) {}

  getUsers(): Observable<IUser[]> {
    return this.httpCl.get<IUser[]>(API_URL.USERS);
  }

  getUser(id: number): Observable<IUser> {
    return this.httpCl.get<IUser>(this.siteUrl+'/'+id);
  }
}
