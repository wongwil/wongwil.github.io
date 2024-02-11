function loadPage() {
  fetchPage('verify.html')
}

function fetchPage(file){
  const box = document.getElementById('box');
  fetch(file, {
    // 👇️ set Accept header to `text/html`
    headers: {
      Accept: 'text/html',
    },
  })
    .then(response => response.text())
    .then(html => {
      box.innerHTML = html;
    })
    .catch(error => {
      console.log(error);
    });

  window.scrollTo({top: 0, behavior: 'smooth'});
}
loadPage();


function checkName() {
    var inputName = document.getElementById('nameInput').value;
    var errorMessage = document.getElementById('errorMessage');
    var shootingDiv = document.getElementById('shootingDiv');

    if (inputName.toLowerCase() === 'leo' ||  inputName.toLowerCase() === 'schatzi'
    || inputName.toLowerCase() === 'schnucki' || inputName.toLowerCase() === 'baby'
    || inputName.toLowerCase() === 'babe') {
        // Redirect to another page
        fetchPage('willyoube.html');
    } else {
        // Display error message
        errorMessage.innerText = 'Wrong name! Who TF are you?? Get off this page!';
        shootingDiv.innerHTML = '<img src="pics/shooting.gif" width="200px" alt="Shooting GIF">';
    }
}

var noButton = document.getElementById('noButton');
//var originalTop = noButton.offsetTop;
//var originalLeft = noButton.offsetLeft;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function moveButton() {
  var randomLeft = getRandomInt(0, window.innerWidth  - noButton.clientWidth);

  noButton.style.left = originalLeft - randomLeft + 'px';
 }

 var scaleIncrement = 0.5;

 function clickNo() {
  var yesButton = document.getElementById('yesButton');
  var currentScale = parseFloat(yesButton.style.transform.split('(')[1]) || 1;

  var newScale = currentScale + scaleIncrement;

  console.log(newScale)

  yesButton.style.transform = 'scale(' + newScale + ')';
  //moveButton()
 }

function yesButton() {
    fetchPage('shesaidyes.html');
}

function theEndButton() {
  fetchPage('appreciate.html');
}

