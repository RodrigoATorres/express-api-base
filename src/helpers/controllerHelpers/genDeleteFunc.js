const { validationResult } = require('express-validator');

module.exports = (model, addFilter = () => {}) => {
    deletetFunc = async (req, res, next) => {
        try {
            const { id } = req.params;
            const filter = {_id: id};
            addFilter(filter,req);
            await model.deleteOne(filter);
            res.json({ id });
        } catch (err) {
            if (!err.statusCode) {
                err.statusCode = 500;
                throw err;
            }
        }
        next();
    };
    return deletetFunc;
};