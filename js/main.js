// toggle menu--------


$(document).ready(function(){
    $nav=$('.nav-bar');
    $toggle=$('.toggle');

    $toggle.click(function(){
        $nav.toggleClass("collapse");
    })

});


// owl-courcel----------

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    dots:false,
    nav:true,
    navText:[$('.prev-btn'),$('.next-btn')]

});