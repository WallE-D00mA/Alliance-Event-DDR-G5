let bouton = document.getElementById("themeBtn");
let icon = document.getElementById("icon");

bouton.addEventListener("click", function () {
    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});