function loadPage() {
  const box = document.getElementById('box');

  fetch('home.html', {
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
}

loadPage();


function checkName() {
    var inputName = document.getElementById('nameInput').value;
    var errorMessage = document.getElementById('errorMessage');
    var shootingDiv = document.getElementById('shootingDiv');

    if (inputName.toLowerCase() === 'leo') {
        // Redirect to another page
        window.location.href = 'willyoube.html';
    } else {
        // Display error message
        errorMessage.innerText = 'Wrong name! Who TF are you?? Get off this page!';
        shootingDiv.innerHTML = '<img src="pics/shooting.gif" alt="Shooting GIF">';
    }
}

function moveButton() {
     var button = document.getElementById('noButton');

     // Get window dimensions
     var windowWidth = window.innerWidth / 2;
     var windowHeight = window.innerHeight / 2;

     // Calculate random positions
     var randomX = Math.floor(Math.random() * (windowWidth - button.offsetWidth));
     var randomY = Math.floor(Math.random() * (windowHeight - button.offsetHeight));

     // Set button position
     button.style.left = randomX + 'px';
     button.style.top = randomY + 'px';
 }

 function yesButton() {
      window.location.href = 'shesaidyes.html';
  }
