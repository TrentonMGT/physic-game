var options =["q","r","b"];
		
		wins = 0;
		losses = 0;	
		guessesLeft = 9;
		function reset(){
			guessesLeft = 9;

			console.log("Your guess has been reset to " +guessesLeft);

			return document.getElementById("guessesLeft").innerHTML = "Guesses Left: "+guessesLeft ;
		}	

		document.onkeyup = function(){

			var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

			console.log(userGuess);

			document.getElementById("userGuess").innerHTML = "Your Guesses so far: " +userGuess ;

			var computersPick = options[Math.floor(Math.random()*options.length)];

			console.log(computersPick);
				
			
			if (userGuess == computersPick)
			{
				//alert("user wins");
				wins++;
				console.log("userWins " + wins);

				document.getElementById("wins").innerHTML = "Wins: " +wins ;
				reset();
			}
			if (userGuess !== computersPick)
			{			
				// console.log("Guessed Left " + guessesLeft--);
				document.getElementById("guessesLeft").innerHTML = "Guesses Left: " +guessesLeft-- ;
			}
			if (guessesLeft == 0){

				losses++;
				console.log("Losses :" + losses);

				document.getElementById("losses").innerHTML = "Losses: " +losses;
				reset();
			}
	}