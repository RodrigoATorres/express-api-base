rolesManager = require('./rolesManager');
methodsManager = require('./methodsManager');
resourcesManager = require('./resourcesManager');
permissionsManager = require('./permissionsManager');
myRoles = require('./myRoles')

module.exports = {
    ...rolesManager,
    ...methodsManager,
    ...resourcesManager,
    ...permissionsManager,
    myRoles
};