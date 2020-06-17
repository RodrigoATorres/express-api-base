module.exports = async (req, res, next) => {
    if ('OPTIONS' === req.method) {
        return next()
    }
    try{
        if (req.params["workGroupId"]){
            req.workGroupId = req.params["workGroupId"];
        }
        else if (req.headers['x-workgroup']){
            req.workGroupId = req.headers['x-workgroup'];
        }
        else{
            req.workGroupId = null;
        }
        next()
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
    }
    next(err);
    }
}