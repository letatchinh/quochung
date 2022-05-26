$(document).ready(function () {
    const slider = document.querySelector('.info-left-inside');
    const img = document.querySelectorAll('.img');
    const left = document.querySelector('#left');
    const right = document.querySelector('#right');
    var length = img.length;
    const menu = document.querySelector('header');
    const up = document.querySelector('.up');
    var width = slider.offsetWidth;
    const item1 = document.querySelector('#item1');
    const item2 = document.querySelector('#item2');
    const item3 = document.querySelector('#item3');
    const item4 = document.querySelector('#item4');
    const item5 = document.querySelector('#item5');
    const listItem = document.querySelectorAll('.list-item');
    var iconRes = document.querySelectorAll('.icon-res');
    // var hei = document.querySelectorAll('submenu-responsive');
    // var height = hei[0].offsetHeight;
    // console.log( " hei la "+height)
    $('.icon-res').click(function () {
        $(this).toggleClass('opacity0');
        $('.main-menu-responsive li').removeClass('Background');
        var i = this.parentElement ;
        var x = parseInt($(this).parent().find('.submenu-responsive').height() + 20);
        setTimeout(() => {
            $(this).parent().addClass('Background');
        }, 50);        var z = $(this).parent().css('height') == +x+'px';
        if (z == true) {
            var run = new KeyframeEffect(i,
                [
                    {
                        height : +x+'px'
                    } ,
                    {
                        height : '0'
                    }
                ], {duration: 200, easing: 'ease-in'  });
                var p = new Animation(run , document.timeline)
                p.play();
            this.parentElement.style.height = null;
            console.log('true')
        }
        else{
            var run = new KeyframeEffect(i,
                [
                    {
                        height : '0px'
                    } ,
                    {
                        height : +x+'px'
                    }
                ], {duration: 300 , easing: 'ease-in'});
                var p = new Animation(run , document.timeline)
                p.play();
            this.parentElement.style = `height : ${x}px`; 
 };
        
    });
    $('#menu').click(function(){
        $('.allright2').addClass('right300px');
        $('.allleft').addClass('left300px');
        $('.allright2').removeClass('removeRight300px');
        $('body,html').addClass('overflow');
        $('.allleft').removeClass('removeLeft300px');
        $('.overlay').addClass('right300px');
        $('.overlay').removeClass('removeRight300px');
    });
    $('#close').click(function(){
        $('.allright2').removeClass('right300px');
        $('.allright2').addClass('removeRight300px');
        $('.allleft').addClass('removeLeft300px');
        $('.allleft').removeClass('left300px');
        $('.overlay').addClass('removeRight300px');
        $('.overlay').removeClass('right300px');
        $('body,html').removeClass('overflow');
    });
    interval = setInterval(function () {
        myfunction2();
    }, 4000);

    pos = 0;
    dem = 0;


    // move down
    var td = 0;
    var ts = 0;
    let tf = false;
    let ty = 0;
    var rs;
    var vtd = 0;
    var vts = 1;
    var start = 0;
    var posX = 0;
    function XorStart(x, start) {
        if (x > start)
            return 1;
        else -1;
    }
    $('.info-left-inside').mousedown(function (img) {
        console.log('holding');
        clearInterval(interval);
        tf = true;
        start = img.clientX;

        return false;
    });
    $('.info-left-inside').mousemove(function (img) {
        if (tf == true) {
            var x = img.clientX + 1;
            start++;
            XorStart(x, start);




            console.log("vi TRI SAU la : " + x);
            console.log("VI TRI DAU la : " + start);
            if (x < start) console.log('QUA TRAI')
            if (x > start) console.log('QUA PHAI')
            if (XorStart(x, start) == 1) {
                ra = td--;
                ra2 = 10 * ra - pos;
                slider.style.transform = `translateX(${-1 * ra2}px)`;
                console.log("ra2" + ra2);
                console.log("ra" + ra);
                x = start;
                start++;
            }
            else {
                start = x;
                start--;
                ra = td++;
                ra2 = 10 * ra - pos;
                slider.style.transform = `translateX(${-1 * ra2}px)`;
                console.log("start la " + start);
                console.log("ra" + ra);
                // slider.style.transform = `translateX(${ty}px)`;
                console.log('QUA PHAI')
            }
        }
    });
    $('.info-left-inside').mouseup(function (img) {
        if (tf == true) {
            // if(ra <= 13) slider.style.transform = `translateX(${pos}px)`;
            // else {
            //     if(ra <= -30) myfunction();
            //     else {
            //        if(ra >= -13) slider.style.transform = `translateX(${pos}px)`;
            //         else {
            //             if(ra > -30) myfunction2();
            //         }
            //     }
            // }
            if (ra >= 30) myfunction2();
            if (ra < 30 && ra > -30) slider.style.transform = `translateX(${pos}px)`;
            if (ra <= -30) myfunction();


            ra = 0;

            td = 0;
            ty = 0;
            tf = false;
            console.log('da thoat');
        }
    });
    $('.info-left-inside').mouseleave(function (img) {
        if (tf == true) {
            // if(ra <= 13) slider.style.transform = `translateX(${pos}px)`;
            // else {
            //     if(ra > 14) myfunction();
            //     else {
            //        if(ra >= -13) slider.style.transform = `translateX(${pos}px)`;
            //         else {
            //             if(ra > -30) myfunction2();
            //         }
            //     }
            // }
            if (ra >= 35) myfunction2();
            if (ra < 35 && ra > -35) slider.style.transform = `translateX(${pos}px)`;
            if (ra <= -35) myfunction();

            ra = 0;
            td = 0;
            ty = 0;
            tf = false;
            console.log('da thoat');
        }
    });
    // function up//
    up.addEventListener("click", function () {
        $(window).scrollTop(0);
    });
    // function scroll mid to a menu //
    var bien = 0;
    window.addEventListener("scroll", function (event) {
        bien = $(this).scrollTop();
        console.log(bien);
        if (bien <= 50) {
            menu.classList.remove('possisionFixxed');
            if($(window).width()<=768){
                $('.input').removeClass('bienmat');
                
            }
        }
        if (bien > 100) {
            menu.classList.add('possisionFixxed')
           if($(window).width()<=768){
               $('.input').addClass('bienmat');
             
           }

        }


    })
    // MENU 2
    var listmenu2 = document.querySelector('.listmenu2');
    var itemmenu2 = document.getElementsByClassName('listiem2')[0];
    var itemmenu2s = document.querySelectorAll('.listiem2');
    var width2 = itemmenu2.offsetWidth;
    var length2 = itemmenu2s.length;
    var left2 = document.querySelector('#left2');
    var right2 = document.querySelector('#right2');
    pos2 = 0;
    dem2 = 0;
    left2.addEventListener("click", function () {
        LoR2(-1);
    });
    right2.addEventListener("click", function () {
        LoR2(1);
    });

    function LoR2(x) {
        if (x == 1) {
            if($(window).width()<=768)
            {
                if(dem2 == length2 - 4){
                    $('#right2').addClass('opacityBx');
                    
                    
                }
                if(dem2 >= length2 - 3){
                    return
                    
                    
                }
            }
            else
           {
            if (dem2 == length2 - 6) {
                $('#right2').addClass('opacityBx');

            };
            if (dem2 >= length2 - 5) {
                return
            };
           }
            $('#left2').removeClass('opacityBx');
            dem2++;
            pos2 = pos2 - width2;
            console.log(dem2);
            console.log(pos2);
            listmenu2.style = `transform:translateX(${pos2}px)`;
        }
        if (x == -1) {
            if (dem2 == 1) $('#left2').addClass('opacityBx');
            if (dem2 <= 0) return
            $('#right2').removeClass('opacityBx');
            dem2--;
            pos2 = pos2 + width2;
            listmenu2.style = `transform:translateX(${pos2}px)`;
        }
    }
    // MENU 3
    var listmenu3 = document.querySelector('.listmenu3');
    var itemmenu3 = document.getElementsByClassName('listitem3')[0];
    var itemmenu3s = document.querySelectorAll('.listitem3');
    var width3 = itemmenu3.offsetWidth;
    var length3 = itemmenu3s.length;
    var left3 = document.querySelector('#left3');
    var right3 = document.querySelector('#right3');
    left3.addEventListener("click", function () {
        LoR3(-1);
    });
    right3.addEventListener("click", function () {
        LoR3(1);
    });
    pos3 = 0;
    dem3 = 0;
    function LoR3(x) {
        if (x == 1) {
            if (dem3 == length3 - 6) {
                $('#right3').addClass('opacityBx');

            };
            if (dem3 >= length3 - 5) {
                return
            };
            $('#left3').removeClass('opacityBx');
            dem3++;
            pos3 = pos3 - width3;

            listmenu3.style = `transform:translateX(${pos3}px)`;
        }
        if (x == -1) {
            if (dem3 == 1) $('#left3').addClass('opacityBx');
            if (dem3 <= 0) return
            $('#right3').removeClass('opacityBx');
            dem3--;
            pos3 = pos3 + width3;
            listmenu3.style = `transform:translateX(${pos3}px)`;
        }
    }
    // var inter = setInterval(function(){
    //     myfunction();
    //    },4000);
    // function stop() {
    //     clearInterval(inter);
    // }
    // if (typeof interval != "number") {

    // }

    $('.info-left-inside').hover(
        function () {
            clearInterval(interval);

        },

        function () {

            interval = setInterval(function () {
                myfunction2();
            }, 4000);

        }
    );
    $('.arrow').hover(
        function () {
            clearInterval(interval);
            console.log('clearInterval')

        },


    );


    left.addEventListener("click", function () {
        myfunction();
        clearInterval(interval);
        console.log('daclearintetavk')
        setTimeout(() => {
            interval = setInterval(function () {
                myfunction2();
            }, 4000);
            console.log('dasetinterval')
        }, 2000);
    });
    right.addEventListener("click", function () {
        myfunction2();
        clearInterval(interval);
        console.log('daclear')

        interval = setInterval(function () {
            myfunction2();
        }, 4000);
        console.log('dasetinterval')

    });


    function myfunction2() {
        LoR(-1);
    }
    function myfunction() {
        LoR(1);
    }
    function LoR(x) {
        if (x == 1) {
            if($(window).width()<=768){
                if (dem == 1) listItem[0].style = `margin-left: ${0}px`;
                if (dem == 2) listItem[0].style = `margin-left: ${-1 * widthLI}px`;
                if (dem == 3) listItem[0].style = `margin-left: ${-2 * widthLI}px`;
                if (dem == 0)
                {
                    console.log();
                    listItem[0].style = `margin-left: ${-3 * widthLI}px`; 
                    console.log('da dich chuyen '+-3 * widthLI)
                } 
               }
               if($(window).width() <= 999 && $(window).width() >= 769){
                if(dem==1)listItem[0].style = `margin-left: ${0}px`; 
                if(dem==0)listItem[0].style = `margin-left: ${-1 * widthLI}px`; 
               }
              
            if (dem <= 0) {
                dem = length;
                pos = width * -1 * dem;

                slider.style = `transform : translateX(${pos}px)`;

            };
            pos = pos + width;
            slider.style = `transform: translateX(${pos}px)`;
            dem--;
            console.log(dem);
            console.log(pos);
            setTimeout(() => {
                [...listItem].forEach((el) => el.classList.remove("fwbold"));
                listItem[dem].classList.add('fwbold');
            }, 300);
        };
        if (x == -1) {
           if($(window).width() <= 999 && $(window).width() >= 769){
            if (dem == 2) listItem[0].style = `margin-left: ${-1 * widthLI}px`;
           }
           else
           if($(window).width()<=768){
            if (dem == 1) listItem[0].style = `margin-left: ${-2 * widthLI}px`;
            if (dem == 3) listItem[0].style = `margin-left: ${-3 * widthLI}px`;
           }
            
            if (dem >= length - 1) {
                // 

                dem = 0;
                pos = 0;
                slider.style = ` transform: translateX(${pos}px)`;
                setTimeout(() => {
                    [...listItem].forEach((el) => el.classList.remove("fwbold"));
                    if (dem == 0) {
                        listItem[0].style.margin = null;
                    }
                    listItem[dem].classList.add('fwbold');
                }, 300);
                return
            };
            pos = pos - width;
            slider.style = ` transform: translateX(${pos}px)`;
            dem++;
            console.log(dem);
            console.log(pos);
            setTimeout(() => {
                [...listItem].forEach((el) => el.classList.remove("fwbold"));
                listItem[dem].classList.add('fwbold');
            }, 300);
        };
    };

    // item1.addEventListener("click", function(){
    //     slider.style = `transform : translateX(${width * 0}px)`;
    //     pos = width * 0;
    //     dem = 0;
    // });
    [...listItem].forEach((item) => item.addEventListener("click", function (e) {
        var slideIndex = parseInt(e.target.dataset.index);
        dem = slideIndex;
        pos = -1 * width * dem;
        slider.style = `transform: translateX(${pos}px)`;
        [...listItem].forEach((el) => el.classList.remove("fwbold")
        );
        e.target.classList.add('fwbold');
        clearInterval(interval);
        console.log('daclear');
        interval = setInterval(function () {
            myfunction2();
        }, 4000);


    }));
    $('.ul-mainmenu li').hover(function () {

        $(this).find('.submenu').toggleClass('displayflex');
    })
    var textmove = document.querySelector('.text-move');
    var keyframe = new KeyframeEffect(textmove,
        [
            { transform: 'translateX(50%)' },
            { transform: 'translateX(-120%)' }
        ], { duration: 13000, iterations: Infinity }

    );
    var o = new Animation(keyframe, document.timeline);
    o.play();
    // RESPONSIVE
    function quatrai() {
        listItem[0].style = `margin-left: ${-1 * widthLI}px`;
    }
    function quatrai2() {
        listItem[0].style.margin = null;
    }
    function retrai(x) {
        if (x == true) {
            itemThu4.addEventListener("click", quatrai);
            // listItem[4].addEventListener("click" , quatrai2);
        }
        else {
            itemThu4.removeEventListener("click", quatrai);
            // listItem[4].removeEventListener("click" , quatrai2);

        }
    }
    const responsiveList = document.querySelector('.list');

    var widthRS = $(window).width();
    if (widthRS <= 998) {
        function quatrai() {
            listItem[0].style = `margin-left: ${-1 * widthLI}px`;
        }
        function quatrai2() {
            listItem[0].style.margin = null;
        }
        function retrai(x) {
            if (x == true) {
                itemThu4.addEventListener("click", quatrai);
                // listItem[4].addEventListener("click" , quatrai2);
            }
            else {
                itemThu4.removeEventListener("click", quatrai);
                // listItem[4].removeEventListener("click" , quatrai2);
    
            }
        }
        var widthLIs = document.getElementsByClassName('list-item')[0];
        var itemThu4 = document.getElementsByClassName('list-item')[3];
        var widthLI = widthLIs.offsetWidth;
        retrai(true);

    }
    else {
        retrai(false)
    }
    if(widthRS<=768){
        const infoRight = document.querySelector('.info-right')
        var rect2 = infoRight.getBoundingClientRect().top + $(window).scrollTop() - 200;

        var containList = document.querySelector('.contain-list');
        containList.style.top = `${rect2}px`
        
    }
    
        
    
   
});
