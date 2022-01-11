import { Component, OnInit } from '@angular/core';

import {IUser} from "../../interface";
import {UserServices} from "../../services";

@Component({
  selector: 'app-users',
  template: '<app-user *ngFor="let user of users" [user]="user" [scope]="\'title\'"> </app-user>',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: IUser[];

  constructor(private userSrv: UserServices) { }

  ngOnInit(): void {
    this.userSrv.getUsers().subscribe(users => this.users = users);
  }


}
