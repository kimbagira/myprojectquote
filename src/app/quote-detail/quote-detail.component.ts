import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  @Input() quotes: Quotes;

  like= 0;
  upvotequote(){
  this.like++;
}


dislike= 0;
downvotequote(){
this.dislike++;
}
quoteDelete(deleted:boolean){
  this.isComplete.emit(deleted);
}



  constructor() { }

  ngOnInit() {
  }

}
