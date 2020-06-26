FROM mongo

COPY ./init-db/users.json /users.json
CMD mongoimport --host $MONGO_ADDRESS --db $MONGO_DB_NAME --collection users --type json --file /users.json --jsonArray --username $MONGO_INITDB_ROOT_USERNAME --password $MONGO_INITDB_ROOT_PASSWORD --authenticationDatabase admin