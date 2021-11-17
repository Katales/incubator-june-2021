import { Component, OnInit } from '@angular/core';

import {User} from "../../model/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(
    protected userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((retVal) => {
      this.users = retVal
    });
  }

}
