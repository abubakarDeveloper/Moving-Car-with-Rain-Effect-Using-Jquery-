$(document).ready(function(){

	//variables
	$surface = $('.surface');
	$car = $('.car');
	$img = $('.car img');
	$night = $('.night');
	$nightDay = $('.night background');
	$body = $('body');
   var timer;

	let flag=true;

	const cars = ['./assets/Img_05.png', './assets/Img_06.png'];
	const days = ['./assets/Img_1.png', './assets/Img_07.png'];


		//To Move Car
     	$($surface).toggleClass('moveRight');
		$($car).toggleClass('suspension');
		//This is to turn light on by default as our default is raning effect
		$img.attr('src', cars[1]);

	//keypress event
	$(document).on('keypress', function(e){
		/* cosole is used to check console for js this line will display the number of key  you pressed i.e for enter it will display 13 in console
*/
		console.log(e.which);
		
		if(e.which == 100 || e.which ==13){
			$($surface).toggleClass('moveRight');
			$($car).toggleClass('suspension');
		}
	});

	$(document).on('keypress', function(e){
		if(e.which == 119){
			if(flag){
				flag=false;
				$img.attr('src', cars[0]);
			}else{
				flag=true;
				$img.attr('src', cars[1]);
			}
		}
	});


   timer =  setInterval(function(){
     	$('.drop').toggleClass('vanished');
     	$($night).toggleClass('day');

     		if(flag){
				flag=false;
				$img.attr('src', cars[0]);
			}else{
				flag=true;
				$img.attr('src', cars[1]);
			}
		
     	}, 10000);

});






/* rain effect*/




   var nbDrop = 1200;

   function randRange(maxNum, minNum) {
    return (Math.floor(Math.random(10) * (maxNum - minNum + 1)) + minNum);
   }
   

   function createRain() {
    for (i = 0; i < nbDrop; i++) {
     
     var dropLeft = randRange(0, 4000);
     var dropTop = randRange(-1000, 1000);
     $('.night').append('<div class="drop" id="drop'+ i +'"></div>');
     $('#drop' + i).css('left', dropLeft);
     $('#drop' + i).css('top', dropTop);
    /* if (i > 40) {
     	break;
     }*/
     }

   }


