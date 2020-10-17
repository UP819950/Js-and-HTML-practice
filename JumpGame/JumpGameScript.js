let character = document.getElementById("character");
let block = document.getElementById("block");

function jump() {
    if (character.classList != "animate"){
        character.classList.add("animate");
    }
    
    setTimeout(function(){
        character.classList.remove("animate");
    }, 500);
}

let score = 0;
let dead = false;

let checkDead = setInterval(function() {
    let characterTop = parseInt (window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt (window.getComputedStyle(block).getPropertyValue("left"));
    
    
    
    
    
    
    
    
    if(blockLeft<20 && blockLeft >0 && characterTop >= 90){
        block.style.animation = "none";
        block.style.display = "none";
        
        dead = true;
        localStorage.removeItem("score")
        document.getElementById("gameOver").innerHTML = "Game Over!";

        
    

    } 

    if (dead == false){
        score ++
        scoreFinal = parseInt(  score / 100);
        document.getElementById("score").innerHTML = "Score: " + scoreFinal;
    
    
    } 

    


}, 10);

