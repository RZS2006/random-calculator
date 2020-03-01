const burger = document.getElementsByClassName("burger")[0];
const navContainer = document.getElementsByClassName("nav-container")[0];

burger.addEventListener("click", () => {
    navContainer.classList.toggle("active")
    burger.classList.toggle("clicked")
})