// backtotop
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
window.addEventListener("scroll", function () {
    var e = document.querySelector(".back-to-top");
    window.scrollY > 100 ? e.classList.add("show") : e.classList.remove("show");
});
// navbar-expand
function updateNavbarClass() {
    let navbar = document.getElementById("navbar");
    if (window.innerWidth > 1200) {
        navbar.classList.add("navbar-expand");
    } else {
        navbar.classList.remove("navbar-expand");
    }
}
updateNavbarClass();
window.addEventListener("resize", updateNavbarClass);

// testimonialSwiper
const testimonialSwiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        0: { slidesPerView: 1 },
        540: { slidesPerView: 2 },
        768: { slidesPerView: 2.8 },
        //1024: { slidesPerView: 2.9 },
        //1200: { slidesPerView: 4 },
        // 1500: { slidesPerView: 4.5 },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
});

 // Disable Right-Click
 document.addEventListener("contextmenu", (event) => event.preventDefault());

 // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S, Ctrl+P
 document.addEventListener("keydown", (event) => {
     if (event.keyCode === 123 ||  // F12
         (event.ctrlKey && event.shiftKey && (event.key === 'I' || event.key === 'J')) || // Ctrl+Shift+I/J
         (event.ctrlKey && (event.key === 'U' || event.key === 'S' || event.key === 'P'))) { // Ctrl+U, Ctrl+S, Ctrl+P
         event.preventDefault();
         return false;
     }
 });
