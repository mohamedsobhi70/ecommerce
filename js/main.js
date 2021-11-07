
// owl carouser 
$(".owl-carousel").owlCarousel({
    loop:true,
    margin:20,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        767:{
            items:3
        },
        1100:{
            items:4
        },
    }
});