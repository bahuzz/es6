import EmployersNames from "./employers";
import Sponsors from "./sponsors";

class MakeBusiness {
    constructor({
        owner = "Dave",
        director = "Victor",
        cash = 0,
        emp = ['emp']}) {
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
    }

    outConsole() {
        let {eu,rus} = sponsors;
        let sumSponsors = [...eu, ...rus, 'unexpected sponsor'];
        sumSponsors = sumSponsors.join(' ');
        let [srl] = eu;
        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}
And we have a sponsors: 
${sumSponsors}
Note. Be careful with ${srl}. It's a huge risk.`);
    }

}
const sponsors = new Sponsors(); 
const employersNames = new EmployersNames();
const makeBusiness = new MakeBusiness({
    owner:'Sam', 
    cash: sponsors.getMoney(), 
    emp: employersNames.getNames()
}); 

makeBusiness.outConsole();

