const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(em => (em.length > 0 && em.length != '') ).map(item => item.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const calcCash = (own = 0,...arg) => {
    let total = own;
    let [cashArr] = arg;
    total += cashArr.reduce((sum, item) => sum + +item);
    return total;
}

const money = calcCash(null,sponsors.cash);

const makeBusiness = ({owner = 'Dave', director = 'Victor', cash = 0, emp = ['emp']}) => {
    let {eu,rus} = sponsors;
    let sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    sumSponsors = sumSponsors.join(' ');
    let[srl] = eu;
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors: 
${sumSponsors}
Note. Be careful with ${srl}. It's a huge risk.`);
}

makeBusiness({
    owner: 'Sam', 
    cash: money, 
    emp: employersNames
});