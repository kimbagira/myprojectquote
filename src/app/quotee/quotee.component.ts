import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotee',
  templateUrl: './quotee.component.html',
  styleUrls: ['./quotee.component.css']
})
export class QuoteeComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1, 'kimbagira', 'sylvie', 'Write it on your heart that every day is the best day in the year.',new Date(2019,1,3)),
   ];

   addNewQuotes(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
    



   toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
   

  constructor() { }

  ngOnInit() {
  }

}
