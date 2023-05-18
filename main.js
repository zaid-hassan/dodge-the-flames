let frame = document.getElementById("frame");
let character = document.getElementById("character");
let flame = document.getElementById("flame");
let flame2 = document.getElementById("flame2");
let score = document.getElementById("scoreboard");
let gameButton = document.getElementById("gamebutton");
let gameOver = document.getElementById("gameover");

// Default section
gameOver.style.display = "none";
character.style.display = "none";
flame.style.display = "none";
flame2.style.display = "none";
gameButton.innerHTML = "Start Game"

// If Start Game button is visible(i.e display is block) then,
if (gameButton.style.display = "block"){
    // Change display properites of frame to center the button
    if (frame.classList != "gamestart-frame"){
        frame.classList.add("gamestart-frame")
    }
    // Add event listner to the button to check for clicks
    gameButton.addEventListener('click', activate = ()=>{
        // If clicked ----------
        // Character's display which was set to none is changed to block
        if (character.style.display != "block"){
            character.style.display = "block";
        }
    
        // Flame's display which was set to none is changed to block
        if (flame.style.display != "block"){
            flame.style.display = "block";
        }
        if (flame2.style.display != "block"){
            flame2.style.display = "block";
        }

        // Hide the button with display none and remove the eventlistner
        if (gameButton.style.display = "block"){
            gameButton.removeEventListener('click', activate);
            gameButton.style.display = "none";
            // And alse remove the flex properites from the frame which was used to center the button
            if (frame.classList = "gamestart-frame"){
                frame.classList.remove("gamestart-frame")
            }
        }
    });
}

// ------------ Animation functions ----------------

// Character
let jump = ()=> {
    if (character.classList != "animation"){
        // character.style.display = "block";
        character.classList.add("animation");
    }
    setTimeout(function(){
        character.classList.remove("animation");
    }, 500)
}

// Flames
let start = ()=> {
    if (flame.classList != "start"){
        // flame.style.display = "block";
        flame.classList.add("start");
    }
}
let start2 = ()=> {
    if (flame2.classList != "start2"){
        // flame2.style.display = "block";
        flame2.classList.add("start2");
}
}
            
// --------------------------------------------------

// Check's if the collision has happened every 10 milliseconds
let checkGame = setInterval(()=>{
    // grab the position's of the elements
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let flameLeft = parseInt(window.getComputedStyle(flame).getPropertyValue("left"));
    let flame2Left = parseInt(window.getComputedStyle(flame2).getPropertyValue("left"));
    // If the the flames are touching the character then,
    if (((flameLeft < 160 && flameLeft > 120) || (flame2Left < 160 && flame2Left > 120)) && characterTop >= 130){
        // Stop the animation of all elements
        // Character
        if (character.classList = "animation"){
            character.classList.remove("animation");
        }
        // Flames
        if (flame.classList = "start"){
            flame.classList.remove("start");
        }
        if (flame2.classList = "start2"){
            flame2.classList.remove("start2");
        }

        // Hide the elements with dispalay none
        character.style.display = "none";
        flame.style.display = "none";
        flame2.style.display = "none";

        // Show the game over text which was hidden in the default section
        if (gameOver.style.display != "block"){
            gameOver.style.display = "block"
        }
        // Show the start game button which was hidden after activation of the game
        // And change the text to restart game
        if (gameButton.style.display != "block"){
            gameButton.style.display = "block"
            gameButton.innerHTML = "Restart Game"
        }
        // Change the dispalay property of frame to flex to display the game over and restart button properly
        // By adding gameover-frame
        if (frame.classList != "gameover-frame"){
            frame.classList.add("gameover-frame")
        }
        gameButton.addEventListener('click', reactivate = ()=>{
            // Remove the flex properties from the frame
            if (frame.classList = "gameover-frame"){
                frame.classList.remove("gameover-frame")
            }
            // remove Game over text
            if (gameOver.style.display != "none"){
                gameOver.style.display = "none"
            }
            // remove the button
            if (gameButton.style.display != "none"){
                gameButton.style.display = "none"
            }
            // Add the elements's back
            // Character
            if (character.style.display != "block"){
                character.style.display = "block"
            }
            // Flames
            if (flame.style.display != "block"){
                flame.style.display = "block"
            }
            if (flame2.style.display != "block"){
                flame2.style.display = "block"
            }
            // Remove eventlistner
            gameButton.removeEventListener('click', reactivate)
        })
        alert("You lose!");
    }
},10)