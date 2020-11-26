let isHideTopics = false;

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
            mode: 'vertical',
            pager: false,
            captions: true,
            nextText: '',
            prevText: '',
            useCSS: false,
            easing: 'jswing',
            speed: 500,
            slideMargin: 3,
           });
        });

/* END CONTENT */





/* TOPICS */

/* Close relevant topics */
function closeOpenTopics() {
    let top = document.querySelector('.cOT');

    if(isHideTopics == false){
        isHideTopics = true;
        $('.topics').animate({
            right: '-350px'
        }, 200);

        $('body').animate({
            left: '0px'
        }, 400);

        top.innerHTML = "<";
    } else {
        isHideTopics = false;
        $('.topics').animate({
            right: '0px'
        }, 200);
        $('body').animate({
            left: '0px'
        }, 400);

        top.innerHTML = ">";
    }
};

/* END TOPICS */