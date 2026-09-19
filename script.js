/* =====================================================
   LIFE_ID WEBSITE
   JAVASCRIPT FOR INDEX PAGE
===================================================== */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

const mobileMenu = document.getElementById("mobileMenu");


if (menuBtn && mobileMenu) {

    menuBtn.addEventListener("click", function () {

        mobileMenu.classList.toggle("active");

    });

}



/* ================= CLOSE MOBILE MENU ================= */

const mobileLinks = document.querySelectorAll(
    ".mobile-menu a"
);


mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mobileMenu.classList.remove("active");

    });

});



/* ================= HEADER SHADOW ================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 20) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(7, 59, 76, 0.08)";

    } else {

        navbar.style.boxShadow = "none";

    }

});



/* ================= SMOOTH INTERNAL LINKS ================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});








/* ================= FEATURE CARD INTERACTION ================= */

const featureCards =
    document.querySelectorAll(
        ".feature-card"
    );


featureCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        this.style.borderColor =
            "#087e8b";

    });


    card.addEventListener("mouseleave", function () {

        this.style.borderColor =
            "#e5edf2";

    });

});



/* ================= PAGE LOAD ================= */

window.addEventListener("load", function () {

    console.log(
        "LIFE_ID website loaded successfully."
    );

});