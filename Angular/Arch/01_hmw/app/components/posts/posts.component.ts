import { Component, OnInit } from '@angular/core';

import {Post} from "../../model/post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(protected postSrv: PostService) { }

  ngOnInit(): void {
    this.postSrv.getPosts().subscribe((retVal) => {
      this.posts = retVal;
    })
  }

}
