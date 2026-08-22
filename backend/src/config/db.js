const {Pool}=require('pg'); require('dotenv').config();
const pool=new Pool({connectionString:process.env.DATABASE_URL});
pool.on('error',e=>console.error('PG pool error',e));
module.exports=pool;
