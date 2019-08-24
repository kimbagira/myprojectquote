import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quotes;
  @Output() isupvote = new EventEmitter<boolean>();

  quoteupvote(upvote:boolean){
    this.isupvote.emit(upvote);
  }
  constructor() { }

  ngOnInit() {
  }

}
