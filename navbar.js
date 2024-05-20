let navbarLinks = document.querySelectorAll(".nav-link");
console.log(navbarLinks, "navbarLinks");

document.addEventListener("DOMContentLoaded", () => (
    navbarLinks.forEach((item) => {
        console.log(item)

        item.addEventListener("click", (e) => {
            e.preventDefault()
            navbarLinks.forEach((innerItem) => {
                innerItem.classList.remove("active")
                console.log(innerItem, "innerItem")
            })
            item.classList.add("active")
        })
    })
))

let navItems = document.querySelector(".nav-items");
let collapseOpen = document.getElementById("collapseOpen");

collapseOpen.addEventListener("click", () => {
    navItems.classList.toggle("active");
});
