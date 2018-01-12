window.addEventListener('load', function () {
    let bread = document.querySelector('.bread');
    let breadKey = document.querySelector('.breadKey');
    let nav = document.querySelector('nav');
    let logo=document.querySelector('.logo');
    bread.addEventListener('click', element => {
        if (nav.offsetWidth == 0) {
            nav.style.width = '45%';
            bread.style.color='#e2fe02';
            breadKey.style.transform='rotateZ(360deg)';
        } else {
            nav.style.width = 0;
            bread.style.color='#f7fff3';
            breadKey.style.transform='rotateZ(0)';
        }
    });
    window.onscroll=function () {
       let header=document.querySelector('header');
       let scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
       let top=document.querySelector('.top>span');

       if (scrollTop>=header.offsetHeight+10){
           header.style.background='rgba(0,0,0,.5)';
           // header.style.height='0';
           // header.style.display='none';
           // breadKey.style.height='0';
           // logo.style.height='0'
       }else{
           header.style.background='rgba(0,0,0,1)';
           // header.style.height='90px';
           // header.style.display='block';
           // breadKey.style.height='90px';
           // logo.style.height='90px';

       }
       top.onclick=function () {
           let timer=setInterval(function (){
               window.scrollBy(0,-30);
               if ((window.scrollY||window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop)==0){
                   clearInterval(timer);
               }
           },10);
       }
    }
});
$(function () {
    ///////////////cardItem///////////////
   $('.cardItem').hover(function () {
       $('.cardItem').removeClass('carHot');
       $(this).addClass('carHot');
   },function () {
       $(this).removeClass('carHot');
       $('.cardItem:eq(1)').addClass('carHot');
   });
    ///////////////cardItem///////////////

});
