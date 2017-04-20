$(document).ready(function() {

    var computerChoices = Math.floor((Math.random() * 101) + 19);
    var wins = 0;
    var losses = 0;
    var myTotal = 0;

    var crystalOne = Math.floor((Math.random() * 12) + 1);
    var crystalTwo = Math.floor((Math.random() * 12) + 1);
    var crystalThree = Math.floor((Math.random() * 12) + 1);
    var crystalFour = Math.floor((Math.random() * 12) + 1);


    var updateTotal = function() {

        $('#empty-div2').empty();
        $('#empty-div2').append(myTotal);

        $('#winning').empty();
        $('#winning').append(wins);

        $('#losing').empty();
        $('#losing').append(losses);

    }



    var game = function() {
        if (myTotal == computerChoices) {
            wins++;
            alert('YOU WIN!');
            reset();
        } else if (myTotal > computerChoices) {
            losses++;
            alert('YOU LOSE! Maybe next time!');
            reset();
        }
    }





    $('#empty-div1').html(computerChoices);

    $('#empty-div2').html(myTotal);

    $('#crystal1').click(function(event) {
        myTotal = myTotal + crystalOne;
        $('#empty-div2').html(myTotal);
        game();

    })

    $('#crystal2').click(function(event) {
        myTotal = myTotal + crystalTwo;
        $('#empty-div2').html(myTotal);
        game();
    })

    $('#crystal3').click(function(event) {
        myTotal = myTotal + crystalThree;
        $('#empty-div2').html(myTotal);
        game();
    })

    $('#crystal4').click(function(event) {
        myTotal = myTotal + crystalFour;
        $('#empty-div2').html(myTotal);
        game();
    })




    var reset = function() {

        myTotal = 0;
        crystalOne = Math.floor((Math.random() * 12) + 1);
        crystalTwo = Math.floor((Math.random() * 12) + 1);
        crystalThree = Math.floor((Math.random() * 12) + 1);
        crystalFour = Math.floor((Math.random() * 12) + 1);
        updateTotal();


        computerChoices = Math.floor((Math.random() * 101) + 19);

        $('#empty-div1').html(computerChoices);

        $('#empty-div2').html(myTotal);
    }

});
