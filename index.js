const hamOpen = document.getElementById("ham-open");
const navItems = document.getElementById("nav-items");
const hamClose = document.getElementById("ham-close");
const body = document.getElementsByTagName("body")[0]

hamOpen.addEventListener("click", () => {
    navItems.classList.add("nav-open");
    hamOpen.style.display = "none"
    hamClose.style.display = "block"
    body.style.overflow = "hidden"
})

hamClose.addEventListener("click", () => {
    body.style.overflow = "scroll"
    navItems.classList.remove("nav-open");
    hamClose.style.display = "none"
    hamOpen.style.display = "block"
})