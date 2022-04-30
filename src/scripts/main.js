var $ = require( "jquery" );

$(".nav_bar").on("click", $(".hamburger"),()=>{
   $(".mobile_menu").toggleClass("hidden")
});