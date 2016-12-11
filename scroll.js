;(function($, win) {
  $.fn.inViewport = function(cb) {
     return this.each(function(i,el){
       function visPx(){
         var H = $(this).height(),
             r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
         return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));
       } visPx();
       $("body").on("resize scroll", visPx);
     });
  };
}(jQuery, window));

$(function(){ // DOM is now ready
  $(".animated").inViewport(function(px){
    if(px) $(this).addClass("triggeredCSS3") ;
    else $(this).removeClass("triggeredCSS3");
  });
});
