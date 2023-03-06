const mysq = require('mysql');
    const config = mysq.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'user',
       multipleStatements:true,
       insecureAuth:true
    })

    module.exports = config