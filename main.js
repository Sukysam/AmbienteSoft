const humburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

humburger.addEventListener("click", () => {
    humburger.classList.toggle("active")
    menu.classList.toggle("active")
})




