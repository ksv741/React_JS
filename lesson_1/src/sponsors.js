class Sponsors {
  constructor(cash, eu, rus){
    this.cash = cash;
    this.eu = eu;
    this.rus = rus;
  }
  calcCash(){
    let total = 0;
    for (let i = 0; i < this.cash.length; i++) {
        total += +this.cash[i];
    }
    return total;
  }
}

let sponsors = new Sponsors([40000, 5000, 30400, 12000], ['SRL', 'PLO', 'J&K'], ['RusAuto', 'SBO']);

export {sponsors};
