jQuery(document).ready(function($) {
    'use strict';

    // var $window = $(window);
    // var $doc = $(document);

    // function doneCareersForm(data) {
    //     var $form = $careersForm;
    //     if (data.success) {
    //         $careersForm.fadeOut(300, function() {
    //             $careersMessages.html('<p class="success">Thank you for contacting us. We will get back to you soon.</p>').fadeIn(300);
    //         });
    //     } else {
    //         // set generic messages
    //         if (data.errors.generic) {
    //             $careersMessages.html('');
    //             for(i = 0, len = data.errors.generic.length; i < len; i += 1) {
    //                 $careersMessages.append('<p class="error"><b>'+ data.errors.generic[i] +'</b></p>');
    //             }
    //         }
    //         // set field messages
    //         if (data.errors.name) {
    //             var $name = $form.find('.form-group.name');
    //             var $nameEr = $name.find('.errors');
    //             $nameEr.append('<p><em class="error help-block">'+ data.errors.name +'</em></p>');
    //             $name.addClass('has-error');
    //         }
    //         if (data.errors.email) {
    //             var $email = $form.find('.form-group.email');
    //             var $emailEr = $email.find('.errors');
    //             $emailEr.append('<p><em class="error help-block">'+ data.errors.email +'</em></p>');
    //             $email.addClass('has-error');
    //         }
    //         if (data.errors.contact_number) {
    //             var $contact = $form.find('.form-group.contact');
    //             var $contactEr = $contact.find('.errors');
    //             $contactEr.append('<p><em class="error help-block">'+ data.errors.contact_number +'</em></p>');
    //             $contact.addClass('has-error');
    //         }
    //         if (data.errors.careers_resume) {
    //             var $query = $form.find('.form-group.query');
    //             var $queryEr = $query.find('.errors');
    //             $queryEr.append('<p><em class="error help-block">'+ data.errors.query +'</em></p>');
    //             $query.addClass('has-error');
    //         }
    //     }
    // }
    // $.validator.setDefaults( {
    //     submitHandler: function (form) {
    //         var $form = $(form);
    //         var whichForm = $form.data('formname');
    //         var url = $form.attr('action');
    //         var formname = null;
    //         var formData = null;

    //         formData = new FormData(form);

    //         if(whichForm === 'contact') {
    //             $.ajax({
    //                 url: url,
    //                 type: "post",      
    //                 data: formData,
    //                 dataType: 'json',
    //             }).done(doneContactForm);
    //         }
    //         if(whichForm === 'careers') {
    //             $.ajax({
    //                 url: url,
    //                 type: "post",      
    //                 data: formData,
    //                 dataType: 'json',
    //                 mimeType: "multipart/form-data",
    //                 contentType: false,
    //                 processData: false
    //             }).done(doneCareersForm);
    //         }
    //         // return false;
    //     }
    // });

    // $( "#careers_form" ).validate({
    //     rules: {
    //         name: {
    //             required: true,
    //             minlength: 3,
    //             maxlength: 30
    //         },
    //         email: {
    //             required: true,
    //             email: true
    //         },
    //         contact_number: {
    //             required: true,
    //             minlength: 6,
    //             maxlength: 16
    //         },
    //         careers_resume: {
    //             required: true,
    //             accept: "application/pdf"
    //         },
    //         careers_portfolio: {
    //             accept: "application/pdf"
    //         }
    //     },
    //     messages: {
    //         name: {
    //             required: "Please enter your name",
    //             minlength: "Your name must consist of at least 3 characters",
    //             maxlength: "Maximum 30 letters are allowed"
    //         },
    //         email: "Please enter a valid email address",
    //         contact_number: {
    //             required: "Please enter a contact number",
    //             minlength: "Your contact number must consist of at least 6 characters",
    //             maxlength: "Maximum 16 letters are allowed"
    //         },
    //         careers_resume: {
    //             required: 'Please upload your resume',
    //             accept: 'Please add your resume in PDF format'
    //         },
    //         careers_portfolio: {
    //             accept: 'Please add your resume in PDF format'
    //         }
    //     },
    //     errorElement: "em",
    //     errorPlacement: function ( error, element ) {
    //         // Add the `help-block` class to the error element
    //         error.addClass( "help-block" );

    //         if ( element.prop( "type" ) === "checkbox" ) {
    //             error.insertAfter( element.parent( "label" ) );
    //         } else {
    //             error.insertAfter( element );
    //         }
    //     },
    //     highlight: function ( element, errorClass, validClass ) {
    //         $( element ).parents( ".form-group" ).addClass( "has-error" ).removeClass( "has-success" );
    //     },
    //     unhighlight: function (element, errorClass, validClass) {
    //         $( element ).parents( ".form-group" ).addClass( "has-success" ).removeClass( "has-error" );
    //     }
    // });
});