import {employersNames} from "./employers";
import {sponsors,money} from "./sponsors";

class MakeBusiness {
    constructor(owner,director,cash,emp) {
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

const makeBusiness = new MakeBusiness('Sam', 'Victor', money, employersNames); 
makeBusiness.outConsole();

