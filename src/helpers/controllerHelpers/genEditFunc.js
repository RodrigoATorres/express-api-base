const { validationResult } = require('express-validator');
const renameId = require('./renameId')

module.exports = (model, addFilter = () => {}) => {
    editFunc = async (req, res, next) => {
        try {
            const { id } = req.params;
            const data = req.body;
            const filter = {_id: id};
            addFilter(filter,req);
            const item = await model.findOne(filter);
            if (!item) {
                const error = new Error("Not found");
                error.statusCode = 404;
                error.data = errors.array();
                throw error;
            } else {
                item.set(data);
                item.save();
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

    return editFunc;
};
