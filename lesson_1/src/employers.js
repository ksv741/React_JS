// const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

// const employersNames = employers.filter((item) => (item.length > 0)).map((item) => (item.toLowerCase().trim()));

class Employers{
  constructor(names){
    this.names = names;
  }
  filt(){
    this.names = this.names.filter((item) => (item.length > 0)).map((item) => (item.toLowerCase().trim()));
  }
}

let lolo = new Employers(['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann']);
lolo.filt();
let names = lolo.names;

export {names};