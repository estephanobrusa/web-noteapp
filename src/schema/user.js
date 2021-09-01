const joi=require('@hapi/joi');

const schemaLogin={
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    password:joi.string().min(4).alphanum().required(),
};

module.exports={
    schemaLogin
};