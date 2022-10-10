function burgermenuFunction(y) {
    x = document.getElementById("menubarlinks");

    y.classList.toggle("change");

    if (x.style.display === "block") {
        x.style.display = "";

    } else {
        x.style.display = "block";
    }
}