const { insertCustomer, getCustomers } = require('./database');

// 新增客戶
insertCustomer('John Doe', 'john.doe@example.com');

// 查詢所有客戶
getCustomers();
