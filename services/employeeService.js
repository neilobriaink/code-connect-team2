const fs = require('fs');

class EmployeeService {
    constructor() {
        this.filePath = 'employees.json';
    }

    getEmployees() {
        try {
            const data = fs.readFileSync(this.filePath, 'utf8');
            return JSON.parse(data);
        } catch (err) {
            console.error('Error reading employees:', err);
            return [];
        }
    }
}

module.exports = EmployeeService;
