/*
=========================================
Print Utility
=========================================
*/

function printDocument() {
    window.print();
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll(".print-document")
        .forEach(button => {

            button.addEventListener("click", printDocument);

        });

});