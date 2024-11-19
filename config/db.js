const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'yourpassword',
    database: 'yourdatabase',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    pool: {
        maxIdleTime: 30000 // 確保這是一個有效的數字（毫秒）
    }
});

module.exports = pool;
