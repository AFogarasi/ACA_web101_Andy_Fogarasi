
var gameMarker = "X";  

function changeMarkerToO(){ 
gameMarker = "O";
}

function placeMark(this_id){
document.getElementById(this_id).innerHTML = gameMarker;
  
  
addEventListener("click", placeMark);
if (gameMarker === 'X') {
     gameMarker = 'O'
   } else {
     gameMarker = 'X'
   }
     
  
}
