import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {IPost, IUser} from "../../interface";
import {PostServices} from "../../services";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() scope: string = 'title';
  @Input() posts: IPost[];
  @Input() userId: number;

  constructor(private actRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.actRoute.data.subscribe(data => {
      if (this.userId) {
        this.posts = data['posts'].filter((el: IPost) => el.userId === this.userId);
      } else {
        this.posts = data['posts'];
      }
    });
  }

  navMoreDetails(postId: number): void {
    this.router.navigate(
      [postId],
      {
        relativeTo: this.actRoute,
        state: {post: this.posts[postId - 1]}
      }
    );
  }

}
