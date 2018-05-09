//Global Variables-----------------------------------------------

var blue = Math.floor(Math.random() * (12 - 1) + 1);
var Red = Math.floor(Math.random() * (12 - 1) + 1);
var yellow = Math.floor(Math.random() * (12 - 1) + 1);
var green = Math.floor(Math.random() * (12 - 1) + 1);


//Counter
var win = 0;
var loss = 0;
var finalScore;


//Functions------------------------------------------------------
	function reset()
	 {
		//reset
		 randNum = Math.floor(Math.random() * (120 - 19) + 19);
		 console.log('randomNumber =  ' + randNum);
		 blue = Math.floor(Math.random() * (12 - 1) + 1);
		 Red = Math.floor(Math.random() * (12 - 1) + 1);
		 yellow = Math.floor(Math.random() * (12 - 1) + 1);
		 green = Math.floor(Math.random() * (12 - 1) + 1)
		 finalScore = 0;

		 //HTML
		 $('.ranNumBox').html(randNum);
		 $('.scoreDisplayChild').html(finalScore);
		 start();
	}

	function start()
	{
		 //reset
		 randNum = Math.floor(Math.random() * (120 - 19) + 19);
		 console.log('randomNumber = ' + randNum);
		 blue = Math.floor(Math.random() * (12 - 1) + 1);
		 red = Math.floor(Math.random() * (12 - 1) + 1);
		 yellow = Math.floor(Math.random() * (12 - 1) + 1);
		 green = Math.floor(Math.random() * (12 - 1) + 1)
		 finalScore = 0;

		 //HTML
		 $('.ranNumBox').html(randNum);
		 $('.scoreDisplayChild').html(finalScore);



		//This gives each crystal a random value
		$('.blue').attr("value", blue);
			var test = $('.bluecrystal').attr("value");
			//Test / Debug
			console.log('bluecrystal '+test);

		$('.redcrystal').attr("value", Red);
		var test = $('.redcrystal').attr("value");
		//Test / Debug
		console.log('redcrystal  '+test);

		$('.yellowcrystal').attr("value", yellow);
		var test = $('.yellowcrystal').attr("value");
		//Test / Debug
		console.log('yellowcrystal '+test);

		$('.greencrystal').attr("value", green);
		var test = $('.greencrystal').attr("value");
		//Test / Debug
		console.log('greencrystal '+test);

		//When clicked saves to Final score
			//added the .off() because it will repeat the click twice without it and save the last number that
			// was clicked and push it to the total score during the next game.
		$('.box').off().on('click', function()
		{
			var test1 = $(this).attr('value');
			//Adds to final score when clicked
			finalScore = parseInt(finalScore) + parseInt(test1);
			console.log('Crystal*  ' +  test1);
			console.log('finalScore***  ' + finalScore);
			$('.scoreDisplayChild').html(finalScore);

			if(randNum === finalScore)
			{
				alert('win');
				win++;
				$('.win').html(win);
				$('.scoreDisplayChild').html(0);
				reset();

			}
			else if (finalScore > randNum)
			{
				alert('loser');
				loss++;
				$('.loss').html(loss);
				$('.scoreDisplayChild').html(0);
				reset();
			}

		});


}
