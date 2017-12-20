alert("index.js");
var regresult = true;
var logresult = true;
var IS_USER_REGISTERED_CHECKED = false;
var IS_USER_REGISTERED = false;

function getXMLHTTP() { 
		var xmlhttp=false;	
		try{
			xmlhttp=new XMLHttpRequest();
		}
		catch(e)	{		
			try{			
				xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e){
				try{
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch(e1){
					xmlhttp=false;
				}
			}
		}
		 	
		return xmlhttp;
	}
	
function checkuser(){
var form = document.forms["signin"];
if((form.username.value.length <1)||
    (form.password.value.length<1))
	{
	  document.getElementById("errordiv").innerHTML="*Field Is Empty";
	}
	else
	{
	
		var x = getXMLHTTP();
		usr=form.username.value;
		pwd=form.password.value;
		var url = "signin.php?usr="+usr+"&pwd="+pwd;
		x.open("GET",url,true);
		x.onreadystatechange=function()
		{
		if(x.readyState == 4 && x.status == 200)
			{
			    var r = x.responseText;
			  if(r.indexOf("+ERR") != 0)
			   {
			     	form.submit();					
			    }
				else
				{
				    //document.getElementById("errordiv").style.display="none";
				    document.getElementById("errordiv").innerHTML="*username/Password is Incorrect";
				  
				}
			}
			
		};
		x.send(null);
	}	
}

var i=1;
var j=0;
var play_time;

function slides(){
   var maxlen=5;
   var minlen=5;
   if(i==maxlen)
   i=1;
   if(j==minlen)
   j=i-1;
   
	$("."+i).fadeIn();
	$("."+j).fadeOut();
	i++;
	j++;
	play_time = setTimeout('slides()',2500);
	//alert("play_time-"play_time);
	
}

function play(){
	if(play_time==null){
		play_time = setTimeout('slides()',1000);
	}

}

//document.getElementById('password').autocomplete = 'off';
//document.getElementById('regpassword').autocomplete = 'off';
function validationcheck(element, message) {
    if (element.val().length < 1) {
        element.prev('.errorspan').html(message).fadeIn('slow');
//        element.css('background-color', '#E5BDB2 ');
        element.css('border', '1px solid skyblue ');
        element.css('color', '#111');
        return false;
    } else {
        element.prev('.errorspan').html('').fadeOut('fast');
        element.css('background-color', '#fff');
        element.css('border-color', '#C0C0C0 #D9D9D9 #D9D9D9 ');
        element.css('color', '#222222');
        return true;
    }
}

function passwordstrength(element) {

    if (element.val().length < 5) {
        var rem = 5 - element.val().length;
        if (rem < 5) {
            element.prev('.errorspan').html(rem + ' character remaining').fadeIn('slow');
//            element.css('background-color', '#E5BDB2 ');
            element.css('border', '1px solid skyblue ');
            element.css('color', '#111');
        } else {
            element.prev('.errorspan').html('mimimum 5 character').fadeIn('slow');
//            element.css('background-color', '#E5BDB2 ');
            element.css('border', '1px solid skyblue ');
            element.css('color', '#111');
        }
        return false;
    } else if (element.val().length > 5) {
        element.prev('.errorspan').html('good').fadeOut('fast');
        element.css('background-color', '#fff');
        element.css('border-color', '#C0C0C0 #D9D9D9 #D9D9D9 ');
        element.css('color', '#222222');
        return true;
    }
}

function regcheckonfocusout(element, message, result, password) {
element.focusout(function() {
    if (!validationcheck(element, message)) {
        result = false;
    }
    if (password) {
        if (!passwordstrength(element, message)) {
            result = false;
        }
    }
});
return result;
}
function regcheckonkeyup(element, message, result, password) {
element.keyup(function() {
    if (!validationcheck(element, message)) {
        result = false;
    }
    if (password) {
        if (!passwordstrength(element, message)) {
            result = false;
        }
    }

});
        return result;
}
function isUserRegistered(email){
    email.prev('.errorspan').fadeIn().html('');
    IS_USER_REGISTERED = false;
    $.ajax({
            type: 'POST',
            url: 'isuserregistered', 
            async:false,
            data: {
                email: email.val()
            },
           // dataType: 'html',
            success: function(isregistered) {
                IS_USER_REGISTERED_CHECKED = true;                       
                if (isregistered) {   
                     IS_USER_REGISTERED = true;
                    email.prev('.errorspan').fadeIn().css('color', 'red').html('already exist');
                }
                IS_USER_REGISTERED = false;
            }
        });
       
}
function submit() {
    var form = document.forms["signin"];
    if ((form.username.value.length < 1) ||
            (form.password.value.length < 1))
    {
        document.getElementById("emailerrordiv").innerHTML = "*Field Is Empty";
    }
    else
    {
        var x = getXMLHTTP();
        usr = form.username.value;
        pwd = form.password.value;
        var parameter = "usr=" + usr + "&pwd=" + pwd;
        var url = "/signin.php";
        x.open("POST", url, true);
        x.onreadystatechange = function()
        {
            if (x.readyState == 4 && x.status == 200)
            {
                var r = x.responseText;
                if (r.indexOf("+ERR") != 0)
                {
                    form.submit();
                }
                else
                {
//document.getElementById("errordiv").style.display="none";
                    document.getElementById("errordiv").innerHTML = "*username/Password is Incorrect";
                }
            }
        };
        x.send(parameter);
    }
}
function GetURLParameter()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
$(document).ready(function() {
    $('#signInButton').click(function() {
        $(this).attr('href', 'https://accounts.google.com/o/oauth2/auth?scope=' +
                'https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fplus.login&' +
                'state=generate_a_unique_state_value&' +
                'redirect_uri=http://app.com/&' +
                'response_type=code&' +
                'client_id=<?php echo $this->CLIENT_ID ?>&' +
                'access_type=offline');
        return true; // Continue with the new href.
    });
});
 

    ///onlogin
//    onfocusout($('#Sign_Up_Email_TextBox'), 'email is empty!', logresult);
//    onfocusout($('#password'), 'password is empty!', logresult);

    
    $('#lgnpcbox').on('click','#lgnpcbo span #actvtprof', function() {
        logresult = true;
        if (!validationcheck($('#Sign_Up_Email_TextBox'), '')) {
            logresult = false;
        }
        if (!validationcheck($('#password'), '')) {
            logresult = false;
        }
        if (logresult) {
            $.ajax({
                type: 'POST',
                dataType:'Json',
                async:true,
                url: 'auth/identify',
                data: {
                    email: $('input[name="email"]').val(),
                    password:$('input[name="password"]').val(),
                },
                success: function(data) {        console.log(data);                
                    var code = data.code;                       
//                    var message = data.message;                       
                    if(code > 0){   
                        $("#fpwddv").remove();
                        if (code === 3) {
                           $("#lgnpcbox").submit();
                        }
                        if (code === 2) {
                            $(".rloginbx").append('<div id =\'fpwddv\' class=\'fpwddv\'><div class=\'fpwlbl\'><b>Forgot your password ? </b></div><form id=\'sendmepassword\' action=\'sendmepassword\'><div class="mainerrordiv "><input class=\'lntxtbox txtbox\' name=\'email\' type = \'text\'value=' + response.email + ' placeholder =\'email or username\'><input type=\'submit\' class=\'btn btn-sbmt actvtprof\' value=\'send me Passowrd\' /></div></form><div>');
                            return;
                        }
                        if (code === 1) {
                            $(".rloginbx").append('<div id =\'fpwddv\' class=\'fpwddv\'>email is not exist. please <a href=\'#registrationForm\' class =\'gottoregistrationForm\'>Join Us</a></div>');
                            return;
                        }

                        if (code === 4) {
                            $(".rloginbx").append('<div id =\'fpwddv\' class=\'fpwddv\'><span style=\'color\' = \'#eee\'><span><br/>Already reset your password. Please check your mail.<br/><br/><b>Still not get your password?</b> <form id=\'sendmepassword\' action=\'sendmepassword\'><div class="mainerrordiv "><input class=\'lntxtbox txtbox\' name=\'email\' type = \'text\'value=' + response.email + ' placeholder =\'email or username\'><input type=\'submit\' class=\'btn btn-sbmt actvtprof\' value=\'send me Passoword again!\' /></div></form></div>');
                        }
                    }
                    // alert(data.form); // [Object object]
//                $("#wizardContainer").html(data.form); //empty, no form content
                },
                    submitHandler: function() { alert("Submitted!") },
                error: function() {
                    alert(" login 2 zxczx");
                }
            });
        }else{
            alert("Please fill the form.");
        }
        return false;
    });
    var response = GetURLParameter();
    $("#fpwddv").remove();
//    if(response.sessionuuid === '<?php echo md5('sessionuid') ?>'){       
//        if (response.status === '2') {
//            $(".rloginbx").append('<div id =\'fpwddv\' class=\'fpwddv\'><div class=\'fpwlbl\'><b>Forgot your password ? </b></div><form id=\'sendmepassword\' action=\'sendmepassword\'><div class="mainerrordiv "><input class=\'lntxtbox txtbox\' name=\'email\' type = \'text\'value=' + response.email + ' placeholder =\'email or username\'><input type=\'submit\' class=\'btn btn-sbmt actvtprof\' value=\'send me Passowrd\' /></div></form><div>');
//            return;
//        }
//        if (response.status === '3') {
//            $(".rloginbx").append('<div id =\'fpwddv\' class=\'fpwddv\'>email is not exist. please <a href=\'#registrationForm\' class =\'gottoregistrationForm\'>Join Us</a></div>');
//            return;
//        }
//
//        if (response.status === '4') {
//            $(".rloginbx").append('<div id =\'fpwddv\' class=\'fpwddv\'><span style=\'color\' = \'#eee\'><span><br/>Already reset your password. Please check your mail.<br/><br/><b>Still not get your password?</b> <form id=\'sendmepassword\' action=\'sendmepassword\'><div class="mainerrordiv "><input class=\'lntxtbox txtbox\' name=\'email\' type = \'text\'value=' + response.email + ' placeholder =\'email or username\'><input type=\'submit\' class=\'btn btn-sbmt actvtprof\' value=\'send me Passoword again!\' /></div></form></div>');
//        }
//    }else{
//        alert("Error in login.phtml line number 222");
//    }
                    
    $('#rloginbx').on('submit', '#fpwddv #sendmepassword', function() {
        var email = $('#sendmepassword input[name=\'email\']').val();
        resetpassword(email);
        return false;
    });
    $('#rloginbx').on('click', '#fpwddv #resetagain', function() {
        var email = $('input[name=\'resetemail\']').val();
        resetpassword(email);
        return false;
    });
    function resetpassword(email) {
        $.ajax({
            type: 'POST',
            url: 'index/sendmepassword/',
            data: {email: email},
            dataType: 'html',
            success: function(result) {
                var data = $.parseJSON(result);
                if (data.status === '1') {
                    $(".fpwddv").html('email is sent. Please check your email id');
                }
                if (data.status === '2') {
                    $(".fpwddv").html('Password is reset and again sent to your email. Please check your email id');
                }
                else {
                    $(".fpwddv").html('email is not send due to internal error. please send again');
                }
            }
        });
        return false;
    }
    $('.rloginbx').on('click', '.gottoregistrationForm', function() {
        $('#llgnpcbo input').css('border', '1px solid blue');
    });
   
   //on login
    regcheckonfocusout($('#Sign_Up_Email_TextBox'), '', logresult);
    regcheckonfocusout($('#password'), '', logresult);
    regcheckonkeyup($('#Sign_Up_Email_TextBox'), '', logresult);
    regcheckonkeyup($('#password'), '', logresult);
    

	//on registration
    regcheckonfocusout($('#fname'), '*required', regresult);
    regcheckonfocusout($('#lname'), '*required', regresult);
    regcheckonfocusout($('#regpassword'), '*required', regresult, true);
    
    // on key up
    regcheckonkeyup($('#fname'), '*required', regresult);
    regcheckonkeyup($('#lname'), '*required', regresult);
    regcheckonkeyup($('#regpassword'), '*required', regresult, true);

//    $('#regemail').focusout(function() {
//        var email = $(this);
//        regresult = true;
//
//        if (!validationcheck(email, '*required')) {
//            regresult = false;
//        }
//
//        if (regresult) {
//            isUserRegistered(email);
//        }
//    });
    $('#registrationForm').on('submit', function() {
        regresult = true;
        if (!validationcheck($('#fname'), '*required')) {
            regresult = false;
        }
        if (!validationcheck($('#lname'), '*required')) {
            regresult = false;
        }
        if (!validationcheck($('#regemail'), '*required')) {
            regresult = false;
        }
        if (!validationcheck($("#regpassword"), '*required')) {
            regresult = false;
        }
        var email = $('#regemail');  
        
        //email.prev('.errorspan').fadeIn().html('');
       
        
        //if(!IS_USER_REGISTERED_CHECKED){          
          isUserRegistered(email);
       // }
     

        console.log($('#regemail').val()+": "+IS_USER_REGISTERED +" | " + regresult);
      
        if(IS_USER_REGISTERED){
            email.prev('.errorspan').fadeIn().css('color', 'red').html('already exist');
        }else if (regresult &&  !IS_USER_REGISTERED) {
            $.ajax({
                type: 'POST',
                url: 'index/registration',
                async:'true',
                data: {
                    fname: $('#fname').val(),
                    lname: $('#lname').val(),
                    email: $('#regemail').val(),
                    password: $('#regpassword').val()
                },
                dataType: 'html',
                success: function(data) {
                    console.log(data);
                    if (data) {
                      location.reload();
                    }else{
                    	alert(data);
                    }
                    //                        alert(data.form); // [Object object]
//                    $("#wizardContainer").html(data.form); //empty, no form content
                }
            });
        }
        return false;
    });
    //facebook login
    $('#fbLoginButton').click(function(event) {

        var perms = 'email,publish_stream,read_friendlists';
        //var redirection = '<?php // echo Router::url(array('controller' => 'users', 'action' => 'loginvia', 'facebook'), true);                                                                           ?>';
        FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                // the user is logged in and has authenticated your
                // app, and response.authResponse supplies
                // the user's ID, a valid access token, a signed
                // request, and the time the access token
                // and signed request each expire
                var uid = response.authResponse.userID;
                var accessToken = response.authResponse.accessToken;
                // Hide the login button
                alert('already logged in');
            } else if (response.status === 'not_authorized') {
                // the user is logged in to Facebook,
                // but has not authenticated your app
            } else {
                // the user isn't logged in to Facebook.
                FB.login(function(response) {
                    if (response.authResponse) {
                        //  window.location.reload();

                        return false;
                    } else {
                        // user could not log in
                        alert('User cancelled login or did not fully authorize.');
                    }
                }, {scope: perms});
            }
        });
        function facebookajaxlogin(redirection) {
            $.ajax({
                url: redirection,
                type: 'POST',
                success: function(data) {

                    var responce = $.parseJSON(data);
                    $('.Schudle-loaderimage').hide();
                    if (responce.status === 'success') {
                        registermebuttonsflag = false;
                        if (responce.url) {
                            window.location = responce.url;
                        }
                    } else if (responce.status === 'error') {
                        registermebuttonsflag = false;
                        $('#reg-error-wrapper').html('<ul style=\"display: inline;\" class=\"popup-error-msg\"><li>' + responce.msg + '</li></ul>');
                    }
                    return false;
                }
            });
        }

    });
