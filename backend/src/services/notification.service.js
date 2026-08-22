const db=require('../config/db');
async function notify(userId,title,message,type='INFO'){await db.query('INSERT INTO notifications(user_id,title,message,type) VALUES($1,$2,$3,$4)',[userId,title,message,type])}
module.exports={notify};
