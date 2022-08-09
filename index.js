
var typed = new Typed(".typing-1",{
    strings: [
        "Lê Minh Khoa"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing-2",{
    strings: [
        "YouTuber", 
        "Lê Minh Khoa", "Freelancer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

//slide-up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
});