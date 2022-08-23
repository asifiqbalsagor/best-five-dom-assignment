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






