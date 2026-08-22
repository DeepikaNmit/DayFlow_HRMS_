const {spawn}=require('child_process');
function runPython(script,args=[]){return new Promise((resolve,reject)=>{const p=spawn('python',[script,...args]);let out='',err='';p.stdout.on('data',d=>out+=d);p.stderr.on('data',d=>err+=d);p.on('close',c=>c?reject(new Error(err||'Python failed')):resolve(out))})}
module.exports={runPython};
