var regresult = true;
var logresult = true;
var IS_USER_REGISTERED_CHECKED = false;
var IS_USER_REGISTERED = false;
var regexEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function validationcheck(element, message) {
	if (element.val().length < 1) {
		element.prev('.errorspan').html(message).fadeIn('slow');
		// element.css('background-color', '#E5BDB2 ');
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
//		var rem = 5 - element.val().length;
//		if (rem < 5) {
//			element.prev('.errorspan').html(rem + ' character remaining')
//					.fadeIn('slow');
//			// element.css('background-color', '#E5BDB2 ');
//			element.css('border', '1px solid skyblue ');
//			element.css('color', '#111');
//		} else {
			element.prev('.errorspan').html('mimimum 5 character').fadeIn(
					'slow');
			// element.css('background-color', '#E5BDB2 ');
			element.css('border', '1px solid skyblue ');
			element.css('color', '#111');
//		}
		result = false;
		return false;
	} 
//	else if (element.val().length > 5) {
//		element.prev('.errorspan').html('good');
//		element.css('background-color', '#fff');
//		element.css('border-color', '#C0C0C0 #D9D9D9 #D9D9D9 ');
//		element.css('color', '#222222');
//		return true;
//	}
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

function regcheckemailonkeyup(element, message, result, password) {
	element.focusout(function() {
		if (!regexEmail.test(element.val())) {
			element.prev('.errorspan').html(message).fadeIn('slow');
			// element.css('background-color', '#E5BDB2 ');
			element.css('border', '1px solid skyblue ');
			element.css('color', '#111');
			result = false;
		} else {

			element.prev('.errorspan').html('').fadeOut('fast');
			element.css('background-color', '#fff');
			element.css('border-color', '#C0C0C0 #D9D9D9 #D9D9D9 ');
			element.css('color', '#222222');
		}
	});
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
function validateRegistrationForm() {
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

	regcheckemailonkeyup($('#regemail'), 'email is not correct',logresult);
	
	// isUserRegistered(email);

}

function resetpassword(email) {
	$.ajax({
		type : 'POST',
		url : '/sendmepassword',
		data : {
			email : email
		},
		dataType : 'html',
		success : function(result) {
                        console.log(result.message);
			var data = $.parseJSON(result);
			$(".fpwddv").html(data.message);
		}
	});
	return false;
}
function isUserRegistered(email) {
	email.prev('.errorspan').fadeIn().html('');
	IS_USER_REGISTERED = false;
	$.ajax({
		type : 'POST',
		url : 'isuserregistered',
		async : false,
		data : {
			email : email.val()
		},
		dataType : 'html',
		success : function(isregistered) {

			IS_USER_REGISTERED_CHECKED = true;
			if (isregistered == true) {
				IS_USER_REGISTERED = true;
				email.prev('.errorspan').fadeIn().css('color', 'green').html(
						'already exist');

			} else {
				IS_USER_REGISTERED = false;
			}
		}
	});

}
function submit() {
	var form = document.forms["signin"];
	if ((form.username.value.length < 1) || (form.password.value.length < 1)) {
		document.getElementById("emailerrordiv").innerHTML = "*Field Is Empty";
	} else {
		var x = getXMLHTTP();
		usr = form.username.value;
		pwd = form.password.value;
		var parameter = "usr=" + usr + "&pwd=" + pwd;
		var url = "/signin.php";
		x.open("POST", url, true);
		x.onreadystatechange = function() {
			if (x.readyState == 4 && x.status == 200) {
				var r = x.responseText;
				if (r.indexOf("+ERR") != 0) {
					form.submit();
				} else {
					// document.getElementById("errordiv").style.display="none";
					document.getElementById("errordiv").innerHTML = "*username/Password is Incorrect";
				}
			}
		};
		x.send(parameter);
	}
}
function GetURLParameter() {
	var vars = [], hash;
	var hashes = window.location.href.slice(
			window.location.href.indexOf('?') + 1).split('&');
	for (var i = 0; i < hashes.length; i++) {
		hash = hashes[i].split('=');
		vars.push(hash[0]);
		vars[hash[0]] = hash[1];
	}
	return vars;
}