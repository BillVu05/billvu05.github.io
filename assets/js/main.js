
//Navbar toggle icon
function navbar_toggler() {
    $('.navbar-toggler[data-toggle=collapse]').click(function () {
        if ($(".navbar-toggler[data-bs-toggle=collapse] i").hasClass('fa-bars')) {
        } else {
            $(".navbar-toggler[data-bs-toggle=collapse] i").removeClass("fa-times");
        }
    });
  }
  navbar_toggler();
  
// Navbar clone in mobile device
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

// WOW JS
    new WOW().init();

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

// Counter
// Counts up when the row actually scrolls into view, and stops when it lands.
// The old version started four setIntervals on page load and never cleared them.
(function () {
    var counters = document.querySelectorAll('.count');
    if (!counters.length) return;

    // Frame-based so the run always takes ~1.2s of wall clock, whatever the tick rate.
    // A fixed-step setInterval stretches to many seconds when the tab is throttled.
    var DURATION = 1200;

    function animate(el) {
        var target = parseInt(el.dataset.count, 10);
        if (isNaN(target)) return;
        var start = null;
        function frame(now) {
            if (start === null) start = now;
            var progress = Math.min(1, (now - start) / DURATION);
            el.textContent = Math.round(target * progress).toLocaleString('en-AU');
            if (progress < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }

    if (!('IntersectionObserver' in window)) {
        counters.forEach(animate);
        return;
    }

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            observer.unobserve(entry.target);
            animate(entry.target);
        });
    }, { threshold: 0.5 });

    counters.forEach(function (el) { observer.observe(el); });
})();



// Template Name: {{CSUME V3 - Cyber Security Expert One Page Website Template}}
// Template URL: {{https://designtocodes.com/product/csume-v3-cyber-security-expert-one-page-template}}
// Description: {{Invest in Csume V3 onepage cyber security template today and take your cyber security expertise to new heights.}}
// Author: DesignToCodes
// Author URL: https://www.designtocodes.com
// Text Domain: {{ CSUME V3 }}
