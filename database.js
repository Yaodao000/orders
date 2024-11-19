const mysql = require('mysql');

// 創建資料庫連接
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456789',
  database: 'school'
});

// 連接到資料庫
connection.connect((err) => {
  if (err) {
    console.error('資料庫連接失敗: ' + err.stack);
    return;
  }
  console.log('已連接資料庫，ID: ' + connection.threadId);
});

// 插入資料（新增客戶）
const insertCustomer = (name, email) => {
  const sql = 'INSERT INTO customers (name, email) VALUES (?, ?)';
  const values = [name, email];

  connection.query(sql, values, (err, results) => {
    if (err) {
      console.error('插入資料錯誤: ' + err.message);
      return;
    }
    console.log('新客戶創建成功，ID: ' + results.insertId);
  });
};

// 查詢資料（所有客戶）
const getCustomers = () => {
  const sql = 'SELECT * FROM customers';

  connection.query(sql, (err, results) => {
    if (err) {
      console.error('查詢資料錯誤: ' + err.message);
      return;
    }
    console.log('所有客戶資料:', results);
  });
};

module.exports = { insertCustomer, getCustomers };
