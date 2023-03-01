// Navbar
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
    const scrollTop = window.pageTOffset ||
    this.document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        navbar.style.top="-50px";
    }else{
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
});

// Types
var typed = new Typed('.typed', {
    strings: ['Bonjour à tous', 'bonjour', 'Holà!', 'Buongiorno'],
    typeSpeed: 40,
    backSpeed: 0,
    smartBackspace: true, //this is a default
    loop: true
});

// Compteur live
let compteur = 0;
$(window).scroll(function(){
    const top = $('.counter').offset().top-window.innerHeight;
    if(compteur == 0 && $(window).scrollTop() > top){
        $('.counter-value').each(function(){
            let $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum : $this.text()
            }).animate({
                countNum : countTo
            },
            {
                duration: 10000,
                easing: 'swing',
                step: function(){
                    $this.text(Math.floor(this.countNum));
                },
                complete: function(){
                    $this.text(this.countNum);
                }
            });
        });
        compteur = 1;
    }
});

// Aos
AOS.init();