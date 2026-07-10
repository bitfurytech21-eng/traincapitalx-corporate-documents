/*
=========================================
TrainCapitalX AutoFill Engine
Version 1.0
=========================================
*/

const COMPANY = {
    name: "TrainCapitalX",
    legalName: "TrainCapitalX Ltd.",
    website: "https://traincapitalx.com",
    email: "info@traincapitalx.com",
    phone: "",
    address: "",
    logo: "../assets/images/logo.png"
};

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.textContent = value;
    }
}

function setValue(id, value) {
    const element = document.getElementById(id);
    if (element) {
        element.value = value;
    }
}

function setLogo() {
    document.querySelectorAll(".company-logo").forEach(img => {
        img.src = COMPANY.logo;
        img.alt = COMPANY.name + " Logo";
    });
}

function fillCompanyDetails() {
    setText("companyName", COMPANY.name);
    setText("companyLegalName", COMPANY.legalName);
    setText("companyWebsite", COMPANY.website);
    setText("companyEmail", COMPANY.email);
    setText("companyPhone", COMPANY.phone);
    setText("companyAddress", COMPANY.address);

    setValue("companyName", COMPANY.name);
    setValue("companyWebsite", COMPANY.website);
    setValue("companyEmail", COMPANY.email);
}

function fillCurrentDate() {
    const today = new Date();

    const formatted = today.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });

    document.querySelectorAll(".current-date").forEach(item => {
        item.textContent = formatted;
    });
}

document.addEventListener("DOMContentLoaded", () => {

    fillCompanyDetails();

    fillCurrentDate();

    setLogo();

});