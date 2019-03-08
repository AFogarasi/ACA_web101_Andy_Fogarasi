
var gameMarker = "X";  

function changeMarkerToO(){ 
gameMarker = "O";
}

function placeMark(this_id){
document.getElementById(this_id).innerHTML = gameMarker;
}
 