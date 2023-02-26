// debugger
let h1 = document.querySelector('#h1');
let h2 = document.querySelector('#h2');
let credit = document.querySelector('#credit');
let guesses=10;
let play=document.querySelector('#playAgain');
let audio = document.querySelector('#audio');
let audio2 = document.querySelector('#audio2');
let audio3 = document.querySelector('#audio3');




function checkNumber(){
    audio.play();
    
    let randomNumber = Math.floor(Math.random() * 20);
    
    let param = parseInt(prompt("Enter a number to guess it between 0 and 19 "));
    // if (playAgain){
    //     playAgain.addEventListener('click', function(){
    //         location.reload();
    //     })
    // }
    if(randomNumber===param){
        h1.innerText = "You are correct! The right number is " + randomNumber;
        // h2.innerText = randomNumber;
        audio.pause();
        success();

        



    }
    else if(randomNumber>param){
    
        h1.innerText = "The right number is bigger";
        // h2.innerText = randomNumber;
      showGuesses();  
      gameOver();
      

    
        


}
else if(randomNumber<param){


    h1.innerText = "The right number is smaller";

    // h2.innerText = randomNumber;
    showGuesses();
    gameOver();
    
    
    
    

        

}

else if (isNaN(param)){
    h1.innerText = "You cancelled or didn't enter a number";
    // h2.innerText = randomNumber; 
         
}
}

function showGuesses(){
    guesses=guesses-1;
    credit.innerText = 'You have '  + guesses + ' attempts left';
}

function gameOver(){
    if (guesses === 0){
        alert("Game Over");
        guesses=5;
        audio.pause();
        audio2.play();



    }
}

function playAgain(){
    h1.innerText = "You paused the game! Press 'guess the number' button to resume";
    audio.pause();

    
}

function success(){
    audio3.play();
}

play.addEventListener("click", function(){
    playAgain();
});

 

    

