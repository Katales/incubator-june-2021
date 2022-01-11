import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  @Input() scope: string = 'all';
  post: IPost;
  posts: IPost[];

  constructor(private actRoute: ActivatedRoute, private router: Router) {
    // @ts-ignore
    console.log('Router.getCurrentNavigation:', this.router.getCurrentNavigation());
  }

  ngOnInit(): void {
    this.actRoute.params.subscribe( value => {
      console.log('>>> post-det (ini) | history:', history);
      console.log('>>> post-det (ini) | actRoute:', this.actRoute);
      this.post = history.state['post'];
    });
  }

}
