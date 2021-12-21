function lgIN()
{
  var Un = document.forms["myForm"]["uname"].value;
  var Pw = document.forms["myForm"]["pwd"].value;
  
  if(Un=="" && Pw=="")
  {
     document.getElementById("errorsms").innerHTML=" ⚠ Username & Password cann't be empty.";
     return false;
    
  }
  if(Un=="" && Pw=="2022")
  {
     document.getElementById("errorsms").innerHTML=" ⚠ Username cann't be empty.";
     return false;
  }
  
  
  if(Un=="m2022s" && Pw=="")
  {
     document.getElementById("errorsms").innerHTML=" ⚠ Password cann't be empty.";
     return false;
    
  }
  
  if(Un=="m2022s" &&  Pw=="2022")
  {
	window.location.href="https://nandysagar.in/Welcome/";
  }
 
  else
  {
	document.getElementById("errorsms").innerHTML=" ❌ Incorrect Username Or, Password. ❌";
     return false;
  }
}
