//Timothy Ryan Scully

/*
  This is a simple program that is meant to list each element of an array
  and find out wheather or not that element is a multiple of the number.

*/

var List = [1,2,3,4,5,6,7,8,9]; //Here is our handy dandy list

var number = 10;  //For this example, we will use the number 10.

function FindMultiple(List, number)
{
  //The for loop; a sorting algorithm's best friend!
  for (i = 0; i < List.length; i++)
  {
   //We check if indeed the element is a multiple
   if (number % List[i] == 0)
   {
   //If so, we say so.
   document.getElementById("paragraph").innerHTML += List[i] + " is a multiple of " + number + ".<br>";
   }
   else
   {
   //If not, we say NOT like its 1995.
   document.getElementById("paragraph").innerHTML += List[i] + " is NOT a multiple of " + number + ".<br>";
   }

  }
  //We then finish the function with a freindly message from your neighboring code monkey :)
  document.getElementById("paragraph").innerHTML += "<br><br> That's it. Now get out of here; I'm watching Youtube!";

  //Then we shut it down.
  return
}

//And here is where our brand new baby function takes its first steps. So proud! XD
FindMultiple(List, number);
