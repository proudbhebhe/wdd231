const navButton = document.getElementById("ham-Button");
const navBar = document.getElementById("nav-bar");
const today = document.querySelector("#currentYear");
if (today) today.textContent = new Date().getFullYear();
navButton.addEventListener('click', () => {
  navButton.classList.toggle('show');
  navBar.classList.toggle('show');
});

document.getElementById("lastModified").innerHTML ="Last modified:" + document.lastModified;