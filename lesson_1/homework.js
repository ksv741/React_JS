const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter((item) => (item.length > 0)).map((item) => (item.toLowerCase().trim()));

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const {cash, rus, eu, eu:[risk] } = sponsors;
function calcCash(own = 0) {
    let total = 0;
    for (let i = 0; i < cash.length; i++) {
        total += +cash[i];
    }
    return total;
}
let money = calcCash(cash);

function makeBusiness({owner, director = 'Victor', cash, emp}) {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash} . And our employers: ${emp}
And we have a sponsors: 
${[...eu, ...rus, 'unexpected sponsor'].join(' ')}
Note. Be careful with ${risk}. It's a huge risk.`);

}
makeBusiness({
  owner: 'Sam',
  cash: money,
  emp: employersNames 
});