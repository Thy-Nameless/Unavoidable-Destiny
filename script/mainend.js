var click = new Audio('../sound/Click.mp3');
$(function() {
    $( ".deskapp" ).draggable({containment: "parent"});
  });
  $("#osoutline").on('mouseenter',function(){
    var topMess = Math.min((window.innerWidth * 0.365625), (window.innerHeight * 0.65));
    console.log('hi');
    $("#osmenu").animate({top: topMess},500, function(){
        $("#osmenu").css('top','min(36.5625vw, 65vh)');
    });
});
$("#osoutline").on('mouseleave',function(){
    var topMess = Math.min((window.innerWidth * 0.534375), (window.innerHeight * 0.95));
    console.log('bye');
    $("#osmenu").animate({top: topMess},500, function(){
        $("#osmenu").css('top','min(53.4375vw, 95vh)');
    });
});
$('body').on('click', function () { 
    click.play(); 
});
