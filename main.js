let character = document.getElementById("character");
let block = document.getElementById("block");
function jump(){
    if (character.classList != "animation"){
        character.classList.add("animation");
    }
    setTimeout(function(){
        character.classList.remove("animation");
    }, 500)
}

let checkgame = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 140 && blockLeft > 120 && characterTop >= 130){
        block.style.animation = "none";
        alert("You lose!");
    }
},10)