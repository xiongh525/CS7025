const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: '',
  database: 'test_db'
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

// CREATE TABLE
function createTable() {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      age INT
    );
  `;
  connection.query(sql, (err) => {
    if (err) throw err;
    console.log('Table "users" created.');
  });
}

// DELETE TABLE
function dropTable() {
  const sql = 'DROP TABLE IF EXISTS users;';
  connection.query(sql, (err) => {
    if (err) throw err;
    console.log('Table "users" deleted.');
  });
}

// INSERT DATA (Create)
function insertData(name, email, age) {
  const sql = 'INSERT INTO users (name, email, age) VALUES (?, ?, ?);';
  connection.query(sql, [name, email, age], (err, results) => {
    if (err) throw err;
    console.log(`Inserted data with ID: ${results.insertId}`);
  });
}

// READ DATA
function readData() {
  const sql = 'SELECT * FROM users;';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.log('Data from users table:', results);
  });
}

// UPDATE DATA
function updateData(id, name, email, age) {
  const sql = 'UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?;';
  connection.query(sql, [name, email, age, id], (err) => {
    if (err) throw err;
    console.log(`Updated data for ID: ${id}`);
  });
}

// DELETE DATA
function deleteData(id) {
  const sql = 'DELETE FROM users WHERE id = ?;';
  connection.query(sql, [id], (err) => {
    if (err) throw err;
    console.log(`Deleted data with ID: ${id}`);
  });
}

// Example Usage
createTable(); 
insertData('Haiqi', 'xiongh@tcd.ie', 24); 
insertData('Eclipse', '603147739@qq.com', 24);
readData(); 
updateData(1, 'Haiqi Xiong', 'xiongh@tcd.ie', 24);
deleteData(2); 
dropTable(); 

// Close the connection
connection.end((err) => {
  if (err) throw err;
  console.log('Disconnected from the database.');
});
