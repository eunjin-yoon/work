$(function(){
    var container = $('.slideshow'),
    slideGroup = container.find('.slideshow_slides'),
    slides = slideGroup.find('a'),
    nav = container.find('.slideshow_nav'),
    indicator = container.find('.indicator'),
    slideCount = slides.length,
    indicatorHtml = '', /* 개수가 변동될 수 있기 때문에 빈값 */
    currentIndex = 0, /* 현재 위치가 어딘지*/
    duration = 500,
    easing = 'easeInOutExpo',
    interval = 3000, //시간도 변수로 잡겠다
    timer; 


    //슬라이드를 가로로 배열

    slides.each(function(i){
        var newLeft = i*100 + '%';
        $(this).css({left:newLeft});


        //var i = 2; i = i+2; i += 2;  <- 3개 다 같은말
        //indicatorHtml = indicatiorHtml + ??
        //indicatorHtml += ??

        indicatorHtml += '<a href="">' + '</a>';
        console.log(indicatorHtml);
        
    }); //slides.each


    indicator.html(indicatorHtml);

    //슬라이드 이동함수

    function goToSlide(index){
        
        slideGroup.animate({left:-100*index + '%'},duration);
        currentIndex = index;
        console.log(currentIndex);

        updateNav(); //처음인지, 마지막인지 검사.


    }

    function updateNav(){
        var navPrev = nav.find('.prev');
        var navNext = nav.find('.next');

        if(currentIndex == 0){
            navPrev.addClass('disabled');
        }else{
            navPrev.removeClass('disabled');
        }


        if(currentIndex == slideCount - 1){
            navNext.addClass('disabled');
        }else{
            navNext.removeClass('disabled');
        }

        //  //첫번째방법_모든요소에서 active 빼고, 원하는 요소만 active 추가
        // indicator.find('a').removeClass('active');
        // indicator.find('a').eq(currentIndex).addClass('active');
       
        //두번째방법_원하는 요소에만 active를 추가하고 나머지들에서 active빼기
        //형제 자매는 영어로 siblings
        indicator.find('a').eq(currentIndex).addClass('active').
        siblings().removeClass('active');

    }


    //indicator로 이동하기
    indicator.find('a').click(function(e){
        e.preventDefault(); //기본 기능 막는거
        var idx = $(this).index();
        goToSlide(idx);

    });

    //좌우 버튼으로 이동
    nav.find('a').click(function(e){
        e.preventDefault();
        if($(this).hasClass('prev')){
            goToSlide(currentIndex - 1);
        }else{
            goToSlide(currentIndex + 1);
        }
    });

    updateNav();

    //자동 슬라이드 함수
    function startTimer(){
        //일정시간마다 할일
        //setInterval(할일, 시간), clearInterval(이름)
        //할일(함수) function(){실제로 할일}
        timer = setInterval(function(){
            var nextIndex = (currentIndex + 1) % slideCount;
            goToSlide(nextIndex);            
        }, interval);
    }
    startTimer();


    function stopTimer(){
        clearInterval(timer);
        
    }

    container.mouseenter(function(){
        stopTimer();
        
    })
    .mouseleave(function(){
        startTimer();
    });
});