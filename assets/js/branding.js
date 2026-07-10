/*
=========================================
TrainCapitalX Corporate Branding Engine
Version 1.0
=========================================
*/

const Branding = (() => {

    const BRAND = {
        company: "TrainCapitalX",
        slogan: "Professional Investment Documentation",
        website: "https://traincapitalx.com",
        email: "info@traincapitalx.com",
        logo: "../assets/images/logo.png",
        watermark: "TrainCapitalX"
    };

    function applyLogo() {

        document.querySelectorAll(".company-logo").forEach(img => {

            img.src = BRAND.logo;
            img.alt = BRAND.company;

        });

    }

    function applyBrandText() {

        document.querySelectorAll(".brand-company")
            .forEach(el => el.textContent = BRAND.company);

        document.querySelectorAll(".brand-slogan")
            .forEach(el => el.textContent = BRAND.slogan);

        document.querySelectorAll(".brand-email")
            .forEach(el => el.textContent = BRAND.email);

        document.querySelectorAll(".brand-website")
            .forEach(el => el.textContent = BRAND.website);

    }

    function createWatermark() {

        const wm = document.createElement("div");

        wm.className = "watermark";

        wm.innerHTML = BRAND.watermark;

        document.body.appendChild(wm);

    }

    function applyFooter() {

        document.querySelectorAll(".footer-company")
            .forEach(el => {

                el.innerHTML =
                    BRAND.company +
                    " | " +
                    BRAND.website +
                    " | " +
                    BRAND.email;

            });

    }

    function initialise() {

        applyLogo();

        applyBrandText();

        applyFooter();

        createWatermark();

    }

    return {
        initialise
    };

})();

document.addEventListener("DOMContentLoaded", () => {

    Branding.initialise();

});