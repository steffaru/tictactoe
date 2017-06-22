var myApp = ( function(){
 
var board = [
	["","",""],
	["","",""],
	["","",""]
];
var turn = 1;
var finished = false;
var gamer1 = "X";
var gamer2 = "O";

function validateStatus(symbol){
	var w = false;
	var h =  false;
	var d = false;

	w = (board[0][0] == symbol &&
 		 board[0][1] == symbol &&
 		 board[0][2] == symbol) ||
 		 (board[1][0] == symbol &&
 		 board[1][1] == symbol &&
 		 board[1][2] == symbol) ||
 		 (board[2][0] == symbol &&
 		 board[2][1] == symbol &&
 		 board[2][2] == symbol);
	if(!w){
	 	h = (board[0][0] == symbol &&
	 		 board[1][0] == symbol &&
	 		 board[2][0] == symbol) ||
	 		 (board[0][1] == symbol &&
	 		 board[1][1] == symbol &&
	 		 board[2][1] == symbol) ||
	 		 (board[0][2] == symbol &&
	 		 board[1][2] == symbol &&
	 		 board[2][2] == symbol);
	}
	if(!w && !h){
	 	d = (board[0][0] == symbol &&
	 		  board[1][1] == symbol &&
	 		  board[2][2] == symbol)||
	 		 (board[0][2] == symbol &&
	 		  board[1][1] == symbol &&
	 		  board[2][0] == symbol);
	}
	return w || h || d;
}


$(".cell").click(function(event){
	event.preventDefault();
	if (finished){
		return;
	}
	var x = $(this).data("x");
	var y = $(this).data("y");

	if(board[x][y] == ""){
		if(turn == 1){
			var symbol = gamer1;
			turn = 2;
		}
		else{
			var symbol = gamer2;
			turn = 1;
		}

		$(this).text(symbol);
		board[x][y] = symbol;

		if (validateStatus(symbol)){
			$("h3").addClass("alert alert-success text-center").text("The game is over");
			finished = true;
		};
	}
});

  return this; 

})();
