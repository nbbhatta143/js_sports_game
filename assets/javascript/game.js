let clear = document.querySelector(".clear");
let resetButton = document.querySelector("#reset-button");
let numReset = document.querySelector("#num-resets");
let audio = document.querySelector("#audio");
let audio1 = document.querySelector("#audio1");
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

//increasing team 1 shots taken and goals
let teamOneShots = 0;
let teamOneGoals = 0;
teamOneButton.addEventListener("click", function () {
  audio1.play();
  teamOneShots += 1;
  teamOneNumShots.innerHTML = teamOneShots;

  if (Math.random() > 0.8) {
    audio.play();
    teamOneGoals += 1;
    teamOneNumGoals.innerHTML = teamOneGoals;
  }
});

//increasing team 1 shots taken and goals
let teamTwoShots = 0;
let teamTowGoals = 0;
teamTwoButton.addEventListener("click", function () {
  audio1.play();
  teamTwoShots += 1;
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
  if (teamOneNumShots.innerHTML === 0 || teamTwoNumShots.innerHTML == 0) {
    //alert("You haven't started the game yet!");
    won.innerHTML = "You haven't started the game yet!";
  } else {
    if (teamOneGoals > teamTowGoals) {
      //alert("Congrats! Team One Won!");
      won.innerHTML = "Congrats! Team One Won!";
    } else if (teamTowGoals > teamOneGoals) {
      //alert("Congrats! Team Two Won!");
      won.innerHTML = "Congrats! Team Two Won!";
    } else {
      //alert("Draw!");
      won.innerHTML = "Congrats! Team Two Won!";
    }
    reset();
  }

  function reset() {
    resetCount += 1;
    numReset.innerHTML = resetCount;
    console.log(resetCount);
    teamOneNumGoals.innerHTML = 0;
    teamOneNumShots.innerHTML = 0;

    teamTwoNumGoals.innerHTML = 0;
    teamTwoNumShots.innerHTML = 0;
    teamTowGoals = 0;
    teamTwoShots = 0;
    teamOneShots = 0;
    teamOneGoals = 0;
  }
});
