/*
==========================================
TrainCapitalX Corporate Document System
Main Application
Version 1.0
==========================================
*/

const Company = {
    name: "TrainCapitalX",
    website: "https://traincapitalx.com",
    email: "info@traincapitalx.com",
    phone: "",
    address: "",
    logo: "assets/images/logo.png",
    referencePrefix: "TCX"
};

function formatDate(date = new Date()) {
    return date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric"
    });
}

function generateReference() {
    const now = new Date();

    const year = now.getFullYear();

    const month = String(now.getMonth() + 1).padStart(2, "0");

    const day = String(now.getDate()).padStart(2, "0");

    const random = Math.floor(Math.random() * 900000 + 100000);

    return `${Company.referencePrefix}-${year}${month}${day}-${random}`;
}

function updateCompanyInformation() {

    const companyName = document.getElementById("companyName");

    const website = document.getElementById("website");

    const email = document.getElementById("email");

    const today = document.getElementById("today");

    const reference = document.getElementById("reference");

    if (companyName)
        companyName.textContent = Company.name;

    if (website)
        website.textContent = Company.website;

    if (email)
        email.textContent = Company.email;

    if (today)
        today.textContent = formatDate();

    if (reference)
        reference.textContent = generateReference();
}

function printDocument() {
    window.print();
}

document.addEventListener("DOMContentLoaded", () => {

    updateCompanyInformation();

    const printButton = document.getElementById("printButton");

    if (printButton) {
        printButton.addEventListener("click", printDocument);
    }

    console.log("TrainCapitalX Document System Loaded");
});