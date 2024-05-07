function myFunction() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    let icon = document.getElementsByClassName('hero_link');
    for (let i = 0; i < icon.length; i++) {
        icon[i].style.color = 'white';
    }
}