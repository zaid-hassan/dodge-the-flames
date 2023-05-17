let character = document.getElementById("character");
let block = document.getElementById("block");
let block2 = document.getElementById("block2");
// let score = 0;

let start = ()=> {
    if (block.classList != "start"){
        block.classList.add("start");
    }
}
let start2 = ()=> {
    if (block2.classList != "start2"){
        block2.classList.add("start2");
    }
}

let jump = ()=> {
    if (character.classList != "animation"){
        character.classList.add("animation");
    }
    setTimeout(function(){
        character.classList.remove("animation");
    }, 500)
}

// let block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
// if (block2Left > 500){
//     block2.classList.add("display");
//     setTimeout(function(){
//         block2.classList.remove("display");
//     }, 500)
// }
// else if (block2Left < 500 && block2Left > 0) {
//     block2.classList.remove("display");

// }

// let drawScore = ()=> {
    
// }

let checkgame = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));
    if (((blockLeft < 160 && blockLeft > 120) || (block2Left < 160 && block2Left > 120)) && characterTop >= 130){
        block.style.animation = "none";
        block2.style.animation = "none";
        block.classList.remove("start");
        alert("You lose!");
    }
},10)