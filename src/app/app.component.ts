import { Component } from '@angular/core';
import { Quotes } from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
quote:Quotes[]=[
 new Quotes(1,'Write it on your heart that every day is the best day in the year.','Inspirational Quote')
];

constructor() { }

ngOnInit() {
}
}
