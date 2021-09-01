require('dotenv').config();

const config={
    port:process.env.PORT || 8080,
    secret_session:process.env.SECRET_SESSION ,

    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_HOST: process.env.DB_HOST,
    DB_NAME: process.env.DB_NAME,
}

module.exports=config