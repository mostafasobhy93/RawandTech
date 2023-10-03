$(document).ready(function () {
    'use strict';
    
// sticky header
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
    
// Mobile Nav toggle
    $('header nav .bars').click(function () {
        $(this).next('header nav .links-list').slideToggle();
        $(this).children('i').toggleClass('fa-bars fa-times');
    });
    
    
//    scroll top btn
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scroll-top').fadeIn();
        } else {
            $('#scroll-top').fadeOut();
        }
    });
    $('#scroll-top').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 50);
    });
    
    //    Main Slider
    $(".main-slider .banner-slides").owlCarousel({
        loop: true,
        items: 1,
        margin: 0,
        dots: false,
        nav: true,
//        animateOut: "slideOutDown",
        animateOut: "fadeOut",
//        animateIn: "fadeIn",
        active: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 7000,
        responsive : {
            0 : {
                mouseDrag: true
            },
            768 : {
                mouseDrag: false
            }
        }
    });
    $(".main-slider .banner-carousel-btn .left-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("next.owl.carousel");
    });
    $(".main-slider .banner-carousel-btn .right-btn").on("click", function() {
        $(".main-slider .banner-slides").trigger("prev.owl.carousel");
    });
    
//    hotels slider
    $(".hotels-slider .uslides").owlCarousel({
        loop: true,
        items: 4,
        dots: false,
        nav: false,
        active: true,
        margin: 15,
        smartSpeed: 800,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive : {
            0 : {
                items: 1,
            },
            768 : {
                items: 2,
            },
            992 : {
                items: 4,
            }
        }
    });
    
});

