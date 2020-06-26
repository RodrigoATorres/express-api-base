if (process.env.NODE_ENV === 'development'){
    process.env.TOKEN_SECRET = 'segredosuperdificildedescobirvaiaqui'
    require('./api')({env:"development"})
}
else if (process.env.NODE_ENV === 'production'){
    let mongoUser = process.env.MONGO_INITDB_ROOT_USERNAME;
    let mongoPswd = process.env.MONGO_INITDB_ROOT_PASSWORD;
    let mongoAdrs = process.env.MONGO_ADDRESS;
    let mongoDbnm = process.env.MONGO_DB_NAME
    require('./api')(
        {
            env:"production",
            dbUrl:`mongodb://${mongoUser}:${mongoPswd}@${mongoAdrs}/${mongoDbnm}?authSource=admin`,
            dbSSL:process.env.MONGO_SSL === "true",
            listenAddress:process.env.NODE_LISTEN_ADDRESS,
            listenPort:process.env.NODE_LISTEN_PORT,
        }
    )
}