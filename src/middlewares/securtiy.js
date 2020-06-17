module.exports = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Range, Content-Type, Authorization, x-workgroup");
    res.setHeader("Access-Control-Expose-Headers", "Content-Range, Content-Type, Authorization");
    next();
};