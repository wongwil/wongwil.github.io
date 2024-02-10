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
