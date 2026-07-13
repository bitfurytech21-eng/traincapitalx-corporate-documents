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
function savePDF() {
    html2pdf()
        .set({
            margin: 0.5,
            filename: 'TrainCapitalX_Announcement.pdf',
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 2 },
            jsPDF: {
                unit: 'in',
                format: 'legal',
                orientation: 'portrait'
            }
        })
        .from(document.querySelector('.document'))
        .save();
}
