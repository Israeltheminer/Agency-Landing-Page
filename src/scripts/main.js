var $ = require( "jquery" );

$("body").on("click", $(".hamburger"),()=>{
   $(".mobile_menu").toggleClass("hidden")
});