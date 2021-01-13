$(function() {
   
    var $story = $('.story01');
    var $storys = $('.story02');
    var $offset = 950;
    var $offsets = 400;
    var $storyOST = $story.offset().top - $offset;
    var $storysOST = $storys.offset().top - $offsets;

    $(window).scroll(function(){
        if($(this).scrollTop() > $storyOST){
            $story.find('img').addClass('animate');
        }
        if($(this).scrollTop() > $storysOST){
            $storys.find('img').addClass('animate');
        }
    });
});