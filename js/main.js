$(document).ready(function(){
    $nav=$('.nav-bar');
    $toggle=$('.toggle');

    $toggle.click(function(){
        $nav.toggleClass("collapse");
    })

});





// $(document).ready(function(){

//     $(".nav-bar").on("click",function(){
//         $(".toggle").toggleClass("open");
//     });

// });