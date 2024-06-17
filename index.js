class Game {
  
    constructor() {
      this.cnt = 1;
      this.p1sum = 0;
      this.p2sum = 0;
      this.diceNum = null;
      this.diceClicked = document.getElementById("rollDice");
      this.diceClicked.addEventListener("click", this.rollDice.bind(this));
    }
  
    playMusic() {
      var music = new Audio("./dice-142528.mp3");
      music.play();
    }
  

    rollDice() {
      this.diceNum = Math.floor(Math.random() * 6) + 1;
      document.getElementById("diceNo").innerText = this.diceNum;
      this.playerChoose(this.diceNum, this.cnt);
      this.cnt = this.cnt === 1? 2 : 1;
    }
  
    playerChoose(num, player) {
      if (player === 1) {
        document.getElementById("playerNo").innerText = player;
        if (this.p1sum > 0) {
          document.getElementById(`item${this.p1sum}`).classList.remove("style1");
        }
        this.p1sum = this.allCalculation(this.p1sum, num, player);
        document.getElementById(`item${this.p1sum}`).classList.add("style1");
      } else {
        player = 2;
        document.getElementById("playerNo").innerText = player;
        if (this.p2sum > 0) {
          document.getElementById(`item${this.p2sum}`).classList.remove("style2");
        }
        this.p2sum = this.allCalculation(this.p2sum, num, player);
        document.getElementById(`item${this.p2sum}`).classList.add("style2");
      }
    }
  
    allCalculation(psum, number, player) {
      psum += number;
      if (psum > 100) {
        psum -= this.diceNum;
      } else if (psum === 100) {
        alert(`player ${player} won`);
        location.reload();
      } else if (psum === 96) {
        psum = 42;
      } else if (psum === 94) {
        psum = 71;
      } else if (psum === 75) {
        psum = 32;
      } else if (psum === 47) {
        psum = 16;
      } else if (psum === 37) {
        psum = 3;
      } else if (psum === 28) {
        psum = 10;
      } else if (psum === 4) {
        psum = 56;
      } else if (psum === 14) {
        psum = 55;
      } else if (psum === 12) {
        psum = 50;
      } else if (psum === 22) {
        psum = 58;
      } else if (psum === 41) {
        psum = 79;
      } else if (psum === 54) {
        psum = 88;
      }
      return psum;
    }
  }
  
  const game = new Game();