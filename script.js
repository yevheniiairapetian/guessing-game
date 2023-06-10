// debugger
let h1 = document.querySelector('#h1');
let h2 = document.querySelector('#h2');
let credit = document.querySelector('#credit');
let guesses=10;
let pause=document.querySelector('#pause');
let resume = document.querySelector('#resume');
let audio = document.querySelector('#audio');
let audio2 = document.querySelector('#audio2');
let audio3 = document.querySelector('#audio3');
let user = prompt('What is your name?');
let p = document.getElementById('p');
let wins = 0;
let img = document.getElementById('img');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let randomNumber = Math.floor(Math.random() * 10);
;
p.innerText = "Welcome "  + user + `! Guess the number from 0 to 9. 
Press 'guess the number' button to start the game. 
Press 'Pause the game' button to pause.
Press 'Resume' to resume the game.
Refresh the page if you want to start from scratch with a new user.
You can win many times! 
You will have 10 attempts. Best of luck!`;



function greeting(){
    if (user===null || user===undefined || user==="" || user===0){
p.innerText = `Welcome, Anonymous! Guess the number from 0 to 9. 
Press 'guess the number' button to start the game. 
Press 'Pause the game' button to pause.
Press 'Resume' to resume the game.
Refresh the page if you want to start from scratch with a new user.
You can win many times!   
You will have 10 attempts. Best of luck!`;
user = 'Anonymous';


}
}

greeting();



// function win(){
//     let wins = 0;
//     wins=wins+1;
//     ;
    
// }

// function stop(){
    
    




// }  


// function resume(){


// h1.innerHTML = "";
// checkNumber();


// }

function checkNumber(){
    audio.play();
    
    
    
    let param = parseInt(prompt(user + " ,enter a number to guess it between 0 and 9 "));
    // if (playAgain){
    //     playAgain.addEventListener('click', function(){
    //         location.reload();
    //     })
    // }
    if(randomNumber===param){
        img.style.visibility = "visible";
        img.style.display = "block";
        img2.style.display = "none";
        img3.style.display = "none";
        audio.pause();
        audio3.play();
        p.innerText = "Congratulations, " + user + " ! The right number is " + randomNumber + ". You won " + (wins=wins+1) + " time(s)! Try more!";
        h1.innerText = "";
        // h2.innerText = "";
        randomNumber = Math.floor(Math.random() * 10);
        // (function(){
        //     if(img.style.display==="block")
        //     setTimeout(2000, (img.style.display=="none"));
        // })()
        
        // if(wins===2){
        //     let imgSrc = img.getAttribute;
        //     imgSrc.setAttribute = "giphy.gif";
        // }

    }
    else if(randomNumber>param){
    
        h1.innerText = user + " ,the right number was bigger .Continue trying!";
        // h2.innerText = randomNumber;
        p.innerText = "";
      showGuesses();  
      gameOver();
      
}
else if(randomNumber<param){


    h1.innerText = user + " ,the right number was smaller .Continue trying!";
    p.innerText = "";
    // h2.innerText = randomNumber;
    showGuesses();
    gameOver();

}

else if (isNaN(param)){
    h1.innerText = user + " ,you cancelled or didn't enter a number";
    p.innerText = "";
    // h2.innerText = randomNumber; 
         
}
}




function showGuesses(){
    guesses=guesses-1;
    credit.innerText = user + ' ,you have '  + guesses + ' attempts left';
}

function gameOver(){
    if (guesses === 0){
        img2.style.visibility = "visible";
        img2.style.display = "block";
        img.style.display = "none";
        
        
        h1.innerText = "Game Over, " + user + ",you lost this time. Number of wins = " + wins + ". Try again!";

        guesses=10;
        audio.pause();
        audio2.play();

    }
}



function success(){
    audio3.play();
    randomNumber = Math.floor(Math.random() * 10);
}

pause.addEventListener("click", function(){
    audio.pause();
    audio3.pause();
    h1.innerHTML = user + " ,you paused the game! Press again to resume";
});

// resume.addEventListener("click", function(){
//     resume();
// });

 

    

