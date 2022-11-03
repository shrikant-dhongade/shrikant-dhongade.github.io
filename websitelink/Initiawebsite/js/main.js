jQuery(document).ready(function ($) {

    var $window = $(window);
    var ww = $window.width();
    var wh = $window.height();
    var qwh = parseInt(wh / 4);

    // =====================================================================================================> EXPAND ARROWS
    $( ".arrow-icon" ).click(function(evt) {
        evt.preventDefault();
        var $this = $(this);
        var target = $this.attr('href');
        $(target).toggleClass('active');
        $this.toggleClass("active");
    });


    
    // =====================================================================================================> ARROW ICONS SCROLL TO LINK
    $(".scroll-to-arrow, #gototop-btn, #top-logo").on('click', pageScroll);

    function pageScroll (evt) {
        evt.preventDefault();
        var target = $(this).attr('href');
        var scrollVal = $(target).offset().top;
        $('html, body').stop().animate({ scrollTop: scrollVal }, 500);
    }


    
    // =====================================================================================================> RIGHT NAV SCROLL TO LINKS
    var $rightNavLinks = $("nav .scroll-to-link");
    $rightNavLinks.on('click', function(evt) {
        evt.preventDefault();
        var $this = $(this);
        var target = $this.attr('href');
        var scrollVal = $(target).offset().top;
        $rightNavLinks.removeClass('active');
        $this.addClass('active');
        $('html, body').stop().animate({ scrollTop: scrollVal }, 500);
    });


    window.odometerOptions = {
        auto: false, // Don't automatically initialize everything with class 'odometer'
        format: '(,ddddd).dd', // Change how digit groups are formatted, and how many digits are shown after the decimal point
        duration: 3000, // Change how long the javascript expects the CSS animation to take
        animation: 'count' // Count is a simpler animation method which just increments the value,
    };
    var odo1 = document.getElementById('odo1');
    var odo2 = document.getElementById('odo2');
    var odo3 = document.getElementById('odo3');
    var odo4 = document.getElementById('odo4');
    var allTopEdges = {initia: 0, about: 0, services: 0, work: 0, leadership: 0, engagement: 0, contact: 0};
    allTopEdges.initia       = $('#initia').position().top - qwh;
    allTopEdges.about        = $('#we-have-the').position().top - qwh;
    allTopEdges.services     = $('#our-approach').position().top - qwh;
    allTopEdges.work         = $('#work').position().top - qwh;
    allTopEdges.leadership   = $('#leadership').position().top - qwh;
    allTopEdges.engagement   = $('#engagement').position().top - qwh;
    allTopEdges.contact      = $('#contact').position().top - qwh;

    var $siteHeader = $('#site-header');
    var $landingLogo = $('#landing-logo');
    var landingLogoHeight = $landingLogo.height();
    var landingLogoTop = $landingLogo.position().top;
    var navPoint = landingLogoHeight + landingLogoTop;
    var $goToTopBtn = $('#gototop-btn');

    $(window).on('scroll', handleWindowScroll);
    function handleWindowScroll(evt) {
        evt.preventDefault();
        var scrollTop = $(this).scrollTop();


        if(scrollTop > landingLogoTop) {
            $landingLogo.removeClass('active');
        } else if(scrollTop <= navPoint) {
            $landingLogo.addClass('active');
        }

        if(scrollTop > allTopEdges.about - 500) {
            odo1.innerHTML = 200;
            odo2.innerHTML = 25;
            odo3.innerHTML = 100;
            odo4.innerHTML = 4000;
        }

        if(scrollTop < 100) {
            $rightNavLinks.removeClass('active');
            $landingLogo.addClass('active');
            $goToTopBtn.removeClass('active');
        }
        else if(scrollTop > allTopEdges.contact) {
            $rightNavLinks.removeClass('active');
            $rightNavLinks.eq(6).addClass('active');
        }
        else if(scrollTop > allTopEdges.engagement && scrollTop < allTopEdges.contact) {
            $rightNavLinks.removeClass('active');
            $rightNavLinks.eq(5).addClass('active');
        }
        else if(scrollTop > allTopEdges.leadership && scrollTop < allTopEdges.engagement) {
            $rightNavLinks.removeClass('active');
            $rightNavLinks.eq(4).addClass('active');
        }
        else if(scrollTop > allTopEdges.work && scrollTop < allTopEdges.leadership) {
            $rightNavLinks.removeClass('active');
            $rightNavLinks.eq(3).addClass('active');
        }
        else if(scrollTop > allTopEdges.services && scrollTop < allTopEdges.work) {
            $rightNavLinks.removeClass('active');
            $rightNavLinks.eq(2).addClass('active');
        }
        else if(scrollTop > allTopEdges.about && scrollTop < allTopEdges.services) {
            $rightNavLinks.removeClass('active');
            $rightNavLinks.eq(1).addClass('active');
        }
        else if(scrollTop > 100 && scrollTop < allTopEdges.about) {
            $rightNavLinks.removeClass('active');
            $rightNavLinks.eq(0).addClass('active');
            $goToTopBtn.addClass('active');
        }
    }


    // =====================================================================================================> VANTA JS ANIMATED BACKGROUNDS
    // VANTA.NET({
    //     el: "#our-approach",
    //     mouseControls: true,
    //     touchControls: true,
    //     minHeight: 1000.00,
    //     minWidth: 1000.00,
    //     scale: 1.00,
    //     scaleMobile: 1.00,
    //     color: 0x555253,
    //     backgroundColor: 0x0,
    //     points: 14.00
    // });
    // VANTA.DOTS({
    //     el: "#our-approach",
    //     // mouseControls: true,
    //     // touchControls: true,
    //     minHeight: 200.00,
    //     minWidth: 200.00,
    //     scale: 1.00,
    //     scaleMobile: 1.00,
    //     color: 0x9b9998,
    //     color2: 0x0,
    //     spacing: 20,
    //     size: 3,
    //     backgroundColor: 0x0
    // });


    // =====================================================================================================> POPUP GALLERY TRIGGER
    var $popupGalleryTrigger = $('#popup-gallery-trigger');
    var $popupGallery = $('#popup-gallery');
    var $popupCloseBtn = $('.popup').find('.close');
    $popupGalleryTrigger.on('click', function(evt) {
        evt.preventDefault();
        $popupGallery.addClass('active');
    });
    function handlePopupClose(evt) {
        evt.preventDefault();
        $(this).closest('.popup').removeClass('active');
    }
    $popupCloseBtn.on('click', handlePopupClose);

    var gallerySwiper = new Swiper('#gallery-swiper', {
        speed: 400,
        spaceBetween: 10,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    var $mainGallery = $('#works-base-swiper');
    var $mainGalleryLinks = $mainGallery.find('a');
    var $tooltip = $('#tooltip');

    $mainGalleryLinks.on('mouseenter', function(evt) {
        var x = evt.pageX;
        var y = evt.pageY;
        console.log(x, y);
        $tooltip.addClass('active').css({left: x + 15, top: y - 30});
    });
    $mainGalleryLinks.on('mousemove', function(evt) {
        var x = evt.pageX;
        var y = evt.pageY;
        $tooltip.addClass('active').css({left: x + 15, top: y - 30});
        
    });
    $mainGalleryLinks.on('mouseleave', function(evt) {
        var x = evt.pageX;
        var y = evt.pageY;
        console.log(x, y);
        $tooltip.removeClass('active').css({left: '90%', top: 0});
    });



    // =====================================================================================================> WORK BASE SLIDER
    var slidesPerGroup = ww > 992 ? 3 : 1;
    var $workBaseSlider = $('#works-base-swiper');
    var $thumbnailsWrapper = $('.work-collage-thumbnails-wrapper .thumb-wrapper');
    var $thumbnails = $('.work-collage-thumbnails-wrapper a');
    var workBaseSlider = new Swiper('#works-base-swiper', {
        speed: 400,
        slidesPerView: 'auto',
        spaceBetween: 2,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerGroup: 1
    });
    var $swiperBaseLinks = $workBaseSlider.find('a');
    var $popupWorks = $('#popup-works');

    function handleWorksBaseLinksClick(evt) {
        evt.preventDefault();
        var index = $swiperBaseLinks.index(this);
        worksSwiper.slideTo(index + 1);
        $popupWorks.addClass('active');
    }
    function handleThumbnailsClick(evt) {
        evt.preventDefault();
        var index = parseInt($(this).data('slide'));
        workBaseSlider.slideTo(index);
        $thumbnailsWrapper.removeClass('active');
        $(this).closest('.thumb-wrapper').addClass('active');
    }
    $thumbnails.on('click', handleThumbnailsClick);
    $swiperBaseLinks.on('click', handleWorksBaseLinksClick);


    // =====================================================================================================> POPUP WORKS TRIGGER
    var worksSwiper = new Swiper('#works-popup-swiper', {
        speed: 400,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });


    // =====================================================================================================> LANDING PAGE TYPING EFFECT
    var $landingScrollToLink = $('#landing-scrollto-link');
    setTimeout(function() {
        var $form = $('#form');
        var form = document.getElementById('form');
        var formTypewriter = new Typewriter(form, {
            loop: false
        });
        function startBlinkingForm(el) {
            $form.find('.Typewriter__cursor').addClass('active');
        }
        function stopBlinkingForm(el) {
            $form.find('.Typewriter__cursor').removeClass('active');
        }
        function makeVisible() {
            $('h1.animate').addClass('active');
        }
        formTypewriter.callFunction(makeVisible).callFunction(startBlinkingForm.bind(this)).pauseFor(1000).typeString('Form').pauseFor(400).callFunction(stopBlinkingForm.bind(this)).start();

        
        var $experience = $('#experience');
        var experience = document.getElementById('experience');
        var experienceTypewriter = new Typewriter(experience, {
            loop: false,
        });
        function startBlinkingExperience (a, b, c) {
            $experience.find('.Typewriter__cursor').addClass('active');
        }
        function stopBlinkingExperience(el) {
            $experience.find('.Typewriter__cursor').removeClass('active');
        }
        experienceTypewriter.pauseFor(2800).callFunction(startBlinkingExperience.bind(this)).typeString('Experience').pauseFor(300).callFunction(stopBlinkingExperience.bind(this)).start();


        var $mobility = $('#mobility');
        var mobility = document.getElementById('mobility');
        var mobilityTypewriter = new Typewriter(mobility, {
            loop: false
        });
        function startBlinkingMoblity (a, b, c) {
            $mobility.find('.Typewriter__cursor').addClass('active');
        }
        function stopBlinkingMobility(el) {
            $mobility.find('.Typewriter__cursor').removeClass('active');
        }
        function showLandingArrow () {
            $landingScrollToLink.addClass('active');
        }
        mobilityTypewriter.pauseFor(5000).callFunction(startBlinkingMoblity.bind(this)).typeString('Mobility').pauseFor(500).callFunction(stopBlinkingMobility.bind(this)).callFunction(showLandingArrow).start();
    },300);




    // =====================================================================================================> AOS init
    AOS.init({
        once: true
    });


    // =====================================================================================================> CONTACT PAGE ACTIONS
    var Validation = {
        validateName: function (text, minLen, maxLen) {
            if (!text) {
                return 'Please, provide name';
            }
            if (typeof text !== 'string') {
                return 'Wrong Input';
            }
            text = text.trim();
            if (text === '') {
                return 'Please, provide name';
            }
            var regex = new RegExp('^[A-Za-z\s]+$', 'gm');
            if (!regex.test(text)) {
                return 'Invalid input';
            }
            if (text.length < minLen) {
                return 'Minimum ' + minLen + ' letters';
            }
            if (text.length > maxLen) {
                return 'Maximum ' + maxLen + ' letters';
            }
            return true;
        },
        validateText: function (text, minLen, maxLen) {
            if (!text) {
                return 'Please, provide message';
            }
            if (typeof text !== 'string') {
                return 'Wrong Input';
            }
            text = text.trim();
            if (text === '') {
                return 'Please, provide message';
            }
            if (text.length < minLen) {
                return 'Minimum ' + minLen + ' letters';
            }
            if (text.length > maxLen) {
                return 'Maximum ' + maxLen + ' letters';
            }
            return true;
        },
        validateEmail: function (text) {
            if (!text) {
                return 'Please provide email';
            }
            text = text.trim();
            if(text) {
                if (typeof text !== 'string') {
                    return 'Wrong Input';
                }
                if (text === '') {
                    return 'This is required';
                }
                var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (text.length < 5 || text.length > 60 || !regex.test(text.toLowerCase())) {
                    return 'Invalid Email';
                }
            }
            return true;
        }
    };
    function showError (field, errorText) {
		if (field === 'name') {
			$nameLabel.text(errorText).removeClass('success').addClass('error');
        }
        else if (field === 'email') {
			$emailLabel.text(errorText).removeClass('success').addClass('error');
        }
        else if (field === 'message') {
			$messageLabel.text(errorText).removeClass('success').addClass('error');
		}
    }
    function showSuccess (field) {
		if (field === 'name') {
			$nameLabel.text('').removeClass('error').addClass('success');
        }
        else if (field === 'email') {
            $emailLabel.text('').removeClass('error').addClass('success');
        }
        else if (field === 'message') {
            $messageLabel.text('').removeClass('error').addClass('success');
        }
	}
    var $nameInput       = $('#name');
    var $nameLabel       = $('#name-label')
    var $emailInput      = $('#email');
    var $emailLabel      = $('#email-label');
    var $messageInput    = $('#message');
    var $messageLabel    = $('#message-label');
    var $submitFormBtn   = $('#submitFormBtn');
    var $contactForm     = $('#contact-form');
    var $contactFormWrapper = $('#contact-form-wrapper');
    var $anotherQuery    = $('#another-query');

    $nameInput.on('keyup', handleNameKeyup);
    $emailInput.on('keyup', handleEmailKeyup);
    $messageInput.on('keyup', handleMessageKeyup);
    $submitFormBtn.on('click', handleFormSubmit);
    $contactForm.on('submit', handleFormSubmit);
    $anotherQuery.on('click', handleAnotherQuery);

    function handleNameKeyup (evt) {
        var $this = $(this);
		var text = $this.val();
        var result = Validation.validateName(text, 3, 20);
        if (result !== true) {
			showError('name', result);
		} else {
			showSuccess('name');
		}
    }

    function handleEmailKeyup (evt) {
        var $this = $(this);
		var text = $this.val();
        var result = Validation.validateEmail(text);
        if (result !== true) {
			showError('email', result);
		} else {
			showSuccess('email');
		}
    }

    function handleMessageKeyup (evt) {
        var $this = $(this);
		var text = $this.val();
        var result = Validation.validateText(text, 8, 256);
        if (result !== true) {
			showError('message', result);
		} else {
			showSuccess('message');
		}
    }

    function handleAnotherQuery (evt) {
        evt.preventDefault();
        $contactFormWrapper.removeClass('pos-2');
    }

    function handleFormSubmit (evt) {
        evt.preventDefault();

        // CHECK NAME INPUT
        var result = Validation.validateName($nameInput.val(), 3, 20);
        if (result !== true) {
            showError('name', result);
		}
        // CHECK EMAIL INPUT
        result = Validation.validateEmail($emailInput.val(), 3, 20);
        if (result !== true) {
            showError('email', result);
		}
        // CHECK MESSAGE INPUT
        result = Validation.validateText($messageInput.val(), 3, 20);
        if (result !== true) {
            showError('message', result);
            return false;
		}
        
        // SUBMIT FORM USING AJAX
        var formData = {
            name: $nameInput.val(),
            email: $emailInput.val(),
            message: $messageInput.val()
        };
        
        // formData = JSON.stringify(formData);
        $.ajax({
            type:   'POST',
            url:    'contact_form.php',
            dataType: "json",
            data:   formData
        }).done(function (data) {
            console.log(data);
            // data = $.parseJSON(data);
            if(!data.success) {
                if(data.errors.name) {
                    showError('name', data.errors.name);
                }
                if(data.errors.email) {
                    showError('email', data.errors.email);
                }
                if(data.errors.message) {
                    showError('message', data.errors.message);
                }
            } else  {
                $nameInput.val('').removeClass('error').removeClass('success');
                $emailInput.val('').removeClass('error').removeClass('success');
                $messageInput.val('').removeClass('error').removeClass('success');
                $contactFormWrapper.addClass('pos-2');
            }
        });
    }

});