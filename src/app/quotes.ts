export class Quotes {
  showDescription: boolean;
  constructor(public id: number,public Author: string,public Publisher: string,public Quote: string,public Date: Date){
    this.showDescription=false;
  }
}