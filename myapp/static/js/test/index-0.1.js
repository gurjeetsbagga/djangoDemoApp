 /*<!--<script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>-->
<!--<script src="https://apis.google.com/js/client:plusone.js" type="text/javascript"></script>-->
<!--<script type="text/javascript" src="http://www.google.com/jsapi"></script>-->


<!--<script type="text/javascript">
    (function() {
        var po = document.createElement('script');
        po.type = 'text/javascript';
        po.async = true;
        po.src = 'https://apis.google.com/js/client.js?onload=onLoadCallback';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(po, s);
    })();
    var googleloginstatus = false;
    function onLoadCallback()
    {
        gapi.client.setApiKey('<?php echo $this->APIKEY ?>'); // set your API
																// KEY
        gapi.client.load('plus', 'v1', function() {
        });// Load Google + API
    }
    function getgooglefriends()
    {
        if (!googleloginstatus) {
            $("#getgooglefriends").html('');
            $("#getgooglefriends").css({
                'background-image': "url('/images/loading.gif')",
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }).animate({'padding': '0 10px'}, "slow");
            var myParams = {
                'clientid': '<?php echo $this->CLIENT_ID ?>', // You need to
																// set client id
                'cookiepolicy': 'single_host_origin',
                'callback': 'loginCallback', // callback function
                'approvalprompt': 'force',
                'state': '<?php echo $this->STATE; ?>',
                'include_granted_scopes': true,
                'scope': 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.profile.emails.read'
            };
            gapi.auth.signIn(myParams);
        }
    }
    function loginCallback(result)
    {
        if (result['status']['signed_in'])
        {
            $("#getgooglefriends").html('');
            $("#getgooglefriends").css({
                'background-image': "url('')",
            });
            googleloginstatus = true;
            var request = gapi.client.plus.people.get(
                    {
                        'userId': 'me'
                    });

            request.execute(function(resp)
            {
                var email = '';
                if (resp['emails'])
                {
                    for (i = 0; i < resp['emails'].length; i++)
                    {
                        if (resp['emails'][i]['type'] == 'account')
                        {
                            email = resp['emails'][i]['value'];
                        }
                    }
                }

                var str = "Name:" + resp['displayName'] + "<br>";
                str += "Image:" + resp['image']['url'] + "<br>";
                str += "<img src='" + resp['image']['url'] + "' /><br>";

                str += "URL:" + resp['url'] + "<br>";
                str += "Email:" + email + "<br>";
                document.getElementById("profile").innerHTML = str;
            });

        } else {
            $("#getgooglefriends").html('Log In');

        }

    }

</script>-->

<!--        <script type="text/javascript">
            google.load("gdata", "1.x");
            // Create the contacts service object
            var contactsService = new google.gdata.contacts.ContactsService('GoogleInc-jsguide-1.0');

// The feed URI that is used for retrieving contacts
            var feedUri = 'https://www.google.com/m8/feeds/contacts/default/full';
            var query = new google.gdata.contacts.ContactQuery(feedUri);

// Set the maximum of the result set to be 50
            query.setMaxResults(50);

// callback method to be invoked when getContactFeed() returns data
            var callback = function(result) {

                // An array of contact entries
                var entries = result.feed.entry;

                // Iterate through the array of contact entries
                for (var i = 0; i < entries.length; i++) {
                    var contactEntry = entries[i];

                    var emailAddresses = contactEntry.getEmailAddresses();

                    // Iterate through the array of emails belonging to a single
					// contact entry
                    for (var j = 0; j < emailAddresses.length; j++) {
                        var emailAddress = emailAddresses[j].getAddress();
                        PRINT('email = ' + emailAddress);
                    }
                }
            }

// Error handler
            var handleError = function(error) {
                PRINT(error);
            }

// Submit the request using the contacts service object
            contactsService.getContactFeed(query, callback, handleError);
        </script>-->
<script type="text/javascript">
            var clientId = '<?php echo $this->CLIENT_ID ?>';
            var apiKey = '<?php echo $this->APIKEY ?>';
            var scopes = 'https://www.google.com/m8/feeds';

            $(document).on("click", ".js-google_contacts", function() {
                gapi.client.setApiKey(apiKey);
                window.setTimeout(checkAuth, 3);
            });

            function checkAuth() {
                gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
            }

            var contacts = [];
            function handleAuthResult(authResult) {
                if (authResult && !authResult.error) {
                    $.get("https://www.google.com/m8/feeds/contacts/default/full?alt=json&access_token=" + authResult.access_token + "&max-results=700&v=3.0",
                            function(response) {
                                // console.log(response);
// var numItems = response.feed.entry.length;
// for (var i = 0; i < 2; i++) {
// var emails = response.feed.entry[i]['gd$email'];
// if (emails) {
// for (var j = 0, email; email = emails[j]; j++) {
// //contact['emails'].push(email['address']);
// console.log(email['address']);
// }
// }
// //
// }

                                for (var i = 0, entry; entry = response.feed.entry[i]; i++) {
                                    var contact = {
                                        'name': entry['title']['$t'],
                                        'id': entry['id']['$t'],
                                        'emails': []
                                    };

                                    if (entry['gd$email']) {
                                        var emails = entry['gd$email'];
                                        for (var j = 0, email; email = emails[j]; j++) {
                                            console.log(email['address']);
                                            contact['emails'].push(email['address']);
                                        }
                                    }

                                    if (!contact['name']) {
                                        contact['name'] = contact['emails'][0] || "<Unknown>";
                                    }
                                    contacts.push(contact);
                                }

                            });
                }
                /*
				 * console.log(contacts['name']); console.log(contacts['id']);
				 * console.log(contacts['email']);
				 */
            }
        </script>
