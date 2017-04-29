/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Custom JS Script for mega menu
//Attempted a mega menu 
//$(document).ready(function(){
//    $("#dropdown-toggle").hover(function(){
//    $(".dropdown-menu").slideToggle(500);
//    });
    
    
   //Keep the subnav open when active
//   $(".dropdown-menu").hover(function(){
//      $(".drowpdown-menu").css("display","block");
//  });
//});
//jQuery(document).on('click', '.mega-dropdown', function(e) {
//  e.stopPropagation()
//})

$(document).ready(function(){
//    $(".dropdown-toggle").hover(function() {
//            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
//            $('.dropdown-menu').toggleClass('open');        
//        },
//        function() {
//            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
//            $('.dropdown-menu').toggleClass('open');       
//        });
    
     $( ".dropdown" ).hover(function() {
        $( ".dropdown-menu" ).toggle( "400" );
    });
    //This click function is added b/c it seems to be disabled due to the hover toggle above.
    $(".dropdown-toggle").click(function(){
        document.location = 'products.html';
    });
    
    $( ".infoForm" ).click(function() {
        $( "#infoForm" ).show( "slow" );
        $("#supportForm").hide("slow");
        $("#shopForm").hide("slow");
        $("#newsForm").hide("slow");
    });
    
    $( ".supportForm" ).click(function() {
        $( "#supportForm" ).show( "slow" );
        $("#infoForm").hide("slow");
        $("#shopForm").hide("slow");
        $("#newsForm").hide("slow");
    });
    
    $( ".shopForm" ).click(function() {
        $( "#shopForm" ).show( "slow" );
        $("#supportForm").hide("slow");
        $("#infoForm").hide("slow");
        $("#newsForm").hide("slow");
    });
    
    $( ".newsForm" ).click(function() {
        $( "#newsForm" ).show( "slow" );
        $("#supportForm").hide("slow");
        $("#shopForm").hide("slow");
        $("#infoForm").hide("slow");
    });
    
    $( ".shopCart" ).click(function() {
        $( "#cartBox" ).slideToggle( "slow" );
        //setTimeout scrollBy makes the page scroll as the cart div is expanded and collapsed.
        setTimeout('scrollBy(0,-90)',30);
    });
    
    //toggle the nav when button is clicked
    //same code used from the Bootstrap Example, thanks Professor Duffy
//var curNav = 'home';
//function toggleNav(navLyr){
//    document.getElementById(curNav).className = ''; //Get the element by id, and remove the class
//    document.getElementById(navLyr).className = 'active'; // Get the element by id and add the class active
//    curNav = navLyr;
//    if($(window).width()<768){ // If the window is less then 768px
//    document.querySelector(".navbar-toggle").click(); //querySelector allow to pass in a attribute name, only the first one. 
//    $('.navbar-toggle').click(); // call the class .navbar-toggle and perform a click event
//}
//}

 $("#contact").click(function(){
    if($(window).width()<768){
        $(".navbar-collapse").toggleClass("collapse", "addOrRemove").toggleClass("in", "addOrRemove");
    } 
 });

 $("#cart").click(function(){
    if($(window).width()<768){
        $(".navbar-collapse").toggleClass("collapse", "addOrRemove").toggleClass("in", "addOrRemove");
    } 
 });
    
});
