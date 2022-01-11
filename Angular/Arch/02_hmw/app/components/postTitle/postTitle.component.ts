import {Component, Input, OnInit} from '@angular/core';

import {IPost} from "../../interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-postTitle',
  templateUrl: './postTitle.component.html',
  styleUrls: ['./postTitle.component.css']
})
export class PostTitleComponent implements OnInit {

  @Input()
  post: IPost;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  nav2PostDetails() {
      this.router.navigate([this.post.id],
        {relativeTo: this.activatedRoute, state: this.post}
      );
  }

}
