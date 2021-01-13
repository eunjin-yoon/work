$(function(){
    
    'use strict';
 
    var section  = $('.s1'),
    bannerText = $('.banner_text'),
    textChild = $('p')


    function animateText() {
        p.each(function (i) {
            setTimeout(function () {
                p.eq(i).addClass('is-visible');
            }, 300 * (i + 1));
        });
      }
    

      bannerText();

});