const { validationResult } = require('express-validator');
const renameId = require('./renameId')

module.exports = (model, select, addData = () => {}) => {
    createFunc = async (req, res, next) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const error = new Error("Validation failed.");
                error.statusCode = 422;
                error.data = errors.array();
                throw error;
            }

            const data = req.body;
            addData(data,req);
            const createdItem = await model.create(data);
            const item = await model.findOne({ _id: createdItem._id }).lean().select(select);

            res.status(201).json(renameId([item])[0]);
        } catch (err) {
            if (!err.statusCode) {
                err.statusCode = 500;
                throw err;
            }
        }
        next();
    };
    return createFunc;
};