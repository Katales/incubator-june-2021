import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  @Input() post: IPost;
  @Input() scope: string = 'all';

  constructor(private actRoute: ActivatedRoute, private router: Router) {
    // @ts-ignore
    this.post = this.router.getCurrentNavigation()?.extras.state['post'];
    // console.log(this.post);
  }

  ngOnInit(): void {
    this.actRoute.params.subscribe( value => {
      console.log('actRoute: ', this.actRoute);
      console.log('actRoute params: ', value);
      this.post = history.state['post'];
      console.log('current post:', this.post);
    } );

    // this.actRoute.data.subscribe( data => {
    //   console.log('pre-loaded data:', data);
    // } );
  }

}
