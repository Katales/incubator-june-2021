import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-posts-clw',
  templateUrl: './posts-clw.component.html',
  styleUrls: ['./posts-clw.component.css']
})
export class PostsClwComponent implements OnInit {

  posts: IPost[] = <IPost[]>{};
  post: IPost;
  @Input() userId: number;
  @Input() scope: string = 'title';

  constructor(private router: Router, private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.actRoute.data.subscribe( value => this.posts = value['posts']);
  }

  nav2details_clw(postId: number): void {
    this.router.navigate(
      [postId],
      {relativeTo: this.actRoute, queryParams: {scope: 'all'}});
  }

}
