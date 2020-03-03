const btns = document.querySelectorAll(".faq-title")

btns.forEach(btn => {
    btn.addEventListener("click", () => {
        const content = btn.nextElementSibling;
        content.classList.toggle("active")
    })
})