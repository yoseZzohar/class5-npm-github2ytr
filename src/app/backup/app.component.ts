import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Music';
  subTitle = 'by The Mobile Workshop';
  newFruit:string;
  showFruits:boolean = false;
  fruits = ['tomato', 'apple', 'strawberry', 'hazil']
  color = 'Blue';
  
  maxL:number = 0;
  
  
  msg = '';
  
  onClick(){
    this.fruits.push(this.newFruit);
    
  }
  
  onKeyUp()
  {
    console.log('Key UP!!!' + Number(new Date()));
  }
}