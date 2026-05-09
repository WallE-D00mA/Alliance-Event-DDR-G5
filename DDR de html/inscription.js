let bouton = document.getElementById("themeBtn");
let icon = document.getElementById("icon");

bouton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme")
    &&
     document.body.classList.toggle("color");


    if (document.body.classList.contains("dark-theme")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});