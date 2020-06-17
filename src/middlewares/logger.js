var appRoot = require("app-root-path");
var winston = require("winston");
var morgan = require("morgan");

module.exports = (isDevelopment) => {
    // define the custom settings for each transport (file, console)
    var options = {
        file: {
            level: "info",
            filename: `${appRoot}/logs/app.log`,
            handleExceptions: !isDevelopment,
            json: true,
            maxsize: 5242880, // 5MB
            maxFiles: 5,
            colorize: false,
        },
        console: {
            level: "debug",
            handleExceptions: !isDevelopment,
            json: false,
            colorize: true,
            silent: !isDevelopment,
        },
    };

    // instantiate a new Winston Logger with the settings defined above
    var logger = new winston.createLogger({
        transports: [new winston.transports.File(options.file), new winston.transports.Console(options.console)],
        exitOnError: false, // do not exit on handled exceptions
    });

    // create a stream object with a 'write' function that will be used by `morgan`
    logger.stream = {
        write: function (message, encoding) {
            // use the 'info' log level so the output will be picked up by both transports (file and console)
            logger.info(message);
        },
    };

    return morgan("combined", { stream: logger.stream })
};