<!--        <script>
            window.fbAsyncInit = function() {
                FB.init({
                    appId: '<?php echo $this->fb_AppId ?>',
                    xfbml: true,
                    version: 'v2.0'
                });

            };

            function getfbcontacts() {
                FB.getLoginStatus(function(response) {
                    if (response.status === 'connected') {
                        console.log('Logged in.');

// / FB.login(function() {
                        FB.api('/me/friends/?limit=0', {fields: 'name,id,location,birthday'}, function(response) {
                            console.log(response);
                            if (response && response.error) {
                                alert('friends was published.');
                            } else {
                                alert('friends was not published.');
                            }
                        });
// });

// FB.ui(
// {
// method: 'feed',
// name: 'The Facebook SDK for Javascript',
// caption: 'Bringing Facebook to the desktop and mobile web',
// description: (
// 'A small JavaScript library that allows you to harness ' +
// 'the power of Facebook, bringing the user\'s identity, ' +
// 'social graph and distribution power to your site.'
// ),
// link: 'https://developers.facebook.com/docs/reference/javascript/',
// picture: 'http://www.fbrell.com/public/f8.jpg'
// },
// function(response) {
// if (response && response.post_id) {
// alert('Post was published.');
// } else {
// alert('Post was not published.');
// }
// }
// );
                    }
                    else {
                        // FB.login();
                    }
                });
            }

            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";// production=>
																// "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
        </script>-->

