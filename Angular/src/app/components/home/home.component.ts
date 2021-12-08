import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = '[Angular / 03_homework (test)]';

  constructor() { }

  ngOnInit(): void {
  }

}
