(function( $ ) {
	'use strict';

	jQuery(window).load(function(){
        wgl_first_visit_init();
        wgl_toolbar_init();
    });

    function wgl_toolbar_init(){
        
        var wglScroll;
        var timer;

        jQuery('.wgl-env-theme__toggle').on( "click tap", function() {
            wglScroll = jQuery(window).scrollTop();

            clearTimeout(timer);
            var s = jQuery(this).closest('.wgl-env-theme_toolbar');
            
            if (! s.hasClass('open')) {
                s.addClass('open');
                timer = setTimeout(function(){
                    jQuery('.wgl-env-theme_toolbar').removeClass('active');
                },450);

                jQuery(window).scroll(function() {
                    if (450 < Math.abs(jQuery(this).scrollTop() - wglScroll)) {
                        s.removeClass('open');
                        clearTimeout(timer);
                    }
                });
            }else{
                s.removeClass('open');
            }
        });        

        jQuery('.wgl-env-theme__overlay').on( "click tap", function() {
            jQuery('.wgl-env-theme_toolbar').toggleClass('open');
            

            clearTimeout(timer);
            timer = setTimeout(function(){
                jQuery('.wgl-env-theme_toolbar').removeClass('active');
            },450);
        });

        new PerfectScrollbar('#wgl-toolbar', {
            wheelSpeed: 6,
            suppressScrollX: true
        });
        
    }

    function wgl_first_visit_init(){
        
        var wglScroll = jQuery(window).scrollTop();
        
        jQuery(window).scroll(function() {  
            if (400 < Math.abs(jQuery(this).scrollTop() - wglScroll)) {
                if(!jQuery('.wgl-env-theme_toolbar').hasClass('open')){
                    jQuery('.wgl-env-theme_toolbar').addClass('active');
                }
            }
        });      
    }


})( jQuery );
