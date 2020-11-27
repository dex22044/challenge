let isHideTopics = false;

/* MENU */



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

/* Open/Close relevant menu */
function closeOpenMenu() {
    let top = document.querySelector('.arrow_menu');

    if(isHideTopics == false){
        isHideTopics = true;
        $('.menu').animate({
            left: '-350px'
        }, 200);

        $('body').animate({
            right: '0px'
        }, 400);

        top.innerHTML = "<";
    } else {
        isHideTopics = false;
        $('.menu').animate({
            left: '0px'
        }, 200);
        $('body').animate({
            right: '0px'
        }, 400);

        top.innerHTML = ">";
    }
};



/* Open/Close relevant topics */
function closeOpenTopics() {
    let top = document.querySelector('.arrow_topics');

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



/* END CONTENT */





/* TOPICS */



/* END TOPICS */