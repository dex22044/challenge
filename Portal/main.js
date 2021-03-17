$('.nav_link').mouseenter(function(){
    $(this).css({
        opacity: "1",
        borderBottom: "1px solid",
        color: "#37b9ff"
    },1500);
});

$('.nav_link').mouseleave(function(){
    $(this).css({
        borderBottom: "none"
    },1500);
});