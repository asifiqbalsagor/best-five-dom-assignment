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
  
  
  
  
  
  
