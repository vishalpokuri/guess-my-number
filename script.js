'use strict';
let answer = Math.trunc(Math.random()*21)
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(typeof guess, guess)
    if(!guess){
        document.querySelector('.message').textContent = 'Wrong input bud'
    }
    else if(guess>answer){
        document.querySelector('.message').textContent = 'Too high'
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if(guess<answer){
        document.querySelector('.message').textContent = 'Too low'
        score--;
        document.querySelector('.score').textContent = score;
    }
    else if(guess === answer){
        document.querySelector('.message').textContent = 'Correct answer'
        if(document.querySelector('.highscore').textContent<score){
            document.querySelector('.highscore').textContent = score
        }
        document.querySelector('body').style.backgroundColor = '#60b347'; 
        document.querySelector('.number').style.width  = '30rem'; 
        document.querySelector('.number').textContent = answer;
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    answer = Math.trunc(Math.random()*21)
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.score').textContent = 20;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value  = '';
    document.querySelector('body').style.backgroundColor = '#222'; 
    document.querySelector('.number').style.width  = '15rem'; 
})