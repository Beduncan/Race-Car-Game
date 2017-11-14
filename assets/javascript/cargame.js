// variables 
var randomhp =[2279, 1909, 1376, 2113, 1006,1273, 1210, 1069];
var usersGadd = 0; 
var randomnumber = 0;
var winC=0;
var loseC=0;
var choosenhp=[];
$(document).ready(function()
{
	//choosing the random number 
	choosenhp = randomhp[Math.floor(Math.random()*randomhp.length)];
			console.log(choosenhp);

	//making pics clickable 
	function miata()
	{
		 $("#miata").on('click', function()
			{
				console.log(usersGadd += 166)
			}); 				
	}
	function p911()	
	{
		$("#911").on('click',function()
			{
				console.log(usersGadd += 370)
			});	
	}
	function demon()	
	{
		$("#demon").on('click',function()
			{
				console.log(usersGadd += 840)
			});	
	}
	function p1()	
	{
		$("#p1").on('click',function()
			{
				console.log(usersGadd += 903)
			});	
	}
//win
function winlose()
{
	if(usersGadd == choosenhp)
	{
		alert("win");
	}
}	
	winlose();
	demon();
	p911();
	miata();
	p1();


//closing ready function
});	