import {Component, Input, OnInit} from '@angular/core';

import {Post} from "../../model/post";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-postsByUser',
  templateUrl: './postsByUser.component.html',
  styleUrls: ['./postsByUser.component.css']
})
export class PostsByUserComponent implements OnInit {

  @Input()
  userId: number;

  posts: Post[] = [];

  constructor(protected postSrv: PostService) { }

  ngOnInit(): void {
    this.postSrv.getPostsByUserId(this.userId).subscribe((retVal) => {
      this.posts = retVal;
    })
  }

}
