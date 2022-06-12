function num() {
    var ronnd = Math.floor(Math.random() * 6 + 1);
    document.getElementById("root").innerHTML = ronnd;
    //alert( ronnd)
}
function days() {
    var ronnd = Math.floor(Math.random() * 7 + 1);
    // document.getElementById("root").innerHTML=ronnd as any
    switch (ronnd) {
        case 1:
            document.getElementById("root2").innerHTML = "monday";
            break;
        case 2:
            document.getElementById("root2").innerHTML = "tusday";
            break;
        case 3:
            document.getElementById("root2").innerHTML = "wednesday";
            break;
        case 4:
            document.getElementById("root2").innerHTML = "thisday";
            break;
        case 5:
            document.getElementById("root2").innerHTML = "fridy";
            break;
        case 6:
            document.getElementById("root2").innerHTML = "saturday";
            break;
        case 7:
            document.getElementById("root2").innerHTML = "sunday";
            break;
    }
}
