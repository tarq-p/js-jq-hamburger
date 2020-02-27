// Crea una regola di attivazione, Al click dell'hamburger deve corrispondere l'attivazione del menu
// Il successivo click la chiusura del medesimo menù.

$('.fas.fa-bars').click(function() {
    $('.hamburger-menu').show('');
});

$('.fas.fa-times').click(function() {
    $('.hamburger-menu').hide('');
});