<!--script>

            // This is called with the results from from FB.getLoginStatus().
            function statusChangeCallback(response) {
                console.log('statusChangeCallback');
                console.log(response);
                // The response object is returned with a status field that lets
				// the
                // app know the current login status of the person.
                // Full docs on the response object can be found in the
				// documentation
                // for FB.getLoginStatus().
                if (response.status === 'connected') {
                    // Logged into your app and Facebook.
                    testAPI();

                } else if (response.status === 'not_authorized') {
                    // The person is logged into Facebook, but not your app.
                    document.getElementById('status').innerHTML = 'Please log ' +
                            'into this app.';
                } else {
                    // The person is not logged into Facebook, so we're not sure
					// if
                    // they are logged into this app or not.
                    document.getElementById('status').innerHTML = 'Please log ' +
                            'into Facebook.';
                }
            }

            // This function is called when someone finishes with the Login
            // Button. See the onlogin handler attached to it in the sample
            // code below.
            function checkLoginState() {
                FB.getLoginStatus(function(response) {
                    statusChangeCallback(response);
                });
            }

            window.fbAsyncInit = function() {
                FB.init({
                    appId: '<?php echo $this->fb_AppId ?>',
                    cookie: true, // enable cookies to allow the server to
									// access
                    // the session
                    xfbml: true, // parse social plugins on this page
                    version: 'v2.0' // use version 2.0
                });

                // Now that we've initialized the JavaScript SDK, we call
                // FB.getLoginStatus(). This function gets the state of the
                // person visiting this page and can return one of three states
				// to
                // the callback you provide. They can be:
                //
                // 1. Logged into your app ('connected')
                // 2. Logged into Facebook, but not your app ('not_authorized')
                // 3. Not logged into Facebook and can't tell if they are logged
				// into
                // your app or not.
                //
                // These three cases are handled in the callback function.

// FB.getLoginStatus(function(response) {
// statusChangeCallback(response);
// });

            };


            function getfbcontacts() {
                FB.login(function() {
                    FB.api('/me/friends', 'post', {message: 'Hello, world!'}, function(response) {
                        if (!response || response.error) {
                            alert('Error occured');
                        } else {
                            alert('Post ID: ' + response.id);
                        }
                    });                    
                });
            }
            // Load the SDK asynchronously
            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id))
                    return;
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));

            // Here we run a very simple test of the Graph API after login is
            // successful. See statusChangeCallback() for when this call is
			// made.
            function testAPI() {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Successful login for: ' + response.name);
                    document.getElementById('status').innerHTML =
                            'Thanks for logging in, ' + response.name + '!';
                });
            }
        </script-->

$(function() {
    var height = $(window).height();
    $('.incontent').height(height - 100);


    $(document.body).click(function(event) {
        if ($(event.target).parents().index($('.hdrsearchin')) == -1) {
            if ($('.hdrsearchbtndiv').is(":visible")) {
                $('.hdrsearchbtndiv').hide()
            }
        }
    });

    $(".hdrsearchinp").on('keyup', function() {
        if ($(this).val() == '') {
            $(".hdrsearchbtndiv ul li").remove();
            return false;
        }
        var liel = '';
        $('.hdrsearchbtndiv').css('border-bottom', '1px dashed #eee');
        var searchkey = escape($(this).val());
        $.ajax({
            url: '/user/findme/',
            type: 'Post',
            dataType: 'JSON',
            data: {'searchkey': searchkey, 'limit': 10, 'offset': 0},
            success: function(data) {
                var frndbtnlbl;
                $.each(data, function(i) {
                    switch (data[i].status) {
                        case '1':
                            frndbtnlbl = "<input class='addmebtn' type ='button' value='Add me'/>";
                            break;
                        case '2':
                            frndbtnlbl = "<input class='notaddmebtn' type ='button' value='Waiting' />";
                            break;
                        case '3':
                            frndbtnlbl = "";
                            break;
                        case '4':
                            frndbtnlbl = "<input class='notaddmebtn' type ='button' value='Hate you'/>";
                            break;
                        default:
                            frndbtnlbl = "<input class='addmebtn' type ='button' value='Add me'/>";
                            break;
                    }

                    liel += "<li class='hdrsearchfrndlstli frndlstid" + data[i].email + "'>\n\
                                   <div class='hdrsearchfrndlstlidv'>\n\
                                     <div class='hdrsearchlistdiv'>\n\
                                            <a href='/" + data[i].id + "'><img src='" + data[i].profile_image_link + "' style='width:35px;'/></a>\n\
                                            <div class='hdrsearchfrndlstcntnridv'>\n\
                                                <div class='frndlstcntnridva'><a href='/" + data[i].id + "'>" + data[i].first_name + "</a>\n\
                                                </div>\n\
                                                <div class='frndlstcntnridvb'>\n\
                                                </div>\n\
                                            </div>\n\
                                    </div>\n\
                                    <div class='addmebtndiv'>" + frndbtnlbl + "<input class='addmeusr' type='hidden' value='" + data[i].id+"_"+data[i].email + "' /></div>\n\
                                </div> \n\
                            </li>";

// $(".hdrsearchbtndiv ul").find('.frndlstid' + data[i].email).remove();
                });
// $.each(data, function(i) {
// if (data.first_name(new RegExp(/username/i)) != -1) {
// alert(data.first_name);
// }
// });
                $(".hdrsearchbtndiv").css('display', 'block');
                $(".hdrsearchbtndiv ul").html(liel);
            }
        });
    });
    $("#hdrsearchbtnul").on('click', '.hdrsearchfrndlstli .addmebtndiv .addmebtn', function() {

        var e = $(this);
        if ($(this).next(".addmeusr").val() == '') {
            return false;
        }
        var newfrndid = escape($(this).next(".addmeusr").val());
        $.ajax({
            url: '/friends/addme/',
            type: 'Post',
            data: {'newfrndid': newfrndid},
            success: function(data) {
                e.next(".addmeusr").remove();
                e.val('Request Sending');
                if (data) {
                    e.next(".addmeusr").remove();
                    e.val('Request Sent');
                }
            },
            error: function() {
                // alert('error');
            }
        });

    });

    $("#getgooglefriends").on('click', function() {
        getgooglefriends();
    });
});

