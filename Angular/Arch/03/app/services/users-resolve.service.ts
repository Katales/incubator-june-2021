import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";

import {UserServices} from "./user.service";
import {IUser} from "../interface";

@Injectable({
  providedIn: 'root'
})
export class UsersResolveService implements Resolve<IUser[]>{

  constructor(private userSrv: UserServices) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser[]> | Promise<IUser[]> | IUser[] {
    return this.userSrv.getUsers();
  }
}
