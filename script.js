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
p.innerText = "Welcome, " + user + " .Press 'guess the number' button to start the game. Press 'Play again' button to resume";



function greeting(){
    if (user===null || user===undefined || user==="" || user===0){
p.innerText = "Welcome, Anonymous! Best of luck!";
user = 'Anonymous';


}
}

greeting();





function checkNumber(){
    audio.play();
    
    let randomNumber = Math.floor(Math.random() * 20);
    
    let param = parseInt(prompt(user + " ,enter a number to guess it between 0 and 19 "));
    // if (playAgain){
    //     playAgain.addEventListener('click', function(){
    //         location.reload();
    //     })
    // }
    if(randomNumber===param){
        h1.innerText = "Congratulations, " + user + " ! The right number is " + randomNumber + ". You won!";

        // h2.innerText = randomNumber;
        audio.pause();
        success();

        



    }
    else if(randomNumber>param){
    
        h1.innerText = user + " ,the right number is bigger";
        // h2.innerText = randomNumber;
      showGuesses();  
      gameOver();
      

    
        


}
else if(randomNumber<param){


    h1.innerText = user + " ,the right number is smaller";

    // h2.innerText = randomNumber;
    showGuesses();
    gameOver();
    
    
    
    

        

}

else if (isNaN(param)){
    h1.innerText = user + " ,you cancelled or didn't enter a number";
    // h2.innerText = randomNumber; 
         
}
}

function showGuesses(){
    guesses=guesses-1;
    credit.innerText = user + ' ,you have '  + guesses + ' attempts left';
}

function gameOver(){
    if (guesses === 0){
        alert("Game Over, " + user + " ,you lost");

        guesses=5;
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

 

    

