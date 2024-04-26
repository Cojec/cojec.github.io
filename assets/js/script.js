(function () {
    "use strict";

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = document.querySelectorAll('#navbar .scrollto')
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = document.querySelector(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    document.addEventListener('scroll', navbarlinksActive)

    /**
     * Back to top button
     */
    let backtotop = document.querySelector('.back-to-top')
    if (backtotop) {
        const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        document.addEventListener('scroll', toggleBacktotop)
    }

    /**
     * Mobile nav toggle
     */
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', function (e) {
            document.querySelector('body').classList.toggle('mobile-nav-active')
            this.classList.toggle('bi-list')
            this.classList.toggle('bi-x')
        });
    }

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    const scrolltoLinks = document.querySelectorAll('.scrollto');
    scrolltoLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            if (document.querySelector(this.hash)) {
                e.preventDefault()

                let body = document.querySelector('body')
                if (body.classList.contains('mobile-nav-active')) {
                    body.classList.remove('mobile-nav-active')
                    let navbarToggle = document.querySelector('.mobile-nav-toggle')
                    navbarToggle.classList.toggle('bi-list')
                    navbarToggle.classList.toggle('bi-x')
                }

                let elementPos = document.querySelector(this.hash).offsetTop
                window.scrollTo({
                    top: elementPos,
                    behavior: 'smooth'
                })
            }
        });
    });

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (document.querySelector(window.location.hash)) {
                let elementPos = document.querySelector(window.location.hash).offsetTop
                window.scrollTo({
                    top: elementPos,
                    behavior: 'smooth'
                })
            }
        }
    });

    /**
     * Hero type effect
     */
    const typed = document.querySelector('.typed')
    if (typed) {
        let typed_strings = typed.getAttribute('data-typed-items')
        typed_strings = typed_strings.split('%')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }

    /**
     * Skills animation
     */
    let skilsContent = document.querySelector('.skills-content');
    if (skilsContent) {
        new Waypoint({
            element: skilsContent,
            offset: '80%',
            handler: function (direction) {
                let progress = document.querySelectorAll('.progress .progress-bar');
                progress.forEach((el) => {
                    el.style.width = el.getAttribute('aria-valuenow') + '%'
                });
            }
        })
    }

    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        })
    });
})();
