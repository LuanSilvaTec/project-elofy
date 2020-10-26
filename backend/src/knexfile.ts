import path from 'path';

module.exports ={
    client:'sqlite3',
    connection:{
        filename:path.resolve(__dirname,'database','database.sqlite')
    },
    migrations:{
        directory:path.resolve(__dirname,'database','migrations')
    },

    useNullAsDefault:true,
};