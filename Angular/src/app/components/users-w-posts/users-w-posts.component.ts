import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost, IUser} from "../../interface";

@Component({
  selector: 'app-users-w-posts',
  templateUrl: './users-w-posts.component.html',
  styleUrls: ['./users-w-posts.component.css']
})
export class UsersWPostsComponent implements OnInit {

  users: IUser[];
  posts: IPost[];

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => {
      this.users = data['users'];
      this.posts = data['posts'];
    });
  }
}
