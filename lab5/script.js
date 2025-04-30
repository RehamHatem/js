let current = 0;
let images = document.querySelectorAll(".slideshow img");
let interval = null;
function showSlide() {
    for ( i = 0; i < images.length; i++) {
        if (i === current) {
            images[i].style.display = "block";
        } else {
            images[i].style.display = "none";
        }
    }
}
function changeSlide(n) {
    current += n;
    if (current >= images.length) {
        current = 0;
    } else if (current < 0) {
        current = images.length - 1;
    }
    showSlide();
}
function startSlideshow() {
    if (!interval) {
        interval = setInterval(() => changeSlide(1), 1000);
        }
    }
function stopSlideshow() {
    clearInterval(interval);
        interval = null;
}
showSlide();
//--------------------------------------------------------------------------------------------------------

