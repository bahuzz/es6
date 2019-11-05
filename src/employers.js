const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter(em => (em.length > 0 && em.length != '') ).map(item => item.toLowerCase().trim());

export {employersNames};