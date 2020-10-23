

function flip() {
    a = Math.random();
    if (a > 0.5) {
        
        return document.getElementById("Answer").innerHTML = "Heads"; 
    } else {
        return document.getElementById("Answer").innerHTML = "Tails";
    }



}