accountsManager = require('./accountsManager');
budgetsManager = require('./budgetsManager');
transactionsManager = require('./transactionsManager');
transactionTypesManager = require('./transactionTypesManager');

module.exports = {
    ...accountsManager,
    ...budgetsManager,
    ...transactionsManager,
    ...transactionTypesManager,
};