jQuery(document).ready(function(){



   jQuery(".scrolltop").click(function(){
      jQuery("html").animate({"scrollTop" : "0px"},500)
     
   });

   jQuery(window).scroll(function(){
       var scl = jQuery(window).scrollTop();
       if(scl > 500){
         jQuery(".scrolltop").fadeIn();
       } else {
           jQuery(".scrolltop").fadeDown();
       }
   });

// jQuery(window).scroll(function(){
      //   var mn = jQuery(window).scrollTop();
      //    if(mn > 30){
      //     jQuery(".header-menu").fadeIn();
      //   } else {
      //     jQuery(".header-menu").fadeOut();
      //   }
      // });



      //hamburger
    var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

      var hamburgers = document.querySelectorAll(".hamburger");
      if (hamburgers.length > 0) {
        forEach(hamburgers, function(hamburger) {
          hamburger.addEventListener("click", function() {
            this.classList.toggle("is-active");
          }, false);
        });
      };


      

//humberger end


//header-to-top

   jQuery(".header_top_right a:nth-child(1)").click(function(){
    jQuery(".searchbox").show();
   });


 jQuery(".close-button").click(function(){
    jQuery(".searchbox").hide();
   });


});