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
		 $("#miata").on('click', function()
			{
				(usersGadd += miata)
				display();
				win();		
			}); 				
		$("#911").on('click',function()
			{
				(usersGadd += Porsche)
				display();
				win();
			});	
		$("#demon").on('click',function()
			{
				(usersGadd += demon)
				display();
				win();
			});	
		$("#p1").on('click',function()
			{
				(usersGadd += MP1)
				display();
				win();
			});	
	}

function win()
{
	if(usersGadd === randomnumber)
	{
		alert("You Win!");
		reset();
		(winC = winC+1);
		display();	
	}
		
	
	else if(!(usersGadd<randomnumber))
	{
		alert("You Lose!");
		reset();
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
