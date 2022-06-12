function* data(){
    yield 7
    yield 6
    yield 5
    yield 4
}
var c=data()
console.log(c.next())
console.log(c.next())
console.log(c.next())
console.log(c.next())
console.log(c.next())
