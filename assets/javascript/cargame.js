// variables 

var usersGadd= 0; 
var randomnumber= 0;
var winC=0;
var loseC=0;
$(document).ready(function()
{	
	//geteing var from html 
	function display()
	{
		document.getElementById("random#").innerHTML = randomnumber;
		document.getElementById("usernumber").innerHTML = usersGadd;
		document.getElementById("wins").innerHTML = winC;
		document.getElementById("loses").innerHTML = loseC;
	}
	
	//choosing the random number
	function reset()
	{
		randomnumber = Math.floor((Math.random() * 181) + 19);
			console.log(randomnumber);
		
		usersGadd=0		
		miata = Math.floor((Math.random() * 3) + 1);
		Porsche = Math.floor((Math.random() * 4) + 3);
		demon = Math.floor((Math.random() * 4) + 6);
		MP1 = Math.floor((Math.random() * 4) + 9);
	}

	function click()
	{
		//making pics clickable
		//this is the miata 
		 $("#miata").on('click', function()
			{
				(usersGadd += miata)
				display();
				win();		
			}); 
			//this is the 911				
		$("#911").on('click',function()
			{
				(usersGadd += Porsche)
				display();
				win();
			});	
		//this is the dodge demon 
		$("#demon").on('click',function()
			{
				(usersGadd += demon)
				display();
				win();
			});	
		// this is the the mclaren p1
		$("#p1").on('click',function()
			{
				(usersGadd += MP1)
				display();
				win();
			});	
	}
//win function 
function win()
{
	//if your guess is equil to the random number you win 
	if(usersGadd === randomnumber)
	{
		//alerts user
		alert("You Win!");
		//rests game 
		reset();
		//win count up by one 
		(winC = winC+1);
		display();	
	}
		
	//is the user go over the random number 
	else if(!(usersGadd<randomnumber))
	{
		//alert user 
		alert("You Lose!");
		//resets game
		reset();
		//add one to lose counter 
		(loseC = loseC+1);
		display();
	}
}		
//calling fuctions 
	reset();	
	display();	
	click();
	console.log(winC)
	console.log(loseC)
	win();
//closing ready function
});	
