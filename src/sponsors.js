const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

export default class Sponsors {
    constructor() {
        this.cash = sponsors.cash;
        this.eu = sponsors.eu;
        this.rus = sponsors.rus;
        this.calcCash = this.calcCash.bind(this);
    }
   
    calcCash(own = 0,...arg) {
        let total = own;
        let [cashArr] = arg;
        total += cashArr.reduce((sum, item) => sum + +item);
        return total;
    }

    getMoney() {
        return this.calcCash(null, this.cash);
    }
}
