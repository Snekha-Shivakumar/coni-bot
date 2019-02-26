$(document).ready(function(){
    // $(".wc-chatview-panel").hide();
    // $("#formButton").click(function(){
    //     $("#prechatForm").toggle();
    // });
    $(".wc-chatview-panel").hide();
    $(".minimized").on("click", function() {
        $(".wc-chatview-panel").show();
        $('.minimized').hide();
    });
    $("#wc-header-close-btn").click(function() {
        $('.wc-chatview-panel').hide();
        $('.minimized').show();
    });
   
//draggable function for chat window
var div = $('.wc-chatview-panel');
div.draggable(
{
    stop: function(event, ui)
    {
        var top = getTop(ui.helper);
        ui.helper.css('position', 'fixed');
        ui.helper.css('top', top+"px");
    }
});

function getTop(ele)
{
    var eTop = ele.offset().top;
    var wTop = $(window).scrollTop();
    var top = eTop - wTop;

    return top;
}

$(".wc-chatview-panel").draggable({
    containment: "window",
    handle:".wc-header",
    scroll:false
})

//resizable chat window
$(function() {
    $( ".wc-chatview-panel" ).resizable({
      handles: "n, e, w, s, sw, se, nw, ne",
      containment: "html",
      scroll:false,
      minWidth: 350
    });
    });

//reload chat
$("#wc-header-reload-btn").on('click',function(){
    $(".wc-message-group-content").empty();
    reloadButtonMessage();
});
});