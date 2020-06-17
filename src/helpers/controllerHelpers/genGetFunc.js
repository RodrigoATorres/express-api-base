const { validationResult } = require('express-validator');
const renameId = require('./renameId')

module.exports = (model, select, populate = [], addFilter = () => {}) => {
    getFunc = async (req, res, next) => {
        try {
            const { id } = req.params;
            const filter = {_id: id};
            addFilter(filter,req);
            const item = await model.findOne(filter).select(select).populate(populate);
            if (!item) {
                const error = new Error("Not found");
                error.statusCode = 404;
                error.data = errors.array();
                throw error;
            } else {
                res.status(200).json(renameId([item])[0]);
            }
        } catch (err) {
            if (!err.statusCode) {
                err.statusCode = 500;
                throw err;
            }
        }
        next();
    };

    return getFunc;
};