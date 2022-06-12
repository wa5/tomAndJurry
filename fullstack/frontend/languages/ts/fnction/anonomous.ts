var d=function (){};//anonomus
()=>{}//fate arrow
()=>{
    console.log("im getting execiuted auto matically")
}
// ()()//immediate invoked function express
//hoc
var a=()=>{}
function b(a){
a()
}
console.log(b(a))