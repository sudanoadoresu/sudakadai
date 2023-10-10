function PageTopAnime() {

var scroll = $(window).scrollTop(); 
if (scroll >= 200){
$('#page-top').removeClass('DownMove');		
$('#page-top').addClass('UpMove');			
}else{
if($('#page-top').hasClass('UpMove')){
$('#page-top').removeClass('UpMove');	
$('#page-top').addClass('DownMove');	
}
}
    
var wH = window.innerHeight; 
var footerPos =  $('#footer').offset().top; 
if(scroll+wH >= (footerPos+10)) {
var pos = (scroll+wH) - footerPos+10 
$('#page-top').css('bottom',pos);	
}else{
if($('#page-top').hasClass('UpMove')){
$('#page-top').css('bottom','10px');
}
}
}

$(window).scroll(function () {
PageTopAnime();
});

$(window).on('load', function () {
PageTopAnime();
});

$('#page-top').click(function () {
$('body,html').animate({
scrollTop: 0
}, 500);
return false;
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
  