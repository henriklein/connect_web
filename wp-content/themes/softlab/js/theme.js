"use strict";

is_visible_init ();
softlab_slick_navigation_init();

jQuery(document).ready(function($) {
	softlab_split_slider();
	softlab_sticky_init();
	softlab_search_init();
	softlab_side_panel_init();
	softlab_mobile_header();
	softlab_woocommerce_qty();
	softlab_init_timeline_appear();
	softlab_init_timeline_horizontal_appear();
	softlab_init_ico_progress_appear();
	softlab_progress_bars_init();
	softlab_carousel_slick();
	softlab_counter_init();
	softlab_countdown_init ();
	softlab_circuit_services();
	softlab_circuit_services_resize();
	softlab_img_layers();
	softlab_page_title_parallax ();
	softlab_extended_parallax();
	softlab_portfolio_parallax ();
	softlab_message_anim_init();
	softlab_scroll_up();
	softlab_link_scroll();
	softlab_skrollr_init();
	softlab_sticky_sidebar ();
	softlab_videobox_init ();
	softlab_parallax_video();
	wgl_timeTabs();
	softlab_select_wrap();
	softlab_button_wrap();
	jQuery( '.wgl_module_title .carousel_arrows' ).softlab_slick_navigation();
	softlab_scroll_animation();
	softlab_dynamic_styles();
});

jQuery(window).load(function() {
	softlab_isotope ();
	softlab_blog_masonry_init ();
	softlab_instagram_init();
	setTimeout(function(){
		jQuery('#preloader-wrapper').fadeOut();
	},1100);
	particles_custom ();

	softlab_menu_lavalamp();
	jQuery(".wgl-currency-stripe_scrolling").each(function(){
    	jQuery(this).simplemarquee({
	        speed: 40,
	        space: 0,
	        handleHover: true,
	        handleResize: true
	    });
    })
});