import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPost, IUser} from "../../interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() posts: IPost[];
  @Input() userId: number;
  @Input() scope: string;
  @Input() users: IUser[];

  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => {
      if (this.userId) {
        this.posts = data['posts'].filter( (el: IPost) => el.userId === this.userId);
      } else {
        this.posts = data['posts'];
      }
    });
  }

}
