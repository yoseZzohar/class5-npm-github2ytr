import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: '<h1>Hello {{name}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Rotem';
  selectedColor = 'Blue';
  width = 100;
  height = 100;
  colors = ['Blue', 'Red', 'Green']
}