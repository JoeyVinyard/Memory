//Colors that we will use to color the squares
var colors = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#401F11", "#AAAAAA"];
//Store whether or not a square is taken already
var isTaken = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
//Blank array to store tile color
var tileColor = new Array(16);

//Generate a random number 1-16
function genRandomTile(){
  return Math.floor(Math.random() * (16)) + 1;
}

//Check if two tiles have a matching color
function isMatching(first, second){
  if(tileColor[first] == tileColor[second]){
    return true;
  }
  else{
    return false;
  }
}

//Loop through 8 times, one for each color
for(var i = 0; i <= 7; i++){
  //Generate two tiles to color
  for(var y = 0; y < 2; y++){
  var tile;
  do{
    tile = genRandomTile();
  }while(isTaken[tile-1])//Loop until we find a square that isn't taken
    isTaken[tile-1]=true;
    tileColor[tile] = colors[i];
  }
}

var oneClicked = false;//One tile clicked or not
var lastBox;
var match = 0;//Number of matches found

$("td").click(function() {
  //toggle oneClicked
  oneClicked = !oneClicked;
  
  //Find the id of the clicked box
	var box = $(this).attr('id');
  //Set the color of the box
  $("#"+box).css("background-color", tileColor[box]);
  
  //Check if two tiles have been clicked, and that they don't match
  if(!oneClicked && !isMatching(box,lastBox)){
      $("#"+box).css("background-color", "#FFFFFF");
      $("#"+lastBox).css("background-color", "#FFFFFF");
  }
  //Check if matching
  else if(isMatching(box,lastBox)){
    match++
    $("#matches").text("Matches Found: " + match);
  }
  //Store the previous box number
  lastBox = box;  
});