var app = document.getElementById('developer');

var typewriter = new Typewriter(app, {
    strings: 'Desenvolvedor',
    autoStart: true,
    loop: true,
    cursor: '_',
    delay: 150,
});

$(document).on('scroll', function () {
    let scroll = $(document).scrollTop();
    let length = 150;
    //console.log('scroll: '+ scroll);

    if (scroll > length) {
        $('#menu-nav-scroll').hide();
    } else {
        $('#menu-nav-scroll').show();
    }
})