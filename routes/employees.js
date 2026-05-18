var express = require('express');
var router = express.Router();

const EmployeeService = require('../services/employeeService');
const employeeService = new EmployeeService();

router.get('/', (req, res) => {
    const employees = employeeService.getEmployees();
    res.render('employeeList', { employees });
});

module.exports = router;
