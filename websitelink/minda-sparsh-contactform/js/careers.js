jQuery(document).ready(function($) {
    'use strict';

    var $jobRows = $('.job-row');
    var $jobTriggers = $jobRows.find('.trigger');
    var $jobTargets = $jobRows.find('.target');
    function handleJobRowClick(evt) {
        evt.preventDefault();
        var $this = $(this);

        if($this.hasClass('active')) {
            $jobTriggers.removeClass('active');
            $jobTargets.slideUp(400);
        } else {
            $jobTargets.slideUp(400);
            $jobTriggers.removeClass('active');
            $this.addClass('active');
            $this.closest('.job-row').find('.target').slideDown(400);
        }
    }
    $jobTriggers.on('click', handleJobRowClick);


    // ==================================================================================================== form related actions
    var $formControls = $('.form-control');
    function onInputFocus(evt) {
        var $this = $(this);
        // $formLabels.stop().animate({color: '#aaa'}, 200);
        $this.siblings('label').animate({height: '30px', marginTop: '-30px', lineHeight: '30px'}, 200);
    }
    $formControls.on('focus', onInputFocus);
    
    // whenever submit button clicked the form should go away.
    // thank you message should appear in place of the form
    var $careersForm = $('#careers_form');
    var $messages = $('#messages');
    var $careersMessages = $('#careers_messages');

    var position = null;

    // ==================================================================================================== form validation actions
    function doneCareersForm(data) {
        $('.form-reversed .help-block').css('visibility', 'hidden');
        var $form = $careersForm;
        if (data.success) {
            $careersForm.fadeOut(300, function() {
                $careersMessages.html('<p class="success">Thank you for contacting us. <br> We will get back to you soon.</p><p class="text-center"><button class="btn btn-black" onclick="location.reload();">Back</button></p>').fadeIn(300);
            });
        } else {
            // set generic messages
            if (data.errors.generic) {
                $careersMessages.html('');
                for(i = 0, len = data.errors.generic.length; i < len; i += 1) {
                    $careersMessages.append('<p class="error"><b>'+ data.errors.generic[i] +'</b></p>');
                }
            }
            // set field messages
            if (data.errors.name) {
                var $name = $form.find('.form-group.name');
                var $nameEr = $name.find('.errors');
                $nameEr.append('<p><em class="error help-block">'+ data.errors.name +'</em></p>');
                $name.addClass('has-error');
            }
            if (data.errors.email) {
                var $email = $form.find('.form-group.email');
                var $emailEr = $email.find('.errors');
                $emailEr.append('<p><em class="error help-block">'+ data.errors.email +'</em></p>');
                $email.addClass('has-error');
            }
            if (data.errors.contact_number) {
                var $contact = $form.find('.form-group.contact');
                var $contactEr = $contact.find('.errors');
                $contactEr.append('<p><em class="error help-block">'+ data.errors.contact_number +'</em></p>');
                $contact.addClass('has-error');
            }
            if (data.errors.careers_resume) {
                var $query = $form.find('.form-group.query');
                var $queryEr = $query.find('.errors');
                $queryEr.append('<p><em class="error help-block">'+ data.errors.query +'</em></p>');
                $query.addClass('has-error');
            }
        }
    }
    $.validator.setDefaults( {
        submitHandler: function (form) {
            var $form = $(form);
            var whichForm = $form.data('formname');
            var url = $form.attr('action');
            var formname = null;
            var formData = null;

            formData = new FormData(form);

            if(whichForm === 'contact') {
                $.ajax({
                    url: url,
                    type: "post",      
                    data: formData,
                    dataType: 'json',
                }).done(doneContactForm);
            }
            if(whichForm === 'careers') {
                $.ajax({
                    url: url,
                    type: "post",      
                    data: formData,
                    dataType: 'json',
                    mimeType: "multipart/form-data",
                    contentType: false,
                    processData: false
                }).done(doneCareersForm);
            }
            // return false;
        }
    });

    $( "#careers_form" ).validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 30
            },
            email: {
                required: true,
                email: true
            },
            contact_number: {
                required: true,
                minlength: 6,
                maxlength: 16
            },
            careers_resume: {
                required: true,
                accept: "application/pdf"
            },
            careers_portfolio: {
                accept: "application/pdf"
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must consist of at least 3 characters",
                maxlength: "Maximum 30 letters are allowed"
            },
            email: "Please enter a valid email address",
            contact_number: {
                required: "Please enter a contact number",
                minlength: "Your contact number must consist of at least 6 characters",
                maxlength: "Maximum 16 letters are allowed"
            },
            careers_resume: {
                required: 'Please upload your resume',
                accept: 'Please add your resume in PDF format'
            },
            careers_portfolio: {
                accept: 'Please add your resume in PDF format'
            }
        },
        errorElement: "em",
        errorPlacement: function ( error, element ) {
            // Add the `help-block` class to the error element
            error.addClass( "help-block" );

            if ( element.prop( "type" ) === "checkbox" ) {
                error.insertAfter( element.parent( "label" ) );
            } else {
                error.insertAfter( element );
            }
        },
        highlight: function ( element, errorClass, validClass ) {
            $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
        },
        unhighlight: function (element, errorClass, validClass) {
            $( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
        }
    });

    $('.bxSlider').bxSlider({
        auto: true,
        mode: 'fade',
        pause: 8000
    });

    $('.formPopup').magnificPopup({
        items: [
          {
            src: '#formModal', // CSS selector of an element on page that should be used as a popup
            type: 'inline'
          }
        ],
        type: 'image', // this is default type
        callbacks: {
            beforeOpen: function() {
                position = $(this.st.el).data('pos');
                $('#post').val(position);
            },
            close: function() {
                $('#post').val(position);
                position = null;
            }
        }
    });

});