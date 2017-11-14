// variables 
var randomhp =[2279, 1909, 1376, 2113, 1006, 1273, 1210, 1069];
var usersGadd = 0; 
var randomnumber = 0;
var winC=0;
var loseC=0;
var choosenhp=[];
$(document).ready(function()
{	

	//choosing the random number 
			randomnumber = Math.floor((Math.random() * 200) + 19);
			console.log(randomnumber);
		//geteing var from html 
	function display()
	{
		document.getElementById("random#").innerHTML = randomnumber;
		document.getElementById("usernumber").innerHTML = usersGadd;
	}
	function click()
	{
		miata = Math.floor((Math.random() * 10) + 1);
		Porsche = Math.floor((Math.random() * 10) + 1);
		demon = Math.floor((Math.random() * 10) + 1);
		MP1 = Math.floor((Math.random() * 10) + 1);


	//making pics clickable 
		 $("#miata").on('click', function()
			{
				(usersGadd += miata)
				display();
			}); 				
		$("#911").on('click',function()
			{
				(usersGadd += Porsche)
				display();
			});	
		$("#demon").on('click',function()
			{
				(usersGadd += demon)
				display();
			});	
		$("#p1").on('click',function()
			{
				(usersGadd += MP1)
				display();
			});	
	}
//calling fuctions 
display();
click();
	
if(usersGadd == randomnumber)
{
	alert("win");
}

//closing ready function
});	