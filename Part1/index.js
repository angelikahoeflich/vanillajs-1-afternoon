const board = [];
function play(clickedId){
  const playerSpan = document.getElementById('player');
  const clickedElement = document.getElementById(clickedId); 

  if(playerSpan.innerText === 'X'){
      playerSpan.innerText = '0';
      clickedElement.innerText = 'X'
      board[clickedId] = 'X'
  } else{
    playerSpan.innerText = 'X';
    clickedElement.innerText = '0';
    board[clickedId] = '0'
  }
  console.log(board);
}
