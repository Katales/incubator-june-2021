import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Angular / 03';

  constructor(private router: Router, private actRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  nav2posts(): void {
    console.log('> home | navigate 2 posts/');
    this.router.navigate(
      ['posts'],
      {relativeTo: this.actRoute}
    );
  }

}
