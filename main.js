$(document).ready(main); 

/* MENU */
/* Open menu */
function openMenu() {
    $('.menu').animate({
        left: '0px'
    }, 200);
    $('body').animate({
        left: '350px'
    }, 400);
}

/* Close menu */
function closeMenu() {
    $('.menu').animate({
        left: '-350px'
    }, 200);

    $('body').animate({
        left: '0px'
    }, 400);
};

/* END MENU */





/* CONTENT */

/* Change icon music */
function music_off(image) {
    if (document.getElementById("image").src.indexOf("css/audio_off.png")>0)
            {document.getElementById("image").src="css/audio.png"}
        else
            {document.getElementById("image").src="css/audio_off.png"}
}

/* Bxslider */
jQuery(document).ready(function bxslider(){
        jQuery('.bxslider').bxSlider({
           pager: false,
           captions: true,
           nextText: '',
           prevText: '',
           useCSS: false,
           easing: 'jswing',
           speed: 500
           });
        });

/* END CONTENT */





/* TOPICS */

/* Open relevant topics  */
function openTopics() {
    $('.topics').animate({
        left: '1170px'
    }, 200);
    $('body').animate({
        left: '0px'
    }, 400);
}

/* Close relevant topics */
function closeTopics() {
    $('.topics').animate({
        left: '1900px'
    }, 200);

    $('body').animate({
        left: '0px'
    }, 400);
};

/* END TOPICS */