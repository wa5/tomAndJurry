const monogo=require('mongodb').MongoClient;
var url='mongodb://127.0.0.1:27017/'
monogo.connect(url,(err:any,db:any)=>{
    if(err)throw err;
    console.log("db connected")

    var dba=db.db('tomandjaurry2')
    dba.createCollection('mystudets',(err:any,res:any)=>{
        if(err)throw err;
        console.log("collection created ")
        db.close()
    })
})