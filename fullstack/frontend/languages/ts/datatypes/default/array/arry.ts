var a:string="apple"
var b:string="botel"
var c:string="crow"

var arr:string[]=["apple1","bottle1","crow1"]
console.log(a)
console.log(arr[0])

var arr1=[{a:3,b:"boll"},{a:3,b:'cat'},{a:3,c:'dog'}]
console.log(arr1)
var mydata=arr1.filter((blabla)=>blabla.b==="boll")
console.log(mydata)
var mydatonlyObject=arr1.find((takataka)=>{return takataka.b==="boll"})
console.log(mydatonlyObject)

var numbers=[1,2,3,4,5]
console.log(numbers.map((data)=>{
    console.log(data)
}))