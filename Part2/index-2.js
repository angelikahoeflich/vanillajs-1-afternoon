 const idInput = document.getElementById('idInput');
 const colorInput = document.getElementById('colorInput');

// console.log(idInput, colorInput)

function setCard (){
  const someCard = document.getElementById(idInput.value);

  colorInput.value = someCard.style.color;
}