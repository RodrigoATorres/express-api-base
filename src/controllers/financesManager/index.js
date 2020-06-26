accountsManager = require('./accountsManager');
accountTypesManager = require('./accountTypesManager');
budgetsManager = require('./budgetsManager');
transactionsManager = require('./transactionsManager');
transactionTypesManager = require('./transactionTypesManager');

module.exports = {
    ...accountsManager,
    ...accountTypesManager,
    ...budgetsManager,
    ...transactionsManager,
    ...transactionTypesManager,
};