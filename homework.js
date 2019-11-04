const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(employer => 
       {return (employer.length > 0 && employer.length != '') 
    });

employersNames = employersNames.map(item => {
    return item.toLowerCase().trim();
});

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

function calcCash(own) {
    own = own || 0;
    let everyCash = [...arguments];
    let total = own;
    let [, cashArr] = everyCash;
    total += cashArr.reduce((sum, item) => {
        return (sum + +item);
    });
    return total;
}

const money = calcCash(null, sponsors.cash);

function makeBusiness(owner, director, cash, emp) {
    director = director || 'Victor';
    let {eu,rus} = sponsors;
    let sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
    sumSponsors = sumSponsors.join(' ');
    let[srl] = eu;
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}
And we have a sponsors: 
${sumSponsors}
Note. Be careful with ${srl}. It's a huge risk.`);
}

makeBusiness('Sam', null, money, employersNames);