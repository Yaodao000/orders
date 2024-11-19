const { insertCustomer, getCustomers } = require('./database');

// 新增客戶
insertCustomer('John Doe', 'john.doe@example.com');

// 查詢所有客戶
getCustomers();

//引入並使用資料庫連接池 SQLTools?
const dbPool = require('./config/db');  // 引用 config/db.js

dbPool.query('SELECT * FROM your_table', (err, rows) => {
    if (err) {
        console.error('查詢錯誤:', err);
        return;
    }
    console.log('查詢結果:', rows);
});
