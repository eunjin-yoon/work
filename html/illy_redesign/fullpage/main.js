$(document).ready(function(){
  
  // fullpage customization
  $('#fullpage').fullpage({
    sectionSelector: '.section',
    slideSelector: '.horizontal-scrolling',
    navigation: true,
    navigationTooltips:['Home','Introduction','Product','What’sYour','Notice'],
    slidesNavigation: true,
    css3: true,
    controlArrows: false,
    onLeave: function(origin, destination, direction){
      
      if(destination == 2 && direction == "down"){
        $("header").addClass("sticky");
      }

      if(destination == 1 && direction == "up"){
        $("header").removeClass("sticky");
      }
      
    }
  }); 

  
});