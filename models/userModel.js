const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'studio404',
    password: 'Manija..+09!91@18',
    database: 'studio404_'
});
  
mysqlConnection.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    } else {
        console.log('DB is connected');
    }
});

let user = {};

user.getUsers = (callback) => {
    if (mysqlConnection){
        mysqlConnection.query('SELECT * FROM user', 
        (err, rows) => {
            if (err){
                throw err;
            } else {
                callback(null, rows);
            }
        });
    }
};


user.insertUser = (userData, callback) => {
    if (mysqlConnection){
        mysqlConnection.query('INSERT INTO user SET ?', userData,  
        (err, result) => {
            if (err){
                throw err;
            } else {
                callback(null, {
                    'insertedID': result
                });
            }
        }
        );
    }
};


user.updateUser = (userData, callback) => {
    if (mysqlConnection){
        const sql = ` 
            UPDATE user SET 
            usuario = ${mysqlConnection.escape(userData.usuario)},
            email = ${mysqlConnection.escape(userData.email)},
            contrasenia = ${mysqlConnection.escape(userData.contrasenia)}
            WHERE id = ${mysqlConnection.escape(userData.id)}
        `;
        mysqlConnection.query(sql, (err, result) => {
            if (err){
                throw err;
            } else {
                callback(null, {
                    "msg": "success"
                });
            }
        });
    }
};


user.deleteUser = (id, callback) => {
    if (mysqlConnection){
        let sql = ` 
            SELECT * FROM user
            WHERE id = ${mysqlConnection.escape(id)}
        `;
        mysqlConnection.query(sql, (err, row) => {
            if (row){
                let sql = `
                    DELETE FROM user 
                    WHERE id = ${id}
                `;
                mysqlConnection.query(sql,  
                    (err, result) => {
                        if (err){
                            throw err;
                        } else {
                            callback(null, {
                                "msg": "Deleted user"
                            })
                        }
                })

            } else {
                callback(null, {
                    "msg": "Nonexistent user"
                });
            }
        });
    }
};
  

module.exports = user;