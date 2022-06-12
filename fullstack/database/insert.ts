const monogo1=require('mongodb').MongoClient;
var url='mongodb://127.0.0.1:27017/'
monogo1.connect(url,(err:any,db:any)=>{
    if(err)throw err;
    console.log("db connected")
var dba=db.db('tomandjaurry2')
var obj={name:'mansa',chocalate:'5 star',class:'mern class'}
dba.collection('mystudets').insertOne(obj,(err:any,res:any)=>{
    if(err)throw err;
    console.log("data inserted")
    db.close()
})
   
})