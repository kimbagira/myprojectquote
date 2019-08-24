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


  // @Input() quote: Quotes;
  // @Output() isdownvote = new EventEmitter<boolean>();
  // quotedownvote(downvote:boolean){
  //   this.isdownvote.emit(downvote);
  // }


  //upquote
  votequote= 0;
  voteshow= true;

voteShow(){
  this.voteshow= true;
  return this.votequote= this.votequote+ 1;
}

//downquote
downquote= 0;
downshow= true;

downShow(){
this.downshow= true;
return this.downquote= this.downquote+ 1;
}

  constructor() { }

  ngOnInit() {
  }

}
