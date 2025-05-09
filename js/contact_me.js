/*global $*/
// Contact Form Scripts
$(function() {
    $.ajax({//wakeup service
        type: 'GET',
        url: "https://email-webservice.onrender.com/",
        cache: false,
        success: function() {   
        },
        error: function() {
        }
    });


    
    $("#contactForm").submit(function(e){
            e.preventDefault();
            // get values from FORM
            var name = $("input#InputFloatingName").val();
            var email = $("input#InputFloatingEmail").val();
            var phone = $("input#phone").val();
            var message = $("textarea#InputFloatingMessage").val();

            $.ajax({
                type: 'POST',
                url: "https://email-webservice.onrender.com/email/addemail",
                dataType: "JSON",
                data: {
                    "subject": name+" sent you an enquiry via websitescene.co.uk",
                    "name": name,
                    "phone": phone || '00000',
                    "email": email,
                    "message": message,
                    'form_api_token':'e11h1zo3d731'
                },
                cache: false,
                complete: function(){
                   
                },
                success: function() {
                    // Success message
                    $('.form-alert.success').show();
                    
                    //clear all fields
                   $("#contactForm").trigger("reset");
          
                },
                error: function() {
                    // Fail message
                    $('.form-alert.error').show();
              
         
                },
            });

    });

});

