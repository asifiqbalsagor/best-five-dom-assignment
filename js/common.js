function buttonSelect(element) {
  const playerName = element.parentNode.children[0].innerText;

  const players = {
    playerName: playerName,
  };

  playerArray.push(players);

  displayPlayerName(playerArray);

  element.setAttribute("disabled", true);
}

const playerArray = [];






function displayPlayerName(PlayerName) {
  const listOfPlayerName = document.getElementById("list-of-player-name");
  listOfPlayerName.innerText = "";
  
  for (let i = 0; i < PlayerName.length; i++) {
   if ([i] <= 4) {
     const playerNames = playerArray[i].playerName;
     
     const tr = document.createElement("tr");
  
     tr.innerHTML = `   
       
        <th class="fs-4 fw-semibold ">${i + 1}</th> 
        <td class="fs-4 fw-semibold "> ${playerNames}</td> 
        `;
        listOfPlayerName.appendChild(tr);
        
   } else {
     alert("you can select maximum 5 player");
     
     return;
   }
  }
  }
  
  
  
  
  
  
  document.getElementById("button-calculate").addEventListener("click", function () {
    const perPlayerInputField = document.getElementById("player-input-field");
    const perPlayerInputString = perPlayerInputField.value;
    const perPlayerInputValue = parseFloat(perPlayerInputString);
    if (isNaN(perPlayerInputValue)) {
     alert("Please enter a valid number");
     return;
    }
    const playerArrayLength = playerArray.length;
    
    const perPlayerCost = playerArrayLength * perPlayerInputValue;
    const playerCostNumber = document.getElementById("player-cost");
    playerCostNumber.innerText = perPlayerCost;
    });
    
    
    
    
    
    
    document.getElementById("calculate-total").addEventListener("click", function () {
      const playerCostNumber = document.getElementById("player-cost");
      const playerCostString = playerCostNumber.innerText;
      const playerCost= parseFloat(playerCostString);
     
      const managerInputField = document.getElementById("manager-input-field");
      const managerInputString = managerInputField.value;
      const managerInputValue = parseFloat(managerInputString);
     
      const coachInputField = document.getElementById("coach-input-field");
      const coachInputString = coachInputField.value;
      const coachInputValue = parseFloat(coachInputString);
     
      if (isNaN(managerInputValue) || isNaN(coachInputValue)) {
        alert("Please enter the valid number");
        return;
      }
     
      const calculateTotal = playerCost + managerInputValue + coachInputValue;
     
      const totalAmount = document.getElementById("total-amount");
     
      totalAmount.innerText = calculateTotal;
     });
    