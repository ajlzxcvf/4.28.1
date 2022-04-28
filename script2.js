function checkUserName(){ 
  var username = document.getElementById('userName'); 
  var errname = document.getElementById('nameErr'); 
 
  if(username.value.length == 0){ 
    errname.innerHTML="Please enter the content, not blank"
    errname.className="error"
    return false; 
    } 
  
   else{ 
     errname.innerHTML="OK"
     errname.className="success"; 
     return true; 
     } 
  } 
   
function checkUserName1(){ 
  var username1 = document.getElementById('userName1'); 
  var errname1 = document.getElementById('name1Err'); 
 
  if(username1.value.length == 0){ 
    errname1.innerHTML="Please enter the content, not blank"
    errname1.className="error"
    return false; 
    } 
  
   else{ 
     errname1.innerHTML="OK"
     errname1.className="success"; 
     return true; 
     } 
  } 

function checkUserName3(){ 
  var username3 = document.getElementById('userName3'); 
  var errname3 = document.getElementById('name3Err'); 
 
  if(username3.value.length == 0){ 
    errname3.innerHTML="Please enter the content, not blank"
    errname3.className="error"
    return false; 
    } 
  
   else{ 
     errname3.innerHTML="OK"
     errname3.className="success"; 
     return true; 
     } 
  } 
function checkUserName4(){ 
  var username4 = document.getElementById('userName4'); 
  var name4Err = document.getElementById('name4Err'); 
  var pattern = /^[0-9]+$/; 
  if(!pattern.test(username4.value)){ 
    name4Err.innerHTML="Please enter the number"
    name4Err.className="error"
    return false; 
    } 
   else{ 
     name4Err.innerHTML="OK"
     name4Err.className="success"; 
     return true; 
     } 
  }