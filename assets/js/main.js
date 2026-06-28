
//navbar toggle icon
function navbar_toggler() {
    $('.navbar-toggler[data-toggle=collapse]').click(function () {
        if ($(".navbar-toggler[data-bs-toggle=collapse] i").hasClass('fa-bars')) {
        } else {
            $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
        }
    });
}
navbar_toggler();

// navbar clone in mobile device
function navClone() {
    $('.js-clone-nav').each(function () {
        var $this = $(this);
        $this.clone().attr('class', 'navbar-nav ml-auto').appendTo('.d2c_mobile_view_body');
    });

    $('.d2c_mobile_view .nav-link').click(function () {
        $(".nav-link").removeClass("active");
        $('.d2c_mobile_view').removeClass('show');
        $(this).toggleClass('active');
    });
}
navClone();

// Preloader JS
window.addEventListener('load', function() {
  var preloader = document.querySelector('.preloader');
  preloader.classList.add('hide');
});

// ScrollBtn JS
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollBtn.classList.add("show");
  } else {
      scrollBtn.classList.remove("show");
  }
}



// Template Name: {{Tech Start Pro}}
// Template URL: {{https://www.designtocodes.com/product/techstart-pro-responsive-bootstrap-landing-page/}}
// Description: {{TechStart Pro landing page is the definitive solution for businesses and individuals seeking a top-tier online presence. This responsive Bootstrap landing page is not just good-looking, it's also simple.}}
// Author: DesignToCodes
// Author URL: https://www.designtocodes.com
// Text Domain: {{ Tech Start Pro }}
