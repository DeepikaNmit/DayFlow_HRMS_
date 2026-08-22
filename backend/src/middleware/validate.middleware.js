module.exports=schema=>(req,res,next)=>{const r=schema.safeParse(req.body);if(!r.success)return res.status(400).json({success:false,message:r.error.issues[0].message});req.body=r.data;next()};
