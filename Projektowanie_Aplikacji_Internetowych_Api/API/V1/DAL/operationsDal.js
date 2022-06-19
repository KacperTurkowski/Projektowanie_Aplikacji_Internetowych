//npm i mysql2
//npm install dotenv   -- dane do połączenia w pliku .env
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host:  process.env.DB_Host,
    user: process.env.DB_User,
    password: process.env.DB_Password,
    database: process.env.DB_Database
});
const addOperation = async (name, sum, accountId)=>{
    const sql = `INSERT INTO operations (Name, SUM, Account_ID) VALUES ('${name}', ${sum}, ${accountId})`
    try{
        await pool.query(sql)
    }catch (err){
        console.error(err)
    }
}
const removeOperation = async (id)=>{
    const sql = `DELETE FROM Operations WHERE ID=${id};`
    try{
        await pool.query(sql)
    }catch (err){
        console.error(err)
    }
}
const getOperationsForAccount = async (id)=>{
    const sql = `SELECT * FROM Operations where Account_ID=${id}`
    let r = {}
    try{
        const [rows] = await pool.query(sql)
        r = rows
    }catch (err){
        console.error(err)
    }
    return r;
}

const getOperations = async ()=>{
    const sql = `SELECT * FROM Operations`
    let r = {}
    try{
        const [rows] = await pool.query(sql)
        r = rows
    }catch (err){
        console.error(err)
    }
    return r;
}
const getOperation = async (id)=>{
    const sql = `SELECT * FROM Operations WHERE ID=${id}`
    let r = {}
    try{
        const [rows] = await pool.query(sql)
        r = rows
    }catch (err){
        console.error(err)
    }
    return r;
}
module.exports = {
    getOperations,
    getOperationsForAccount,
    addOperation,
    removeOperation,
    getOperation
}