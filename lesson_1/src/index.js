import {names} from './employers';
import {sponsors} from './sponsors';

const {rus, eu, eu:[risk] } = sponsors;


class MakeBusiness{
  constructor({owner, director = 'Victor', cash, emp}){
    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp; 
  }
  print(){
    console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash} . And our employers: ${this.emp}
And we have a sponsors: 
${[...eu, ...rus, 'unexpected sponsor'].join(' ')}
Note. Be careful with ${risk}. It's a huge risk.`);

  }
}
let myBusines = new MakeBusiness({
  owner: 'Sam',
  cash: sponsors.calcCash(),
  emp: names 
});

myBusines.print();

