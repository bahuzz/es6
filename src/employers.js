const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
export default class EmployersNames {
    constructor() {
        this.employers = employers;
    }

    getNames() {
        return this.employers.filter(em => (em.length > 0 && em.length != '') ).map(item => item.toLowerCase().trim());
    }
} 
