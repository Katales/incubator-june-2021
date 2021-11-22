import { Component, OnInit } from '@angular/core';
import {PostServices} from "../../services";
import {IPost} from "../../interface";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postSrv: PostServices) { }

  ngOnInit(): void {
    this.postSrv.getPosts().subscribe(posts => this.posts = posts);
  }

}
