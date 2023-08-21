

// SIDE_BAR 

$('#open').click(function () {
    $('.home-content').animate({paddingLeft : '250px'} , 500);
    $('.sidebar-menu').animate({width:'250px'} , 500);
})

$('.close-btn').click(function () {
    $('.home-content').animate({paddingLeft : '0px'} , 500);
    $('.sidebar-menu').animate({width:'0px'} , 500);
})


// SECTION SLIDE (DURATION)

$('.slide-title').click(function (e) {
     $(e.target).next().slideToggle(500);
     $('.slide-text').not($(e.target).next()).slideUp(500);
})


// SECTION DETAILS

$(document).ready(function(){
setInterval(function(){
    let targetDate= new Date("5 december 2023 10:40:00").getTime()/1000;
    
    let currentDate= new Date().getTime()/1000;

    let counterTime = (targetDate -currentDate) ;

    let days =Math.floor(counterTime/ 86400);  

    let hours =Math.floor((counterTime - (days * 86400)) / 3600); 
    
    let mins = Math.floor((counterTime - (days * 86400) - (hours * 3600 )) / 60);
    
    let secs = Math.floor((counterTime - (days * 86400) - (hours * 3600) - (mins * 60)));     
    
    $('.day').text(`${days} D`);
    $('.hours').text(`${hours} h`)
    $('.mins').text(`${mins} m`);
    $('.secs').text(`${secs} s`);   
} ,1000)
})


// SCROLL


$('.sidebar-menu a').click(function (e) {
    e.preventDefault()
    let section = $(e.target).attr('href');
    // console.log(section);
    let sectionOff = $(section).offset().top;
    // console.log(sectionOff);
    $('html,body').animate({scrollTop:sectionOff},2000);
})


// NUMBER DECREASE


let max = 100 ;
$('textarea').on("input",function (e) {
// let length = e.target.value.length;
   let length = $(e.target).val().length;
   console.log(length);

   let remaining = max-length;
   if (remaining<=0) {
    $('.text-start').text('out of characters')
    // $('textarea').prop("disabled", true);
   }else{
    $('.text-start').html(`<span class="red-text me-2 number">${remaining}</span> Character Reamining`)
    // $('textarea').prop("disabled", false);
   }
})







