//npm i mysql2
//npm install dotenv   -- dane do połączenia w pliku .env
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host:  process.env.DB_Host,
    user: process.env.DB_User,
    password: process.env.DB_Password,
    database: process.env.DB_Database
});
const addAccount = async (name, sum)=>{
    const sql = `INSERT INTO account (Name, State) VALUES ('${name}', ${sum});`
    try{
        await pool.query(sql)
    }catch (err){
        console.error(err)
    }
}
const changeState = async (newValue, id)=>{
    const sql = `UPDATE account SET State = ${newValue} WHERE ID=${id};`
    try{
        await pool.query(sql)
    }catch (err){
        console.error(err)
    }
}
const removeAccount = async (id)=>{
    const sql = `DELETE FROM account WHERE ID=${id};`
    try{
        await pool.query(sql)
    }catch (err){
        console.error(err)
    }
}
const getAccounts = async ()=>{
    const sql = `SELECT * FROM account`
    let r = {}
    try{
        const [rows] = await pool.query(sql)
        r = rows
    }catch (err){
        console.error(err)
    }
    return r;
}
const getAccount = async (id)=>{
    const sql = `SELECT * FROM account WHERE ID=${id}`
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
    getAccounts,
    addAccount,
    removeAccount,
    changeState,
    getAccount
}