export class Quotes {
  showDescription: boolean;
  constructor(public id: number,public Author: string,public Publisher: string,public Quotes: string,public Date: Date){
    this.showDescription=false;
  }
}