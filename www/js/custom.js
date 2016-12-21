$( document ).ready(function() {
  function centerFade(){
      var blurPic = $('.wrap-center'),
          winWidth = $(window).width();
      var blurWidth = blurPic.width();
      var alignCenter = (winWidth - blurWidth) / 2;
          alignCenter = alignCenter +'px';
          blurPic.css({"background-color": "yellow", "font-size": "200%"});
          console.log(winWidth);

          //  position: absolute;
          // z-index: -1;
          // opacity: 0.2;
          // top: 0;
          // left: 30px;
    }
  centerFade();
});
