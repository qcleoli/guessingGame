/*
    Guessing Game Part 2: 

    Constructor
       ☆ Game(){}
             - Game.prototype.playersGuessSubmission
             - Game.prototype.checkGuess
             - Game.prototype.difference
             - Game.prototype.isLower
             - Game.prototype.provideHint         
*/
function Game(){
    this.playersGuess = null;
    this.pastGuesses = [];
    this.winningNumber = generateWinningNumber();
}
Game.prototype.difference = function(){
    return Math.abs(this.playersGuess - this.winningNumber);
}
Game.prototype.isLower = function(){
    return this.playersGuess < this.winningNumber;
}
Game.prototype.playersGuessSubmission = function(num){
    if(isNaN(num) || num*1 < 1 || num * 1 > 100) throw 'That is an invalid guess.';
    else{
        this.playersGuess = num;
        return this.checkGuess();  
    }
}
Game.prototype.checkGuess = function(){
    var outcome='';
    if(this.playersGuess === this.winningNumber) outcome = 'You Win!';
    else if(this.pastGuesses.indexOf(this.playersGuess)>=0) outcome = 'You have already guessed that number.';
    else{
        this.pastGuesses.push(this.playersGuess);
        var d1 = this.difference();
        if(this.pastGuesses.length === 5) outcome = 'You Lose.';
        else if(d1 < 10) outcome = 'You\'re burning up!';
        else if(d1 < 25) outcome = 'You\'re lukewarm.';
        else if(d1 < 50) outcome = 'You\'re a bit chilly.';
        else outcome = 'You\'re ice cold!';
    } 
    return outcome;
}
Game.prototype.provideHint = function(){
    var hints = [this.winningNumber, generateWinningNumber(), generateWinningNumber()];    
    return shuffle(hints);
}

function newGame(){
    return new Game();
}
/*
    generateWinningNumber() returns a random number between 1 and 100 using the Math.radom method
*/

function generateWinningNumber(){
    return Math.round(Math.random() * 100 + 1);
}

/*
  shuffle(array) returns the array rearranged in random order  
*/

function shuffle(array){
    var maxIndex = array.length -1;
    for(var i = 0; i < (maxIndex / 2); i++){
        var a = randomHasLength(maxIndex);
        var b = randomHasLength(maxIndex); console.log(a, b);
        var temp = array[a];
        array[a] = array[b];
        array[b] = temp;
    }

    function randomHasLength(maxIndex){
        return Math.round(Math.random() * maxIndex);
    }
    console.log(array);
    return array;
}
