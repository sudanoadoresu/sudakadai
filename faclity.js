$('.slider').slick({
autoplay: true,
infinite: true,
slidesToShow: 3,
slidesToScroll: 3,
prevArrow: '<div class="slick-prev"></div>',
nextArrow: '<div class="slick-next"></div>',
dots: true,
responsive: [
{
breakpoint: 769,
settings: {
slidesToShow: 2,
slidesToScroll: 2,
}
},
{
breakpoint: 426,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
}
}
]
});

function fadeAnime(){
  
$('.fadeInTrigger').each(function(){ 
var elemPos = $(this).offset().top-50;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll >= elemPos - windowHeight){
$(this).addClass('fadeIn');
}else{
$(this).removeClass('fadeIn');
}
});
    
$('.fadeUpTrigger').each(function(){ 
var elemPos = $(this).offset().top-50;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll >= elemPos - windowHeight){
$(this).addClass('fadeUp');
}else{
$(this).removeClass('fadeUp');
}
});
    
$('.fadeDownTrigger').each(function(){ 
var elemPos = $(this).offset().top-50;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll >= elemPos - windowHeight){
$(this).addClass('fadeDown');
}else{
$(this).removeClass('fadeDown');
}
});
    
$('.fadeLeftTrigger').each(function(){ 
var elemPos = $(this).offset().top-50;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll >= elemPos - windowHeight){
$(this).addClass('fadeLeft');
}else{
$(this).removeClass('fadeLeft');
}
});
  
$('.fadeRightTrigger').each(function(){ 
var elemPos = $(this).offset().top-50;
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
if (scroll >= elemPos - windowHeight){
$(this).addClass('fadeRight');
}else{
$(this).removeClass('fadeRight');
}
});
}



