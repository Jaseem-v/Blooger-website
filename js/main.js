
const responsive ={
    0:{items:1},
    320:{items:1},
    560:{items:2},
    960:{items:3}
};

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
    autoplayTimeout:3000,
    dots:false,
    nav:true,
    navText:[$('.prev-btn'),$('.next-btn')],
    responsive:responsive

});

//move-up--

$(".move-up span").click(function(){
    $('html,body').animate({
        scrollTop:0
    },1000);
});