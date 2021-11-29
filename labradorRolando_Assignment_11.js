$("document").ready(function(){

  
    let txt = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()<>?:";~`'

    // defining captcha generating method
    function generateCaptch(txt){
        captcha="";
        for(let i=0;i<11;i++){
            captcha+=txt[Math.floor(Math.random()*txt.length)];
        }
        $("#p").text(captcha);
    }

    generateCaptch(txt);

    // setting interval
    setInterval(function(){ 
        generateCaptch(txt)
      }, 20000);

// validation of input as per the captcha
    $("#btn").click(function(){
        let input = $("#captchainput").val();
        if(input == captcha){
            // alert("Correct captcha");
            // window.location.href = ".../labradorRolando_Assignment_11_registration.html";
            $(location).attr('href', 'https://labradorrolando696.github.io/registration/');
            alert("Correct captcha");
        }
        else{
            alert("Incorrect captcha");
        }
    });

})

// registration page jquery methods
// registration page jquery methods
$(document).ready(function(){
   $("fname_error_message").hide();
   $("sname_error_message").hide();
   $("#email_error_message").hide();
   $("#password_error_message").hide();
   $("#retype_password_error_message").hide();

   let error_fname = false;
   let error_sname = false;
   let error_email = false;
   let error_password = false;
   let error_retype_password = false;


   $("#form_fname").focusout(function(){
       check_fname();
    });
    $("#form_sname").focusout(function() {
       check_sname();
    });
    $("#form_email").focusout(function() {
       check_email();
    });
    $("#form_password").focusout(function() {
       check_password();
    });
    $("#form_retype_password").focusout(function() {
       check_retype_password();
    });

    function check_fname() {
       let pattern = /^[a-zA-Z]*$/;
       let fname = $("#form_fname").val();
       if (pattern.test(fname) && fname !== '') {
          $("#fname_error_message").hide();
          $("#form_fname").css("background-color","#34F458");
       } else {
          $("#fname_error_message").show();
          $("#form_fname").css("background-color","#F90A0A");
          error_fname = true;
       }
    }

    function check_sname() {
       let pattern = /^[a-zA-Z]*$/;
       let sname = $("#form_sname").val()
       if (pattern.test(sname) && sname !== '') {
          $("#sname_error_message").hide();
          $("#form_sname").css("background-color","#34F458");
       } else {
          $("#sname_error_message").text("Should contain only Characters");
          $("#sname_error_message").show();
          $("#form_sname").css("background-color","#F90A0A");
          error_fname = true;
       }
    }

    function check_password() {
       let password_length = $("#form_password").val().length;
       if (password_length < 12) {
          $("#password_error_message").text("Atleast 12 Characters");
          $("#password_error_message").show();
          $("#form_password").css("background-color","#F90A0A");
          error_password = true;
       } else {
          $("#password_error_message").hide();
          $("#form_password").css("background-color","#34F458");
       }
    }

    function check_retype_password() {
       let password = $("#form_password").val();
       let retype_password = $("#form_retype_password").val();
       if (retype_password !==password ) {
          $("#retype_password_error_message").text("Passwords Did not Match");
          $("#retype_password_error_message").show();
          $("#form_retype_password").css("background-color","#F90A0A");
          error_retype_password = true;
       } else {
          $("#retype_password_error_message").hide();
          $("#form_retype_password").css("background-color","#34F458");
       }
    }

    function check_email() {
       let pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
       let email = $("#form_email").val();
       if (pattern.test(email) && email !== '') {
          $("#email_error_message").hide();
          $("#form_email").css("background-color","#34F458");
       } else {
          $("#email_error_message").text("Invalid Email");
          $("#email_error_message").show();
          $("#form_email").css("background-color","#F90A0A");
          error_email = true;
       }
    }

    $("#registration_form").submit(function() {
       error_fname = false;
       error_sname = false;
       error_email = false;
       error_password = false;
       error_retype_password = false;

       check_fname();
       check_sname();
       check_email();
       check_password();
       check_retype_password();

       if (error_fname === false && error_sname === false && error_email === false && error_password === false && error_retype_password === false) {
        $(".message").text("Registration Successful");
        $(".message").css("background-color","#F90A0A");
          return true;
       } else {
          $(".message").text("Please Fill the form Correctly")
          $(".message").css("background-color","#F90A0A");
          return false;
       }
   });
});