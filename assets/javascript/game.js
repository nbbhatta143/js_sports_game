let clear = document.querySelector(".clear");
let resetButton = document.querySelector("#reset-button");
let numReset = document.querySelector("#num-resets");

//team one variable assignment
let teamOneNumShots = document.querySelector("#teamone-numshots");
let teamOneNumGoals = document.querySelector("#teamone-numgoals");
let teamOneButton = document.querySelector("#teamone-shoot-button");

//team two variable assignment
let teamTwoNumShots = document.querySelector("#teamtwo-numshots");
let teamTwoNumGoals = document.querySelector("#teamtwo-numgoals");
let teamTwoButton = document.querySelector("#teamtwo-shoot-button");

//message output
var won = document.querySelector("#won");

//audio
var audio = new Audio(
  "./assets/audio/Time Bomb Short-SoundBible.com-1562499525.wav"
);
var audio1 = new Audio(
  "./assets/audio/Winchester12-RA_The_Sun_God-1722751268.mp3"
);
//increasing team 1 shots taken and goals
let teamOneShots = 0;
let teamOneGoals = 0;

teamOneButton.addEventListener("click", function () {
  audio1.play();
  teamOneShots += 1;
  won.innerHTML = "";
  teamOneNumShots.innerHTML = teamOneShots;

  if (Math.random() > 0.8) {
    audio.play();
    teamOneGoals += 1;
    teamOneNumGoals.innerHTML = teamOneGoals;
  }
});

//increasing team 2 shots taken and goals
let teamTwoShots = 0;
let teamTowGoals = 0;

teamTwoButton.addEventListener("click", function () {
  audio1.play();
  teamTwoShots += 1;
  won.innerHTML = "";
  teamTwoNumShots.innerHTML = teamTwoShots;

  if (Math.random() > 0.8) {
    audio.play();
    teamTowGoals += 1;
    teamTwoNumGoals.innerHTML = teamTowGoals;
  }
});

// tracking number of counts for reset button and clearing scores
let resetCount = 0;

resetButton.addEventListener("click", function () {
  if (
    Number(teamOneNumShots.innerHTML) === 0 &&
    Number(teamTwoNumShots.innerHTML) === 0
  ) {
    //alert("You haven't started the game yet!");
    won.innerHTML = "Game haven't started yet!";
  } else if (Number(teamOneNumShots.innerHTML) === 0) {
    won.innerHTML = "Team 1 haven't started the game yet!";
  } else if (Number(teamTwoNumShots.innerHTML) === 0) {
    won.innerHTML = "Team 2 haven't started the game yet!";
  } else {
    if (teamOneGoals > teamTowGoals) {
      //alert("Congrats! Team One Won!");
      won.innerHTML =
        "Team 1 won the game with " + teamOneGoals + " goal(s)! Congrats!";
    } else if (teamTowGoals > teamOneGoals) {
      //alert("Congrats! Team Two Won!");
      won.innerHTML =
        "Team 2 won the game with " + teamTowGoals + " goal(s)! Congrats! ";
    } else {
      //alert("Draw!");
      won.innerHTML =
        "It's a Draw! both teams have " + teamOneGoals + "  goal(s)!";
    }
    reset();
  }
});

//resetting everything to 0 once reset button is clicked
function reset() {
  resetCount += 1;
  numReset.innerHTML = resetCount;
  teamOneNumGoals.innerHTML = 0;
  teamOneNumShots.innerHTML = 0;

  teamTwoNumGoals.innerHTML = 0;
  teamTwoNumShots.innerHTML = 0;
  teamTowGoals = 0;
  teamTwoShots = 0;
  teamOneShots = 0;
  teamOneGoals = 0;
}
