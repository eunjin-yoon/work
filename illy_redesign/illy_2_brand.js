$(function(){
    var tabAnchor = $('.history_nav li'), //li
        tabPanel = $('.tabs-panel'); //section

    tabAnchor.click(function(e){

        e.preventDefault();

        //tabAnchor.removeClass('active');
        $(this).addClass('active').siblings().removeClass('active');
        
        //tabPanel.hide(300);
        //tabPanel.addClass("active");

        var $target = $(this).children("a").attr('href');
        
        
        $($target).addClass("active").siblings().removeClass("active");
       
        setTimeout(function(){
            $($target).children("ul").addClass("active");
            $($target).siblings().children().removeClass("active");
        },8);

    });






});