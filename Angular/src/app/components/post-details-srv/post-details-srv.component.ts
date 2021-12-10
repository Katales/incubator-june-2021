import {Component, Input, OnInit} from '@angular/core';
import {IPost} from "../../interface";
import {PostServices} from "../../services";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post-details-srv',
  templateUrl: './post-details-srv.component.html',
  styleUrls: ['./post-details-srv.component.css']
})
export class PostDetailsSrvComponent implements OnInit {

  @Input() scope: string;
  @Input() post: IPost;


  constructor(private postSrv: PostServices,
              private actRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    if (!this.scope) {
      this.actRoute.queryParams.subscribe(qPar => {
        this.scope = qPar['scope'] ? qPar['scope'] : 'all';
      });
    }

    if (!this.post) {
      this.actRoute.params.subscribe(params =>
        this.postSrv.getPost(params['postId']).subscribe(post =>
          this.post = post
        )
      );
    }
  }

}
