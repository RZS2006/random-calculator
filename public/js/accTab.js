const btns = document.querySelectorAll(".faq-accordion")

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active")
        const content = btn.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          } 
    })
})

const changeIcon = (id) => {
    const element = document.getElementById(id);
    if (element.className == "fas fa-chevron-down fa-sm") {
        element.className = "fas fa-chevron-up fa-sm"
    } else {
        element.className = "fas fa-chevron-down fa-sm"
    }
}