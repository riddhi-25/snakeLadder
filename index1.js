(function (){
  let cnt = 1;

let p1sum = 0;

let p2sum = 0;

let diceNum;

const snakeLadder = new Map([
  [4,56],[12,50],[14,55],[22,58],[41,79],[54,88],
  [28,10],[37,3],[47,16],[75,32],[94, 71],[96, 42]  
]);
// for adding another snakeLadder.set(96, 42);
//dice rolling sound---->
function playMusic() {
  var music = new Audio("./dice-142528.mp3");
  music.play();
}

//Dice number-------->
let diceClicked = document.getElementById("rollDice");

diceClicked.addEventListener("click", function () {
  // console.log("click cnt " + cnt);

  diceNum = Math.floor(Math.random() * 6) + 1;

  document.getElementById("diceNo").innerText = diceNum;

  playerChoose(diceNum, cnt);

  if (cnt == 1) {
    cnt = 2;
  } else {
    cnt = 1;
  }

  // console.log("cnt " + cnt);
});

// Player to choose------>
function playerChoose(num, player) {
  if (player == 1) {
    document.getElementById("playerNo").innerText = player;

    if (p1sum > 0) {
      document.getElementById(`item${p1sum}`).classList.remove("style1");
    }

    p1sum = allCalculation(p1sum, num, player);

    document.getElementById(`item${p1sum}`).classList.add("style1");
  } else {
    player = 2;

    document.getElementById("playerNo").innerText = player;
    if (p2sum > 0) {
      document.getElementById(`item${p2sum}`).classList.remove("style2");
    }
    p2sum = allCalculation(p2sum, num, player);
    document.getElementById(`item${p2sum}`).classList.add("style2");
  }
}

//grid calc---------->
function allCalculation(psum, number, player) {
  psum += number;
  if (psum > 100) {
    psum -= diceNum;
  } else if (psum == 100) {
    alert("player " + player + " won");
    location.reload();
  } 
  else if(snakeLadder.has(psum)){
    psum=snakeLadder.get(psum);
  }
  return psum;
}

})();