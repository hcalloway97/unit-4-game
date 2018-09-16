console.log("JS CONNECTED");
// global variables / data
var targNum=0;
var score = $("#score");
var crystal = {
    blue: {
        name: "blue",
        value: 0
    },
    red: {
        name: "red",
        value: 0
    },
    orange: {
        name: "orange",
        value: 0
    },
    green: {
        name: "green",
        value: 0

    },
}

var score = 0;





// functions
function randNum() {
    return Math.floor(Math.random() * 13);
}
function goalNum() {
    return Math.floor(Math.random() * 121);
}

function startGame() {

    crystal.blue.value = randNum();
    crystal.red.value = randNum();
    crystal.orange.value = randNum();
    crystal.green.value = randNum();
    targNum=goalNum();
}

function showscore() {
    wins.text("Wins" + totalWins);
    lose.text("Lose" + totalLoses);
    targ.text("Goal" + targNum);
    beginGame();

    if (scoreNum > targNum) {
        totalLoses++;
        scoreNum = 0;
        goalNum = "LOSER";
        targ.text("Goal:" + targNum);
        score.text("you have:" + scoreNum);
        beginGame();
    }
    else if (scoreNum == targNum) {
        totalWins++;
        scoreNum = 0;
        targNum = "WINNER";
        targ.text("Goal" + targNum);
        score.text("you have" + scoreNum);
        beginGame();
    }
}






// logic flow
// function beginGame(){

startGame();

$('#score').html("Your score: " + score);
$('#wins').html("wins: " + score);
$('#loses').html("loses: " + score);


$('#blue').on("click", function () {
    score = score + crystal.blue.value;
$('#score').html("Your score: " + score);
$('#wins').html("wins: " + score);
    console.log(score);
})
$('#green').on("click", function () {
    score = score + crystal.green.value;
$('#score').html("Your score: " + score);
$('#wins').html("wins: " + score);
    console.log(score);
    ("Current Score", score)
})
$('#red').on("click", function () {
    score = score + crystal.red.value
$('#score').html("Your score: " + score);
$('#wins').html("wins: " + score);
    console.log(score);
    ("Current Score", score)
})
$('#orange').on("click", function () {
    score = score + crystal.orange.value
$('#score').html("Your score: " + score);
$('#wins').html("wins: " + score);
    console.log(score);
    ("Current Score", score)
})

    // }


