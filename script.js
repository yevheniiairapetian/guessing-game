// debugger
let h1 = document.querySelector('#h1');
let h2 = document.querySelector('#h2');
let credit = document.querySelector('#credit');
let guesses=10;
let play=document.querySelector('#playAgain');
let audio = document.querySelector('#audio');
let audio2 = document.querySelector('#audio2');
let audio3 = document.querySelector('#audio3');
let user = prompt('What is your name?');
let p = document.getElementById('p');
let wins = 0;
;
p.innerText = "Welcome "  + user + ` Guess the number from 0 to 9.
The number changes with every try. 
Press 'guess the number' button to start the game. 
Press 'Pause the game' button to pause.
Refresh the page if you want to start from scratch with a new user.
You can win many times! 
You will have 10 attempts. Best of luck!`;



function greeting(){
    if (user===null || user===undefined || user==="" || user===0){
p.innerText = `Welcome, Anonymous! Guess the number from 0 to 9. 
The number changes with every try.
Press 'guess the number' button to start the game. 
Press 'Pause the game' button to pause.
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

function checkNumber(){
    audio.play();
    
    let randomNumber = Math.floor(Math.random() * 10);
    
    let param = parseInt(prompt(user + " ,enter a number to guess it between 0 and 19 "));
    // if (playAgain){
    //     playAgain.addEventListener('click', function(){
    //         location.reload();
    //     })
    // }
    if(randomNumber===param){
        p.innerText = "Congratulations, " + user + " ! The right number is " + randomNumber + ". You won " + (wins=wins+1) + "time(s)! Try more!";
        h1.innerText = "";
        // h2.innerText = randomNumber;
        audio.pause();
        success();

        



    }
    else if(randomNumber>param){
    
        h1.innerText = user + " ,the right number was " + randomNumber + " .Continue trying!";
        // h2.innerText = randomNumber;
        p.innerText = "";
      showGuesses();  
      gameOver();
      

    
        


}
else if(randomNumber<param){


    h1.innerText = user + " ,the right number was " + randomNumber + " .Continue trying!";
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

        h1.innerText = "Game Over, " + user + ",you lost this time. Number of wins = " + wins + ". Try again!";

        guesses=10;
        audio.pause();
        audio2.play();



    }
}

function playAgain(){
    h1.innerText = user + " ,you paused the game! Press 'guess the number' button to resume";
    audio.pause();
    

    
}

function success(){
    audio3.play();
}

play.addEventListener("click", function(){
    playAgain();
});

 

    

