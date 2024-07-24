$(document).ready(function() {
    // Initialize carousel
    $("#images-carousel").slick({
        autoplay: true,
    });

    $(".hamburguer-menu").click(function() {
        $(".links").slideToggle();
    });

    $("#phone").mask("(000) 000-0000", {
        placeholder: "(123) 123-1234"
    });

    // Initialize Lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });

    // Initialize Algolia Places
    var placesAutocomplete = places({
        appId: 'plGXXXXXXXXXX',
        apiKey: 'eXXXXXXXXX',
        container: document.querySelector('#address')
    });

    // Initialize Tippy.js for tooltips
    tippy('[data-tippy-content]', {
        placement: 'right',
        arrow: true
    });

    $(".furniture-list button").click(function() {
        const destination = $("#contact");
        const furnitureName = $(this).parent().find("h3").text();
        $("#furniture").val(furnitureName);
        $("#comment").val(`I'd like to know if the ${furnitureName} you have listed is still available`)
        $("html").animate({
            scrollTop: destination.offset().top
        }, 1000);
    });

    $("#contact button").click(function() {
        alert('We received your request, we will get back to you within the next 48 hours.');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var granimInstance = new Granim({
        element: '#granim-canvas',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        states : {
            "default-state": {
                gradients: [
                    ['#8E44AD', '#3498DB'], // Purple to Blue
                    ['#E67E22', '#F1C40F'], // Orange to Yellow
                    ['#2C3E50', '#2980B9'], // Dark Blue to Light Blue
                    ['#27AE60', '#2ECC71'], // Green gradients
                    ['#F1C40F', '#E74C3C'], // Yellow to Orange
                    ['#7F8C8D', '#BDC3C7']  // Gray gradients
                ]
            }
        }
    });
});
