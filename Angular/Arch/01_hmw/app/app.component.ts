import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular / Homework 01';

  constructor() {
    console.log('>> constructor started');
  }

  ngOnInit(): void {
    console.log('>> ngOnInit started');
  }

}
