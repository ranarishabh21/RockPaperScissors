const handOptions = {
    "rock": "./assets/rock_icon.png",
    "paper": "./assets/paper_icon.png",
    "scissors": "./assets/scissors_icon.png"
  }





  let pcScore = 0;
  let userScore = 0;
  
  const userPick = (hand) => {
    let hands = document.querySelector(".choices");
    hands.style.display = "none";
  
    let contest = document.querySelector(".game");
    contest.style.display = "flex";
  
    
    document.getElementById("userPicked").src = handOptions[hand];
  
    pickComputerHand(hand);
  };
  
  const pickComputerHand = (hand) => {
      let hands = ["rock", "paper", "scissors"];
      let cpHand = hands[Math.floor(Math.random() * 3)];
      
    
      document.getElementById("compPicked").src = handOptions[cpHand]
      
      referee(hand, cpHand);
  };
  
  const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand == "scissors") {
      setDecision("YOU LOSE!");
      setScore(pcScore+1,userScore);
    }
    if (userHand == "paper" && cpHand == "rock") {
      setDecision("YOU WIN!");
      setScore(pcScore,userScore+1);
    }
    if (userHand == "paper" && cpHand == "paper") {
      setDecision("TIE UP");
    }
    if (userHand == "rock" && cpHand == "scissors") {
      setDecision("YOU WIN!");

    setScore(pcScore,userScore+1);

    }
    if (userHand == "rock" && cpHand == "paper") {
      setDecision("YOU LOSE!");
      setScore(pcScore+1,userScore);
    }
    if (userHand == "rock" && cpHand == "rock") {
      setDecision("It's a tie!");
      
    }
    if (userHand == "rock" && cpHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(pcScore,userScore+1);

      }
    if (userHand == "scissors" && cpHand == "scissors") {
      setDecision("TIE UP");
      
    }
    if (userHand == "scissors" && cpHand == "rock") {
      setDecision("YOU LOSE!");
      setScore(pcScore+1,userScore);
    
    }
    if (userHand == "scissors" && cpHand == "paper") {
      setDecision("YOU WIN!");
    setScore(pcScore,userScore+1);
    }




  };
  
  const restartGame = () => {
    let contest = document.querySelector(".game");
    contest.style.display = "none";
  
    let hands = document.querySelector(".choices");
    hands.style.display = "flex";
  }
  
  const setDecision = (decision) => {
    document.querySelector(".decision h1").innerText = decision;
  }
  
  const setScore = (pcNewScore,userNewScore) => {
    pcScore = pcNewScore;
    userScore = userNewScore;
    document.querySelector(".computerScore h1").innerText = pcScore;
    document.querySelector(".yourScore h1").innerText = userNewScore;
  }