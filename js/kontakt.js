$(document).ready(function () {
    $("#kontakt_submit").click(function () {
        sandKontaktData($("#contact-name").val(), $("#contact-oib").val(), $("#tvrtka").val(), $("#message").val(), $("#contact-email-2").val());
    });
});

function sandKontaktData(ime, oibID, subjekt, poruka, mail) {
    debugger;
    $.ajax({
        url: "https://formspree.io/info@sonnesolarium.hr",
        method: "POST",
        data: { ime: ime, oib: oibID, tvrtka: subjekt, text: poruka, email: mail },
        dataType: "json"
    });
}