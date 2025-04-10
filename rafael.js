let isLoggedIn = false;
let userRole = ''; // Va stoca rolul utilizatorului

// Funcția de logare
function login(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Simulăm logarea, de exemplu, pentru "utilizator" și "parola123"
  if (username === "utilizator" && password === "parola123") {
    isLoggedIn = true;
    userRole = 'client'; // De exemplu, atribuim rolul de client
    document.getElementById('loginForm').style.display = 'none';
    showRoleSelection();
  } else {
    alert('Date incorecte de logare!');
  }
}

// Funcția de înregistrare
function register(event) {
  event.preventDefault();

  const newUsername = document.getElementById('newUsername').value;
  const newPassword = document.getElementById('newPassword').value;
  const role = document.getElementById('role').value;

  // Înregistrare simulată
  alert(`Cont creat cu succes! Rol: ${role}`);
  
  document.getElementById('registerForm').style.display = 'none';
  isLoggedIn = true;
  userRole = role;

  showRoleSelection();
}

// Funcția pentru a arăta sau ascunde formularul de logare
function toggleLoginForm() {
  const loginForm = document.getElementById('loginForm');
  loginForm.style.display = loginForm.style.display === 'block' ? 'none' : 'block';
}

// Funcția pentru a arăta sau ascunde formularul de înregistrare
function toggleRegisterForm() {
  const registerForm = document.getElementById('registerForm');
  registerForm.style.display = registerForm.style.display === 'block' ? 'none' : 'block';
}

// Funcția pentru a alege rolul după logare sau înregistrare
function showRoleSelection() {
  let roleContent = '';
  if (userRole === 'client') {
    roleContent = `
      <h2>Client - Închiriază o Mașină</h2>
      <p>Alege un model de mașină pentru a o închiria:</p>
      <ul id="carList">
        <li><a href="#" onclick="selectCar('Mercedes')">Mercedes</a></li>
        <li><a href="#" onclick="selectCar('BMW')">BMW</a></li>
        <li><a href="#" onclick="selectCar('Audi')">Audi</a></li>
      </ul>
    `;
  } else if (userRole === 'owner') {
    roleContent = `
      <h2>Proprietar - Oferă o Mașină pentru Închiriere</h2>
      <p>Completează informațiile pentru a adăuga mașina ta:</p>
      <form id="addCarForm" onsubmit="addCar(event)">
        <label for="carModel">Model Mașină:</label>
        <input type="text" id="carModel" required><br>
        <label for="carYear">An Fabricație:</label>
        <input type="number" id="carYear" required><br>
        <label for="carPrice">Preț pe Zi:</label>
        <input type="number" id="carPrice" required><br>
        <button type="submit">Adaugă Mașina</button>
      </form>
    `;
  }

  document.getElementById('response').innerHTML = roleContent;
}

// Funcția pentru a selecta o mașină
function selectCar(carModel) {
  alert(`Ai selectat ${carModel} pentru închiriere.`);
}

// Funcția pentru a adăuga o mașină pentru închiriere
function addCar(event) {
  event.preventDefault();

  const carModel = document.getElementById('carModel').value;
  const carYear = document.getElementById('carYear').value;
  const carPrice = document.getElementById('carPrice').value;

  alert(`Mașina ${carModel} a fost adăugată cu succes! An: ${carYear}, Preț pe zi: ${carPrice}`);
}

// Funcția pentru a închide formularul de logare
function closeLoginForm() {
  document.getElementById('loginForm').style.display = 'none';
}

// Funcția pentru a închide formularul de înregistrare
function closeRegisterForm() {
  document.getElementById('registerForm').style.display = 'none';
}
// Funcția de logare
function login(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  if (email === "test@example.com" && password === "parola123") {
    alert('Te-ai logat cu succes!');
    document.getElementById('authFormContainer').style.display = 'none'; // Ascunde formularul de logare
  } else {
    alert('Email sau parolă incorectă!');
  }
}

// Funcția de înregistrare
function register(event) {
  event.preventDefault();

  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;
  const accountType = document.querySelector('input[name="accountType"]:checked').value;

  // Aici ai putea salva informațiile în backend (server) pentru a crea un cont real
  alert(`Înregistrare reușită!\nTip cont: ${accountType}\nEmail: ${email}\nParolă: ${password}`);
  document.getElementById('authFormContainer').style.display = 'none'; // Ascunde formularul de înregistrare
}

// Funcția pentru a comuta între formularul de logare și înregistrare
function toggleForm(formType) {
  if (formType === 'register') {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registerForm').style.display = 'block';
  } else if (formType === 'login') {
    document.getElementById('registerForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
  }
}
// Funcție pentru logare
function login(event) {
  event.preventDefault();

  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Verifică emailul și parola
  if (email === "test@example.com" && password === "parola123") {
    alert('Te-ai logat cu succes!');
    document.getElementById('authFormContainer').style.display = 'none'; // Ascunde formularul de logare
    showText('home');
  } else {
    alert('Email sau parolă incorectă!');
  }
}

// Funcție pentru înregistrare
function register(event) {
  event.preventDefault();

  const email = document.getElementById('registerEmail').value;
  const password = document.getElementById('registerPassword').value;

  // Înregistrează utilizatorul
  alert('Contul tău a fost creat cu succes!');
  document.getElementById('authFormContainer').style.display = 'none'; // Ascunde formularul de înregistrare
  showText('home');
}

// Funcție pentru comutarea între formularele de logare și înregistrare
function toggleAuthForm() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  // Schimbă între logare și înregistrare
  if (loginForm.style.display === 'none') {
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
  } else {
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
  }
}
