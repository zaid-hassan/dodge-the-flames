let character = document.getElementById("character");
let flame = document.getElementById("flame");
let flame2 = document.getElementById("flame2");
let score = document.getElementById("scoreboard");


flame.style.display = "none";
flame2.style.display = "none";

let start = ()=> {
    if (flame.classList != "start"){
        flame.style.display = "block";
        flame.classList.add("start");
    }
}
let start2 = ()=> {
    if (flame2.classList != "start2"){
        flame2.style.display = "block";
        flame2.classList.add("start2");
    }
}

let jump = ()=> {
    if (character.classList != "animation"){
        character.style.display = "block";
        character.classList.add("animation");
    }
    setTimeout(function(){
        character.classList.remove("animation");
    }, 500)
}


let checkGame = setInterval(()=>{
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let flameLeft = parseInt(window.getComputedStyle(flame).getPropertyValue("left"));
    let flame2Left = parseInt(window.getComputedStyle(flame2).getPropertyValue("left"));
    if (((flameLeft < 160 && flameLeft > 120) || (flame2Left < 160 && flame2Left > 120)) && characterTop >= 130){
        flame.style.animation = "none";
        flame2.style.animation = "none";
        flame.classList.remove("start");
        flame2.classList.remove("start");
        alert("You lose!");
    }
},10)