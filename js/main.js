  jQuery(document).ready(function() {

    /* ---------------------------------------------------------------------- */
    /*	Custom Functions
    /* ---------------------------------------------------------------------- */

    // Logo
    var $logo = $('#logo');

    if (location.href.indexOf("#") != -1) {
      $logo.show();
    }
    // Show logo
    $('.menu .tabs a').click(function() {
      $logo.fadeIn('slow');
    });
    // Hide logo
    $('.tab-profile').click(function() {
      $logo.fadeOut('slow');
    });

    // Menu Navigation
    $(".menu .tabs").carouFredSel({
      responsive: true,
      direction: "left",
      circular: false,
      infinite: false,
      pagination: "#menu-controls",
      auto: false,
      scroll: {
        items: 1,
        duration: 300,
        wipe: true
      },
      prev: {
        button: "#menu-prev",
        key: "right"
      },
      next: {
        button: "#menu-next",
        key: "left"
      },
      swipe: {
        onTouch: true
      },
      items: {
        width: 140,
        visible: {
          min: 2,
          max: 5
        }
      }
    });






    // socmed toggle
    // $(".socials-text").click(function() {
    //   $(".socialicons").toggleClass("main");
    // });
    // color Menu on resume part on custom js
    $(".socials-text").click(function() {
      $(".socialicons").toggleClass("main");
    });
    // toggle warna
    $('#yellow-color').click(function(e) {
      $(".main-wrapper-resume").attr("id", "yellow");
    });
    $('#red-color').click(function(e) {
      $(".main-wrapper-resume").attr("id", "red");
    });
    $('#blue-color').click(function(e) {
      $(".main-wrapper-resume").attr("id", "blue");
    });
    $('#green-color').click(function(e) {
      $(".main-wrapper-resume").attr("id", "green");
    });

    $(".setting-icon").click(function() {
      $(".color-box").toggleClass("main");
    });




    // ==== isotope for filtering images

    var $catsfilter = $('.cats-filter');

    $catsfilter.find('a').click(function() {
      var currentOption = $(this).attr('data-filter');
      $(this).parent().parent().find('a').removeClass('current');
      $(this).addClass('current');
    });

    // Profile Photo Slider
    $(".photo-inner ul").carouFredSel({
      direction: "left",
      circular: true,
      auto: true,
      scroll: {
        items: 1,
        fx: 'crossfade',
        duration: 1500,
        wipe: true
      },
      swipe: {
        onTouch: true
      },
      items: {
        width: 153
      }
    });


    /* ---------------------------------------------------------------------- */
    /*	Menu
    /* ---------------------------------------------------------------------- */

    // Needed variables
    var $content = $("#content");

    // Run easytabs
    $content.easytabs({
      animate: true,
      updateHash: false,
      transitionIn: 'slideDown',
      transitionOut: 'slideUp',
      animationSpeed: 600,
      tabs: ".tmenu",
      tabActiveClass: 'active',
    });


    // Hover menu effect
    // link how margin works
    // https://qastack.id/programming/11495200/how-do-negative-margins-in-css-work-and-why-is-margin-top-5-margin-bottom5
    $content.find('.tabs li a').hover(
      function() {
        $(this).stop().animate({
          marginTop: "-7px"
        }, 200);
      },
      function() {
        $(this).stop().animate({
          marginTop: "0px"
        }, 300);
      }
    );

    // Categorie filter menu navigate



    //end
    var $plist = $('#portfolio-list');
    var $pfilter = $('#portfolio-filter');

    // run isotope
    $plist.isotope({
      filter: '*',
      layoutMode: 'masonry',
      animationOptions: {
        duration: 750,
        easing: 'linear'
      }
    });

    // filter isotope
    $pfilter.find('a').click(function() {
      var selector = $(this).attr('data-filter');
      $plist.isotope({
        filter: selector,
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        }
      });
      return false;
    });

    // magnific popUp
    $(function() {
      $("#portfolio").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
          enabled: true
        }
      });
    })


  });





  // $(document).ready(function() {
  //
  // });