function signInCallback(authResult) {
// console.log(authResult['code']);
    if (authResult['code']) {//           
        gapi.client.load('plus', 'v1', loadProfile);  // Trigger request to
														// get the email
														// address.
        $.ajax({
            type: 'POST',
            url: '/user/oauth2callback/',
// contentType: 'application/octet-stream; charset=utf-8',
// processData: false,
            data: {'code': authResult['code']},
            success: function(result) {
                console.log(result);
                if (result['profile'] && result['people']) {
                    $('#results').html('Hello ' + result['profile']['displayName'] + '. You successfully made a server side call to people.get and people.list');
                } else {
                    $('#results').html('Failed to make a server-side call. Check your configuration and console.');
                }
            }
        });
    } else if (authResult['error']) {
        /*
		 * There was an error.Possible error codes: 1. "access_denied" - User
		 * denied access to your app 2. "immediate_failed" - Could not
		 * automatially log in the user
		 */

        console.log('There was an error: ' + authResult['error']);
    }
}
/**
 * Global variables to hold the profile and email data.
 */
var profile, email;

/*
 * Triggered when the user accepts the sign in, cancels, or closes the
 * authorization dialog.
 */

/**
 * Uses the JavaScript API to request the user's profile, which includes their
 * basic information. When the plus.profile.emails.read scope is requested, the
 * response will also include the user's primary email address and any other
 * email addresses that the user made public.
 */
function loadProfile() {
    var request = gapi.client.plus.people.get({
        'userId': 'me',
        'collection': 'visible'
    });
    console.log(request);
    request.execute(loadProfileCallback);
}

/**
 * Callback for the asynchronous request to the people.get method. The profile
 * and email are set to global variables. Triggers the user's basic profile to
 * display when called.
 */
function loadProfileCallback(obj) {
    profile = obj;
    console.log(obj);

    var numItems = obj.items.length;
    for (var i = 0; i < numItems; i++) {
        console.log(obj.items[i].displayName);
    }

    /*
	 * Filter the emails object to find the user's primary account, which might
	 * not always be the first in the array. The filter() method supports IE9+.
	 */

    /*
	 * email = obj['emails'].filter(function(v) { return v.type === 'account'; //
	 * Filter out the primary email })[0].value; // get the email from the
	 * filtered results, should always be defined.
	 */

    displayProfile(profile);
}
/**
 * 
 * @returns {undefined}
 */
function getMyContacts() {
    var contactsFeedUri = 'https://www.google.com/m8/feeds/contacts/default/full';
    var query = new google.gdata.contacts.ContactQuery(contactsFeedUri);

    // Set the maximum of the result set to be 5
    query.setMaxResults(5);

    contactsService.getContactFeed(query, handleContactsFeed, handleError);
}

/**
 * Display the user's basic profile information from the profile object.
 */
function displayProfile(profile) {
    document.getElementById('name').innerHTML = profile['displayName'];
    document.getElementById('pic').innerHTML = '<img src="' + profile['image']['url'] + '" />';
    document.getElementById('email').innerHTML = email;
// toggleElement('profile');
}

/**
 * Utility function to show or hide elements by their IDs.
 */
function toggleElement(id) {
    var el = document.getElementById(id);
    if (el.getAttribute('class') == 'hide') {
        el.setAttribute('class', 'show');
    } else {
        el.setAttribute('class', 'hide');
    }
}
</script>