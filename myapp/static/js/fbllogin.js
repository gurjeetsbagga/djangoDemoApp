/**
		 * facebook login
		 */
        $('#fbLoginButton').click(function(event) {

            var perms = 'email,publish_stream,read_friendlists';
            var redirection = '';
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
                            // window.location.reload();

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