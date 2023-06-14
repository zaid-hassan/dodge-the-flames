let frame = document.getElementById("frame");
let character = document.getElementById("character");
let flame = document.getElementById("flame");
let flame2 = document.getElementById("flame2");
let scoreBoard = document.getElementById("scoreboard");
let gameButton = document.getElementById("gamebutton");
let gameOver = document.getElementById("gameover");
let intervalID;
let score = 0;
let highScore = 0;

// Default Section
gameOver.style.display = "none";
character.style.display = "none";
flame.style.display = "none";
flame2.style.display = "none";
gameButton.innerHTML = "Start Game"

window.onload = () => {
    startGame();
    checkCollision();
}

let startGame = () => {
    // Change display properites of frame to center the button
    if (frame.classList != "gamestart-frame") {
        frame.classList.add("gamestart-frame")
    }
    gameButton.addEventListener('click', loadGameElements = () => {
        // If clicked ----------
        // Character's display which was set to none is changed to block
        if (character.style.display != "block") {
            character.style.display = "block";
        }

        // Flame's display which was set to none is changed to block
        if (flame.style.display != "block") {
            flame.style.display = "block";
        }
        if (flame2.style.display != "block") {
            flame2.style.display = "block";
        }

        startAnimation();

        // Hide the button with display none and remove the eventlistner
        if (gameButton.style.display = "block") {
            gameButton.removeEventListener('click', loadGameElements);
            gameButton.style.display = "none";
            // And alse remove the flex properites from the frame which was used to center the button
            if (frame.classList = "gamestart-frame") {
                frame.classList.remove("gamestart-frame")
            }
        }

        // Score board
        // Start counting when character is visible in the screen
        if (score <= 0) {
            intervalID = setInterval(myScore, 100)
        }
    })
}

let startAnimation = () => {
    if (flame.classList != "start") {
        flame.classList.add("start");
    }
    if (flame2.classList != "start2") {
        flame2.classList.add("start2");
    }
}


let checkCollision = setInterval(() => {
    // grab the position's of the elements
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let flameLeft = parseInt(window.getComputedStyle(flame).getPropertyValue("left"));
    let flame2Left = parseInt(window.getComputedStyle(flame2).getPropertyValue("left"));
    if (((flameLeft < 160 && flameLeft > 120) || (flame2Left < 160 && flame2Left > 120)) && characterTop >= 130) {
        // Stop the animation of all elements
        // Character
        if (character.classList = "animation") {
            character.classList.remove("animation");
        }
        // Flames
        if (flame.classList = "start") {
            flame.classList.remove("start");
        }
        if (flame2.classList = "start2") {
            flame2.classList.remove("start2");
        }
        // Hide the elements with dispalay none
        character.style.display = "none";
        flame.style.display = "none";
        flame2.style.display = "none";

        // Show the game over text which was hidden in the default section
        if (gameOver.style.display != "block") {
            gameOver.style.display = "block"
        }
        // Show the start game button which was hidden after activation of the game
        // And change the text to restart game
        if (gameButton.style.display != "block") {
            gameButton.style.display = "block"
            gameButton.innerHTML = "Restart Game"
        }
        if (frame.classList != "gameover-frame") {
            frame.classList.add("gameover-frame")
        }


        // TODO alert
        alert("You lost!")

        // Reset Score
        if (score > 0) {
            clearInterval(intervalID)
        }
        // Set highScore
        if (score > highScore) {
            highScore = score;
        }
        if (!localStorage.getItem("highScore")) {
            localStorage.setItem("highScore", highScore);
        }

        // Restart
        restartGame();
    }
}, 10)

// TODO Restart
let restartGame = () => {
    gameButton.addEventListener('click', reloadGameElements = () => {
        // Reset score and start score counting again
        score = 0;

        // localStorage.clear()

        // Remove the flex properties from the frame
        if (frame.classList = "gameover-frame") {
            frame.classList.remove("gameover-frame")
        }
        // remove Game over text
        if (gameOver.style.display != "none") {
            gameOver.style.display = "none"
        }
        // remove the button
        if (gameButton.style.display != "none") {
            gameButton.style.display = "none"
        }
        // Add the elements's back
        // Character
        if (character.style.display != "block") {
            character.style.display = "block"
        }
        // Flames
        if (flame.style.display != "block") {
            flame.style.display = "block"
        }
        if (flame2.style.display != "block") {
            flame2.style.display = "block"
        }
        // Remove eventlistner
        gameButton.removeEventListener('click', reloadGameElements)

        // start animation again
        startAnimation();

        // Score board
        // Start counting when character is visible in the screen
        if (score <= 0) {
            intervalID = setInterval(myScore, 100)
        }
    })
}

// Count score
let myScore = () => {
    score += 1;
    scoreBoard.innerHTML = `High score: ${highScore} Score: ${score}`;
}

// Function to store highscore
let myHighScore = () => {
    if (localStorage.getItem("highScore") != null) {
        highScore = localStorage.getItem("highScore");
    }
}

window.onclick = addAnimation = () => {
    if (character.classList != "animation") {
        character.classList.add("animation");
    }
    setTimeout(addAnimation = () => {
        character.classList.remove("animation");
    }, 500)

}
