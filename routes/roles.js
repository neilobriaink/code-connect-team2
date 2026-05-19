var express = require('express');
var router = express.Router();

const JobRolesService = require('../services/jobRolesService');
const rolesService = new JobRolesService();

router.get('/', (req, res) =>{

    const roles = rolesService.getJobRoles()
    res.render('JobRolesList',
        {roles}
    )
})


module.exports = router;
