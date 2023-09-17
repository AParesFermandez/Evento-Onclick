// 1. Cambiar el texto del botón "Login" a "Logout"
const loginButton = document.querySelector('.btn');
loginButton.addEventListener('click', () => {
    if (loginButton.textContent === 'Login') {
        loginButton.textContent = 'Logout';
    } else {
        loginButton.textContent = 'Login';
    }
});

// 2. Ocultar el botón "Add Definition"
const defButton = document.querySelector('.defbtn');
defButton.addEventListener('click', () => {
    defButton.style.display = 'none';
    //no supe si usar none o remove ya que remove lo quitaba y me daba como un desorden
});

// 3. Mostrar un mensaje emergente al dar clic en el botón "Like"
// este es el mas complicado es como el tercer intento de ventana emergente
const likeButtons = document.querySelectorAll('.likebtn');
const modal = document.getElementById('modal');
const okButton = document.getElementById('okButton');

likeButtons.forEach(likeButton => {
    likeButton.addEventListener('click', () => {
        modal.style.display = 'block'; // Mostrar el mensaje emergente
    });
});

// Cerrar el mensaje emergente al hacer clic en el botón "OK"
okButton.addEventListener('click', () => {
    modal.style.display = 'none'; // Ocultar el mensaje emergente
});