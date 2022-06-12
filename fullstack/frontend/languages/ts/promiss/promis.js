var mansapromiss=new Promise((ful,notfull)=>{
    var pro=true
    if(!pro){
        setTimeout(()=>{
            ful("think u for full filling promiss")
        },2000)
    }else{
        notfull("very bad not full promiss")
    }
})
var resol=mansapromiss
.then((a)=>{console.log(a)}).catch((a)=>{console.log(a)})
