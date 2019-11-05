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

export {sponsors,money};