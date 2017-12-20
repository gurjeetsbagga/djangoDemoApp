$(document).ready(function() {
	// document.getElementById('password').autocomplete = 'off';
	// document.getElementById('regpassword').autocomplete =
	// 'off';
        /*
		 * on login
		 */
// onfocusout($('#Sign_Up_Email_TextBox'), 'email is empty!', logresult);
// onfocusout($('#password'), 'password is empty!', logresult);
        
        $('#lgnpcbox').on('click','#lgnpcbo span #actvtprof', function() {
            logresult = true;
            if (!validationcheck($('#Sign_Up_Email_TextBox'), '')) {
                logresult = false;
            }
            if (!validationcheck($('#password'), '')) {
                logresult = false;
            }
            console.log("login jslogresult: "+ logresult);
            if (logresult) {
                $.ajax({
                    type: 'POST',
                    dataType:'json',
                    //async:false,
				//	contentType: "application/json; charset=utf-8",
                    url: '/auth/identify/',
                    data: {
                        email: $('input[name="email"]').val(),
                        password:$('input[name="password"]').val(),
                    },
                    success: function(data) {        
                        var code = data.code;                       
						var message = data.message;
                        console.log("login jslogresult message: "+ message);
                        console.log("login jslogresult: "+ logresult);
                        if(code > 0){   
                            $("#fpwddv").remove();
                            if (code === 3) {
                               $("#lgnpcbox").submit();
                            }
							else if (code === 2) {
                                $(".rloginbx").append('<div id =\'fpwddv\' class=\'fpwddv\'><div class=\'fpwlbl\'><b>Forgot your password ? </b></div><form id=\'sendmepassword\' action=\'sendmepassword\'><div class="mainerrordiv "><input class=\'lntxtbox txtbox\' name=\'email\' type = \'text\'value=' + data.email + ' placeholder =\'email or username\'><input type=\'submit\' class=\'btn btn-sbmt actvtprof\' value=\'send me Passowrd\' /></div></form><div>');
                                return;
                            }
							else if (code === 1 || code === 5) {
                                $(".rloginbx").append('<div id =\'fpwddv\' class=\'fpwddv\'>email is not exist. please <a href=\'#registrationForm\' class =\'gottoregistrationForm\'>Join Us</a></div>');
                                return;
                            }

							else if (code === 4) {
                                $(".rloginbx").append('<div id =\'fpwddv\' class=\'fpwddv\'><span style=\'color\' = \'#eee\'><span><br/>Already reset your password. Please check your mail.<br/><br/><b>Still not get your password?</b> <form id=\'sendmepassword\' action=\'sendmepassword\'><div class="mainerrordiv "><input class=\'lntxtbox txtbox\' name=\'email\' type = \'text\'value=' + data.email + ' placeholder =\'email or username\'><input type=\'submit\' class=\'btn btn-sbmt actvtprof\' value=\'send me Passoword again!\' /></div></form></div>');
                            }else{
								location.reload();
							}
                        }
                        // alert(data.form); // [Object object]
// $("#wizardContainer").html(data.form); //empty, no form content
                    },
                    submitHandler: function() { alert("Submitted!") },
                    error: function(jqXHR, textStatus, errorThrown) {
						console.log(errorThrown);
                        alert("login 3 zxczx");
                    }
                });
            }else{
                alert("Please fill the form.");
            }
            return false;
        });
        
        var response = GetURLParameter();
        $("#fpwddv").remove();
                        
        $(document).on('submit', '#fpwddv #sendmepassword', function() {
            var email = $('#sendmepassword input[name=\'email\']').val();
            if(resetpassword(email)){
                $(document).find("#fpwddv").html("email Sent").fadeOut();
            }
            return false;
        });
        $(document).on('click', '#fpwddv #resetagain', function() {
            var email = $('input[name=\'resetemail\']').val();
            resetpassword(email);
            return false;
        });
        
        
        $('.rloginbx').on('click', '.gottoregistrationForm', function() {
            $('#llgnpcbo form input').css('border', '1px solid blue');
        });
	        /**
			 * on login
			 */
		regcheckonfocusout($('#regemail'), '',logresult);
		regcheckonfocusout($('#password'), '', logresult);
		
		regcheckonkeyup($('#regemail'), '', logresult);
		//regcheckonkeyup($('#password'), '', logresult);
		/**
		 * on registration
		 * 
		 * @returns {Boolean}
		 */
		/** on focusout* */
		regcheckonfocusout($('#fname'), '*required', regresult);
		regcheckonfocusout($('#lname'), '*required', regresult);
		regcheckonfocusout($('#regpassword'), '*required',regresult, true);
	
		regcheckemailonkeyup($('#regemail'), 'email is not correct',logresult);
		/** on key up* */
		regcheckonkeyup($('#fname'), '*required', regresult);
		regcheckonkeyup($('#lname'), '*required', regresult);
		//regcheckonkeyup($('#regpassword'), '*required', regresult,true);
	        
        $('.joinbx').on('submit','#registrationForm', function() {
          validateRegistrationForm();
            if(IS_USER_REGISTERED){
                email.prev('.errorspan').fadeIn().css('color', 'green').html('already exist');
            }else if (regresult &&  !IS_USER_REGISTERED) {
                $.ajax({
                    type: 'POST',
                    url: '/registration',
                    data: {
                        fname: $('#fname').val(),
                        lname: $('#lname').val(),
                        email: $('#regemail').val(),
                        password: $('#regpassword').val()
                    },
                    dataType: 'html',
                    success: function(data) {
             
                        if (data.indexOf("OK") != "-1") {
                            window.location = "/";
                        }else{
                        	
                        	alert("mesage : "+ data.trim());
                        	$('#fname').val("");
                            $('#lname').val("");
                            $('#regemail').val("");
                            $('#regpassword').val("");
                        }
                    }
                });
                
            }
            return false;
        });
    });
   
