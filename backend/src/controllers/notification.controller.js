const db=require('../config/db');
exports.list=async(req,res,next)=>{try{const r=await db.query('SELECT * FROM notifications WHERE user_id=$1 ORDER BY created_at DESC',[req.user.id]);res.json({success:true,data:r.rows})}catch(e){next(e)}};
exports.read=async(req,res,next)=>{try{await db.query('UPDATE notifications SET is_read=true WHERE id=$1 AND user_id=$2',[req.params.id,req.user.id]);res.json({success:true})}catch(e){next(e)}};
exports.readAll=async(req,res,next)=>{try{await db.query('UPDATE notifications SET is_read=true WHERE user_id=$1',[req.user.id]);res.json({success:true})}catch(e){next(e)}};
