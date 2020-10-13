function play(number){
  const square = document.getElementById(number)
  const player = document.getElementById('player');

 
  if(square.innerText === 'X'){
    square.innerText = '0'
  }  else square.innerText = 'X';
}