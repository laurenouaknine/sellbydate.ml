//SET UP CLOCK
window.onload = Fridge;

function Fridge(){


		//function to make buttons appear onload
		$("button").removeClass("hidden");
		$("p").removeClass("hidden");

		$( "button" ).click(function() {

 			$(".title").addClass("hidden");


 			setTimeout(function(){
  				$(".title").removeClass("hidden");
  			}, 35000);

		});



		var currentTime = getCurrentTime();
		console.log( currentTime );

		//global variables
		var divs = document.getElementsByTagName('divs');

		//window width and height
		var winWidth = window.innerWidth;
		var winHeight = window.innerHeight;


 		//All of the click functions to show div and hide button

 		//MILK

 		$( "#milk" ).click(function() {

 			

 			// alert( "Handler for .click() called." );
 			$("#one").removeClass("hidden").animate({
			    // width: "300%",
			    color: "red",
			    fontSize: "10em",
			    borderWidth: "10px"
			  }, 15000 );


 			setTimeout(function(){
  				$("#milk").removeClass("hidden");
  				$("#one").addClass("hidden");
  			}, 15000);



  			$("#milk").addClass("hidden");
		});



 		//BREAD

		$( "#bread" ).click(function() {

			setTimeout(function(){
  				$("#bread").removeClass("hidden");
  				$("#two").addClass("hidden");
  			}, 15000);

			// alert( "Handler for .click() called." );
 			$("#two").removeClass("hidden").animate({
			    // width: "300%",
			    color: "red",
			    fontSize: "10em",
			    borderWidth: "10px"
			  }, 15000 );

  			$("#bread").addClass("hidden");
		});



		//EGGS

		$( "#eggs" ).click(function() {

			setTimeout(function(){
  				$("#eggs").removeClass("hidden");
  				$("#three").addClass("hidden");
  			}, 31000);

			// alert( "Handler for .click() called." );
 			$("#three").removeClass("hidden").animate({
			    // width: "300%",
			    color: "red",
			    fontSize: "10em",
			    borderWidth: "10px"
			  }, 31000 );

  			$("#eggs").addClass("hidden");
		});


		//FRUIT

		$( "#fruit" ).click(function() {

			setTimeout(function(){
  				$("#fruit").removeClass("hidden");
  				$("#four").addClass("hidden");
  			}, 11000);

			// alert( "Handler for .click() called." );
 			$("#four").removeClass("hidden").animate({
			    // width: "300%",
			    color: "red",
			    fontSize: "10em",
			    borderWidth: "10px"
			  }, 11000 );

  			$("#fruit").addClass("hidden");
		});


		//VEGGIES

		$( "#veggies" ).click(function() {

			setTimeout(function(){
  				$("#veggies").removeClass("hidden");
  				$("#five").addClass("hidden");
  			}, 6000);

			// alert( "Handler for .click() called." );
 			$("#five").removeClass("hidden").animate({
			    // width: "300%",
			    color: "red",
			    fontSize: "10em",
			    borderWidth: "10px"
			  }, 6000 );

  			$("#veggies").addClass("hidden");
		});



 

	//2. DOTS
	// collect all the divs
	var divs = document.getElementsByTagName('div');
	console.log( divs );
	
	// get window width and height
	var winWidth = window.innerWidth;
	var winHeight = window.innerHeight;

	for ( var i=0; i < currentTime.dayMonth; i++ ) {

		// returns a random number between a min and max
		function getRandomNumber(min, max) {
	    
	  			return Math.random() * (max - min) + min;
	    
				}
    // get random numbers for each element
    	randomTop = getRandomNumber(0, winHeight);
    	randomLeft = getRandomNumber(0, winWidth);
    
    // update top and left position
    	divs[i].style.top = randomTop +"px";
    	divs[i].style.left = randomLeft +"px";

		}//end of for loop

} //end of Fridge function



//DON'T TOUCH THIS

function getCurrentTime() {

			
			var now = new Date();
			var dayMonth = now.getDate();
			var meridien = "AM";
			var hours = now.getHours();
			var minutes = now.getMinutes();
			var month = (now.getMonth()) + 1;
			var start = new Date(now.getFullYear(), 0, 0);
			var diff = now - start;
			var oneDay = 1000 * 60 * 60 * 24;
			var day = Math.floor(diff / oneDay);
			var seconds = now.getSeconds();
			

			if ( hours >= 12 ) {
				meridien = "PM"
				hours = hours - 12; 
			}

			if (minutes < 10 ){
				minutes = "0"+minutes;
			}

			return{
				hours : hours,
				minutes : minutes,
				meridien : meridien,
				month : month,
				day : day,
				seconds : seconds,	
				dayMonth : dayMonth		
			}
}//end the get current time

