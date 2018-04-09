$(document).ready(function(){
    var game = new Game();

    /*
        When the go button is clicked, submmit user input.
         🏹 Get the value in user input field: $('guessInput').val();
         🏹 Submit the value: game.playersGuessSubmission(num);
         🏹 Display the result for the user

                                                                */ 
    $('#go').on('click', function(){
        var guess = $('#guessInput').val(),
            outcome = game.playersGuessSubmission(guess),
            pastGuesses = game.pastGuesses,
            position = pastGuesses.length-1;

        $('#hintDisplay').hide();

        if(pastGuesses.length === 1){
            $('li').first().text(game.pastGuesses[position]);
        }else if(pastGuesses.length > 1 && pastGuesses.length < 6){
            $('li').eq(position).text(game.pastGuesses[position]);
        }


        $('#resDisplay').find('p').text(outcome);
        $('#resDisplay').addClass('move');
        $('#guessInput').val('');
        
    });

    $('#guessInput').on('keyup', function(){
        $('#resDisplay').removeClass('move');
    });

    $('#go').on('mouseenter', function(){
        $(this).animate({width: '80px', height:'80px'}, 'fast');
    });
    $('#go').on('mouseleave', function(){
        $(this).animate({width: '60px', height:'60px'}, 'fast');
    });
    //Game ends disable input, go button, hint button
    function gameEnded(){
        disableProp('#guessInput', true);
        disableProp('#go', true);
        disableProp('#hint', true);
    }

    function disableProp(element, yesNo){
        $(element).prop('disable', yesNo);
    }
    //When the hint button is clicked, displays the hint
    $('#hint').on('click', function(){
        var hints = game.provideHint();
        $('#hintDisplay').show();
        $('#hintDisplay').text('One of them is the winning number: ' + hints.join(', ') + '.');      
    });
    //When reset button is clicked, clean page data
    $('#reset').on('click', function(){
        game = newGame();
        $('li').text('-');
        game.pastGuesses = [];
        $('#resDisplay').find('p').text('');

    })
})