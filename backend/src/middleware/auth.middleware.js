const jwt=require('jsonwebtoken');
function auth(req,res,next){const h=req.headers.authorization||''; if(!h.startsWith('Bearer ')) return res.status(401).json({success:false,message:'Authentication required'}); try{req.user=jwt.verify(h.slice(7),process.env.JWT_SECRET);next()}catch(e){return res.status(401).json({success:false,message:'Invalid or expired token'})}}
function roles(...allowed){return (req,res,next)=>allowed.includes(req.user.role)?next():res.status(403).json({success:false,message:'You are not authorized to access this resource'})}
module.exports={auth,roles};
