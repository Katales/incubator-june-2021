import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

import {IPost} from "../interface";
import {Observable} from "rxjs";
import {PostServices} from "./post.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<IPost[]>{

  constructor(private postSrv: PostServices) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    return this.postSrv.getPosts();
  }
}
