let isHideTopics = false;

/* MENU */



/* END MENU */





/* CONTENT */

/* Change icon music */
function sound_off(sound) {
    if (document.getElementById("sound").src.indexOf("css/icon_content/sound_off.png")>0)
            {document.getElementById("sound").src="css/icon_content/sound.png"}
        else
            {document.getElementById("sound").src="css/icon_content/sound_off.png"}
}

/* Open/Close relevant menu */
function closeOpenMenu() {
    let top = document.querySelector('.arrow_menu');

    if(isHideTopics == false){
        isHideTopics = true;
        $('.menu').animate({
            left: '-300px'
        }, 200);

        $('body').animate({
            right: '0px'
        }, 400);

        top.innerHTML = ">";
    } else {
        isHideTopics = false;
        $('.menu').animate({
            left: '0px'
        }, 200);
        $('body').animate({
            right: '0px'
        }, 400);

        top.innerHTML = "<";
    }
};



/* Open/Close relevant topics */
function closeOpenTopics() {
    let top = document.querySelector('.arrow_topics');

    if(isHideTopics == false){
        isHideTopics = true;
        $('.topics').animate({
            right: '-300px'
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

jQuery(document).ready(function(){
    $('.rivals_content:odd').css({'color':'#37b9ff'});
    $('.word_challenge:odd').css({'color':'#37b9ff'});
    $('.word_challenge').ready(function(){
        $('.word_challenge:odd').css({'color':'#37b9ff'});
    });

    $('.sort_rivals_example').mouseenter(function(){
        $(this).css({
            opacity: "1",
            borderBottom: "1px solid",
            color: "#37b9ff"
        },1500);
    });

    $('.sort_rivals_example').mouseleave(function(){
        $(this).css({
            borderBottom: "none"
        },1500);
    });
});


