var  products=fetch('https://fakestoreapi.com/products')
.then((a)=>{return a.json()})
.then((a)=>{
    var img=document.createElement('img')
    img.src=a[0].image
    document.getElementById("root").appendChild(img)
    
    console.log(a)})
console.log(products)