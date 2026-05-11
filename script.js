const moviesRow = document.querySelector(".movies-row");
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");

function updateButtons() {

    if (moviesRow.scrollLeft <= 10) {
        leftBtn.classList.add("hide-btn");
    } else {
        leftBtn.classList.remove("hide-btn");
    }

    if (
        moviesRow.scrollLeft + moviesRow.clientWidth >=
        moviesRow.scrollWidth - 10
    ) {
        rightBtn.classList.add("hide-btn");
    } else {
        rightBtn.classList.remove("hide-btn");
    }
}

rightBtn.addEventListener("click", () => {

    moviesRow.scrollBy({
        left: 700,
        behavior: "smooth"
    });

});

leftBtn.addEventListener("click", () => {

    moviesRow.scrollBy({
        left: -700,
        behavior: "smooth"
    });

});

moviesRow.addEventListener("scroll", updateButtons);
window.addEventListener("load", updateButtons);
window.addEventListener("resize", updateButtons);