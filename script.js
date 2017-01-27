var sum =0;
var count =0;
var aArray =["1_d","2_b","3_c","4_c","5_c","6_a","7_b","8_a","9_c","10_a"];


function myFunction(id) 
{
   var idNum = parseInt(id.split("_", 1));

   if (count < idNum && count > idNum-2)
   {
	count++;

	for (var i=0; i < aArray.length; i++)
	{
		if (idNum == i+1 && id != aArray[i])
		{	
			document.getElementById(id).style.color = "red";
			
        	}
		else if (idNum == i+1 && id == aArray[i])
		{
			document.getElementById(id).style.color = "green";
			sum++;
			document.getElementById('score').innerHTML="Your score is:"+sum;
			  			
		}
	}

   }
	
}