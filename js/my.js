$(".main").fullpage({
    anchors: ["p1", 'p2', 'p3', 'p4', 'p5'],  //锚点
    sectionsColor: ["#2A2D4C", "white", "white", "#fff", "#000"],//背景颜色
    verticalCentered: false,


    fixedElements: "#menu",
    menu: "#menu",//菜单控制滚动
    css3:true,
    continuousVertical:true,//循环滚动，与 loopTop 及 loopBottom 不兼容

    'navigation': true,//轮播点


    
    afterLoad: function (anchor, index) {//
        if (index == 3) {
            $(".three1").removeClass("three1out").addClass("three1in")
            $(".three2").removeClass("three2out")
                .queue(function(){
                    $(this)
                        .addClass("three2in")
                        // .css('animation-delay','1s')
                        .dequeue();
                })
            // $('.inner').removeClass("three1out").addClass("three1in")
            $(".three3").removeClass("three3out").addClass("three3in")
        }
        // else if(index==4){}
        else if(index==1){
            $(".one ul li h3").removeClass("h3out").addClass("h3in")
            $('.one ul li p ').removeClass("h3out").addClass('h3in')
        }
        else if(index==4){
            $('.tv1').removeClass('tv1out').addClass('tv1in');
            $('.tv2').removeClass('tv2out').addClass('tv2in');
            $('.tv3').removeClass('tv3out').addClass('tv3in');
            $('.tv4').removeClass('tv4out').addClass('tv4in');
        }
    },
    onLeave: function (index) {
        setTimeout(function(){
            if (index === 3) {
                $(".three1").removeClass("three1in").addClass("three1out")
                $(".three2").removeClass("three2in").addClass("three2out")
                // $('.inner').removeClass("three1in").addClass("three1out")
                $(".three3").removeClass("three3in").addClass("three3out")
            }
            else if(index==1){
                $(".one ul li h3").removeClass("h3in").addClass("h3out")
                $('.one ul li p ').removeClass("h3in").addClass('h3out')
            }
            else if(index==4){
                $('.tv1').removeClass('tv1in').addClass('tv1out');
                $('.tv2').removeClass('tv2in').addClass('tv2out');
                $('.tv3').removeClass('tv3in').addClass('tv3out');
                $('.tv4').removeClass('tv4in').addClass('tv4out');
            }
        },500)
    }
})
// setInterval(function(){
//     $.fn.fullpage.moveSectionDown();
// }, 5000)



// $(".main").setAutoScrolling()


//    $(".next").click(function () {
//        $.fn.fullpage.moveSectionDown();
//    })





// $(".A_Demo").PicCarousel("init");
// $(".B_Demo").PicCarousel({
//     "width":1000,
//     "height":300,
//     "posterWidth":520,
//     "posterHeight":300,
//     "scale":0.9,
//     "speed":500,
//     "autoPlay":true,
//     "delay":1000,
//     "verticalAlign":"top"
// });













