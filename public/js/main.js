/*  ---------------------------------------------------
    Theme Name: Anime
    Description: Anime video tamplate
    Author: Colorib
    Author URI: https://colorib.com/
    Version: 1.0
    Created: Colorib
---------------------------------------------------------  */

"use strict";

(function ($) {
  /*------------------
        Preloader
    --------------------*/
  $(window).on("load", function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    /*------------------
            FIlter
        --------------------*/
    $(".filter_controls li").on("click", function () {
      $(".filter_controls li").removeClass("active");
      $(this).addClass("active");
    });
    if ($(".filter_gallery").length > 0) {
      var containerEl = document.querySelector(".filter_gallery");
      var mixer = mixitup(containerEl);
    }
  });

  /*------------------
        Background Set
    --------------------*/
  $(window).on("load", function () {
    $(".set-bg").each(function () {
      var bg = $(this).data("setbg");
      $(this).css("background-image", "url(" + bg + ")");
    });
    
  });
  $(window).on("load",function(){
    $("data-src").each(function (){
      var bg = $(this).data("data-src");
      $(this).css("background-image", "url(" + bg + ")")
    })
  })
  // Search model
  $(".search-switch").on("click", function () {
    $(".search-model").fadeIn(400);
  });

  $(".search-close-switch").on("click", function () {
    $(".search-model").fadeOut(400, function () {
      $("#search-input").val("");
    });
  });

  /*------------------
		Navigation
	--------------------*/
  $(".mobile-menu").slicknav({
    prependTo: "#mobile-menu-wrap",
    allowParentLinks: true,
  });

  /*------------------
		Hero Slider
	--------------------*/
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });

  var hero_s = $(".hero_slider");
  hero_s.owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    dots: true,
    nav: true,
    navText: [
      "<span class='arrow_carrot-left'></span>",
      "<span class='arrow_carrot-right'></span>",
    ],
    animateOut: "fadeOut",
    animateIn: "fadeIn",
    smartSpeed: 1200,
    autoHeight: false,
    autoplay: true,
    mouseDrag: false,
  });

  /*------------------
        Video Player
    --------------------*/
  const player = new Plyr("#player", {
    controls: [
      "play-large",
      "play",
      "progress",
      "current-time",
      "mute",
      "captions",
      "settings",
      "fullscreen",
    ],
    seekTime: 25,
  });

  /*------------------
        Niceselect
    --------------------*/
  $("select").niceSelect();

  /*------------------
        Scroll To Top
    --------------------*/
  $("#scrollToTopButton").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery",
  });
})(jQuery);
