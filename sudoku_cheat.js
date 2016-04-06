//www.websudoku.com cheat bot
//reads the answer that is displayed on the page and inputs and clicks submit
//make sure to be on view.websudoku.com with script inputs

function solveSudoku() {
	//get element answer
	var answer = document.getElementById("cheat").value;
	//get hidden  editmask
	var mask = document.getElementById("editmask").value;
	//for each 1 add number

	var inputs = document.getElementsByTagName("input");

	console.log(answer);
	console.log(mask);
	console.log("inputs " + inputs[0]);

	var answerPlace = 0;
	var inputPlace = 0;
	while (answerPlace < answer.length) {
		//if not filled
		if (mask.charAt(answerPlace) == '1') {
			//console.log(answer.charAt(answerPlace));
			inputs[inputPlace].value = answer.charAt(answerPlace);
		}
		answerPlace++;
		inputPlace++;
	}

	var submits = document.getElementsByName("submit");
	submits[0].click();// how am I doing?
}

function getNewGame() {
	//wait for a bit
	console.log("New game");
	var newGameSubmits = document.getElementsByName("newgame");
	console.log("first "+newGameSubmits[0]);
	newGameSubmits[0].click();
}
setTimeout(getNewGame, 1200);
setTimeout(solveSudoku,10);
console.log("bitch");




