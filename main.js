"use strict";
let isHideTopics = false;




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
        },1500);
    });

    $('.sort_rivals_example').mouseleave(function(){
        $(this).css({
            borderBottom: "none"
        },1500);
    });

    //Первая функция при наведении, вторая при снятия мыши с компонента
    $('.send').hover(function(){
        $(this).children("img").attr("src","css/icon_messange/share2.png");
    },function(){
        $(this).children("img").attr("src","css/icon_messange/share.png");
    });
});

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

/*$('.send_icon').mouseover(function(){
    $(this).attr("src", "css/icon_messange/share2.png");
    console.log("123");
} );*/

/*function() {
    if $('.send').mouseenter() {
        $(this).innerHTML({
            img src="css/icon_messange/share2.png"
        },1000)
    } 
    else {
    <img src="css/icon_messange/share.png"> 
};
};*/