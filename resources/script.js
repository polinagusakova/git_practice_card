let eventTarget = document.getElementById("theme");
let root = document.querySelector(":root");

eventTarget.addEventListener('click', () => {
    root.classList.toggle('dark');
})