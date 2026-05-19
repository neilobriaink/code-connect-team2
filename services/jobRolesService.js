const fs = require('fs');
const path = require('path');

class JobRolesService {
    constructor() {
        this.filePath = path.join(__dirname, '..', 'jobRole.json');
    }

    getJobRoles() {
            try {
                const data = fs.readFileSync(this.filePath, 'utf8');
                return JSON.parse(data);
            } catch (err) {
                console.error('Error reading employees:', err);
                return [];
            }
        }

    
}

module.exports = JobRolesService;