const { validationResult } = require('express-validator');
const renameId = require('./renameId')

module.exports =  (model, select, populate = [], addFilter = () => {}) => {
    getListFunc = async (req, res, next) => {
        try {
            let { sort, range, filter } = req.query;
            if (sort) {
                const a = JSON.parse(sort);
                sort = { [a[0]]: a[1] === "ASC" ? 1 : -1 };
            }

            let skip = 0;
            let limit = 100;
            if (range) {
                const a = JSON.parse(range);
                skip = a[0];
                limit = a[1] - skip;
            }
            filter = filter ? JSON.parse(filter) : {};
            addFilter(filter,req);
            const items = await model.find(filter).sort(sort).skip(skip).limit(limit).populate(populate).select(select).exec();
            if (!items) {
                const error = new Error("Not found");
                error.statusCode = 404;
                error.data = errors.array();
                throw error;
            } else {
                const total = await model.count(filter);
                res.set("Content-Range", `${skip}-${skip + limit}/${total}`);
                res.status(200).json(renameId(items));
            }
        } catch (err) {
            if (!err.statusCode) {
                err.statusCode = 500;
                throw err;
            }
        }
        next();
    };
    return getListFunc;
};