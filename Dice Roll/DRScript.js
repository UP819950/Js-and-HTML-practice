

function roll() {
    a = Math.random();
    if (a < 0.16666) {
        return document.getElementById("Answer").innerHTML = "1";
        
    } else if (a >= 0.166667 && a < 0.3333333  ) {
        return document.getElementById("Answer").innerHTML = "2";
        
    } else if (a >= 0.3333333 && a < 0.499999  ) {
        return document.getElementById("Answer").innerHTML = "3";
        
    } else if (a >= 0.499999 && a < 0.6666666  ) {
        return document.getElementById("Answer").innerHTML = "4";
        
    } else if (a >= 0.6666666 && a < 0.83333333  ) {
        return document.getElementById("Answer").innerHTML = "5";
        
    } else   {
        return document.getElementById("Answer").innerHTML = "6";
        
    } 



}