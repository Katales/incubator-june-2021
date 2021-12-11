import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

import {IPost} from "../interface";
import {Observable} from "rxjs";
import {PostServices} from "./post.service";

@Injectable({
  providedIn: 'root'
})
export class PostsResolveService implements Resolve<IPost[]> {

  constructor(private postSrv: PostServices) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Observable<IPost[]> | Promise<IPost[]> | IPost[] {
    // --- ALL posts
    // return this.postSrv.getPosts();

    // --- only first 9 posts
    return new Promise<IPost[]>( resolve => {
      this.postSrv.getPosts().subscribe( posts => {
        resolve(posts.filter(post => post.id < 10));
      })
    });

  }
}
