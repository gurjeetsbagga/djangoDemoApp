function preventSubmit(event) {
    if (event.keyCode == 13) {
        log("caught ya!");
        event.preventDefault();
        //event.stopPropagation();
        return false;
    }
}

function getYouTubeInfo(VIDEO_ID) {
    $.getJSON("https://www.googleapis.com/youtube/v3/videos", {
        key: "AIzaSyBHgNbVq9Jvf_qTZT6xYw1_sbA2SYuzOtY",
        part: "snippet,statistics",
        id: VIDEO_ID
    }, function (data) {

        if (data.items.length === 0) {
            $("<p style='color: #F00;'>Video not found.</p>").appendTo("#video-data-1");
            return;
        }
        return data.items[0].snippet.title;
        //					$("<img>", {
        //						src: data.items[0].snippet.thumbnails.medium.url,
        //						width: data.items[0].snippet.thumbnails.medium.width,
        //						height: data.items[0].snippet.thumbnails.medium.height
        //					}).appendTo("#video-data-1");
        //					$("<h1></h1>").text(data.items[0].snippet.title).appendTo("#video-data-1");
        //					$("<p></p>").text(data.items[0].snippet.description).appendTo("#video-data-1");
        //					$("<li></li>").text("Published at: " + data.items[0].snippet.publishedAt).appendTo("#video-data-2");
        //					$("<li></li>").text("View count: " + data.items[0].statistics.viewCount).appendTo("#video-data-2");
        //					$("<li></li>").text("Favorite count: " + data.items[0].statistics.favoriteCount).appendTo("#video-data-2");
        //					$("<li></li>").text("Like count: " + data.items[0].statistics.likeCount).appendTo("#video-data-2");
        //					$("<li></li>").text("Dislike count: " + data.items[0].statistics.dislikeCount).appendTo("#video-data-2");
    }).fail(function (jqXHR, textStatus, errorThrown) {
        $("<p style='color: #F00;'></p>").text(jqXHR.responseText || errorThrown).appendTo("#video-data-1");
    });
}
function getstatuspopupbox() {
    $("#hcontenttldvpp").fadeIn('slow');
    var obj = "<div id='currentststsppdv' class='currentststsppdv'><form id='currentststsppdvfrm'><textarea id='currentststsppdvdv' class='currentststsppdvdv' placeholder='write your current status' contenteditable='true' ></textarea><input id='currentststsppdvdvinp' type='hidden' value=''/></form></div>";

    $("#hcontenttldvpp").html(obj);
    $(document).unbind('click').bind("click", outsideTrigger);
}
function fileuploadtrigger() {
    $('.ststsppdvimg').addClass('ststsppdvimgupbtnhvr');
    var el = $(this);
    var file = this.files[0];
    name = file.name;
    size = file.size;
    type = file.type;
    if (file.name.length < 1) {
        warning('Image not selected');
    } else if (file.size > 50000000) {
        warning("File is to big");
    } else if (file.type != 'image/png'
            && file.type != 'image/jpg'
            && !file.type != 'image/gif'
            && file.type != 'image/jpeg') {
        warning("File doesnt match png, jpg or gif");
    } else {
        $(".ststsppdvimg").append("<img class ='ststsppdvimgbdyloadingimg' src='/images/loading.gif' />");
        var formData = new FormData($('#crntlyim')[0]);
        $.ajax({
            type: "POST",
            url: "/user/getuploadedimagepreview/",
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                $(".ststsppdvimg").find(".ststsppdvimgbdyloadingimg").remove();
                var response = $.parseJSON(data)[0];
                CURRENTSTATUSIMAGE.push(response.smallurl);
                var classa = "imga_" + CURRENTSTATUSIMAGE.length;
                var classb = "imgb_" + CURRENTSTATUSIMAGE.length;
                var i = CURRENTSTATUSIMAGE.length;
                i--;
                $(".imga_" + i + ",.currentimage_active").animate(
                        {'margin-left': '-' + 372, }, 2000, function () {
                    $(this).fadeOut();
                });
                $("#ststsppdvimgbdya").fadeIn();
                $(".currentimage_active").removeClass("currentimage_active");
                $("#ststsppdvimgbdya > ul").append("<li id='" + classa + "' class='" + classb + "' style= \"background:url('/" + response.smallurl + "') no-repeat scroll center center rgba(255, 255, 255, 0.1)\"></li>");
                $("#ststsppdvimgbdy > ul").append("<li id='" + classb + "' class='" + classa + " currentimage_active' style= \" margin-left:0;background:url('/" + response.url + "') no-repeat scroll center center rgba(0, 0, 0, 0)\"></li>");
            },
            error: function () {
                alert('error main.phtml');
            }
        });
        return false;
    }
}
function shiftimage() {
    var currentsetimage = $(this).attr('id');
    var currentimage = $(this).attr('class');
    $('.currentimage_active').fadeOut().css({
        marginLeft: '-372'
    }).addClass('currentimage_deactive').removeClass('currentimage_active');
    $("." + currentsetimage).fadeIn().css({
        marginLeft: '0'
    }).removeClass('currentimage_deactive').addClass('currentimage_active');
}
function updatecurrentstatus() {
    var val = $(this).val().toLowerCase();
    if (val.length > 0) {

        //$('#crntlyimtdvtabwth').html('&nbsp--with&nbsp');
        count = jQuery.inArray(val, DOINGWITH);
        console.log("count " + count);
        if (count > -1) {
            warning(val + "is already in list");
            return false;
        }
        DOINGWITH.push(val);
        console.log(DOINGWITH);
        var el = "<span class='crntlyimtdvtbbspnspn'><a href=''>" + val + "</a><span class='crntlyimtdvtbbspnb'>x</span><input type='hidden' value='" + val + "' /></span>";
        //  var el = "<div class='autofrndnamedivldivlbl autofrndnenamedivldivlbl'><div class='autofrndnenamedivldivlblin'><img src='images/user.gif'/><span class='namelbl'>" + val + "</span><span class='autofrndnenamedivldivlblincls autofrndnamedivldivlblppspnurmv'>x</span></div></div>";
        $('.crntlyimtdvtabspna').append(el);

        $(this).val('');
    }
}
function addindedicationlist(e) {
    var code = e.keyCode || e.which;
    var val = $(this).val().toLowerCase();
    if (code === 13 && val.length > 0) {

        //$('#crntlyimtdvtabwth').html('&nbsp--with&nbsp');
        count = jQuery.inArray(val, DOINGWITH);
        console.log("count " + count);
        if (count > -1) {
            warning(val + "is already in list");
            return false;
        }
        DOINGWITH.push(val);
        console.log(DOINGWITH);
        var el = "<span class='crntlyimtdvtbbspnspn'><a href=''>" + val + "</a><span class='crntlyimtdvtbbspnb'>x</span><input type='hidden' value='" + val + "' /></span>";
        //  var el = "<div class='autofrndnamedivldivlbl autofrndnenamedivldivlbl'><div class='autofrndnenamedivldivlblin'><img src='images/user.gif'/><span class='namelbl'>" + val + "</span><span class='autofrndnenamedivldivlblincls autofrndnamedivldivlblppspnurmv'>x</span></div></div>";
        $('.crntlyimtdvtabspna').append(el);

        $(this).val('');
    }
}
function addpeoplecurrentdoing(e) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    length = false;
    drew = false;
    $("#crntlytag").empty().removeClass('crntlytagul');
    $("#crntlyimtdvtinp").val($(this).val());
    if ($("#crntlyimtdvtinp").val().length > 0) {
        length = true;
    }
    if ($(this).val().length < 1) {
        $(".befspnlbl").html('');
        $('.crntlyimtdvtdv').attr('placeholder', 'where are you ?');
        $('#hcontenttrdvpp').addClass('hcontenttrdvppact');
        $('#crntlyimtdvbinpa').attr('placeholder', 'with whom you are ?');
        $('#crntlyimtdvbinpb').attr('placeholder', 'How you feel now?');
        return false;
    }

    //	currentstatus($(this), length);
    if (keycode === 13) {
        $(this).blur();
        $(".crntlyimtdvbawth").css({
            "background-color": "skyblue"
        });
        $(this).parents("#ststsppdv").find("#crntlyimtdvbinpa").focus();
    }
}
function checkinbox() {

}
function changelookofplaceonclick() {
    if (($(this).val().length) > 0) {
        $(this).css({
            "color": "#111",
            "border-bottom-color": "#ccc",
            "border-bottom-width": "1px",
            "border-bottom-style": "solid",
            "text-align": "left",
            "text-transform": "capitalize"
        });
    } else {
        $(this).css({
            "text-align": "center"
        });
    }
}
function changelookofplaceonfocus() {
    if ($(this).val().length > 0) {
        $(this).css({
            "color": "grey",
            "border-bottom-color": "#eee",
            "border-bottom-width": "1px",
            "border-bottom-style": "solid",
            "text-align": "left",
            "text-transform": "capitalize"
        });
    } else {
        $(this).css({
            "text-align": "center"
        });
    }
}
function submittingcurrentdoing(event) {
    var code = event.keyCode || event.which;
    //	var doing_subject = $("#bef").find(".befspnlbl").html();
    var doing_body = $(".crntlyimtdvtdv").val();
    console.log("code " + code);
    if (code == 27) {
        return false;
    }
    $.ajax({
        type: 'POST',
        url: 'user/update',
        data: {
            type: "updatelocation",
            //			doing : doing_subject + ' ' + doing_body,
            doing: doing_body,
            currentimage: CURRENTSTATUSIMAGE,
            doingwith: DOINGWITH,
        },
        success: function (data) {
            var result = $.parseJSON(data);
            if (result[0].photos.length > 0) {
                $(".hcontenttrdv > a").attr('href', result[0].photos);
                $(".hcontenttrdv >a > img").attr('src', result[0].photos);
            }
            var elwith = "";
            if (result[0].with.length > 0) {
                elwith = " --with " + result[0].with;
            }

            $(".hcontenttrdv > .hcontenttrdvspnb").html("<h2>" + result[0].doing + " " + elwith + "</h2>");
            $(".hcontenttrdv .hcontenttrsttm").html("just now");
            $("#hcontenttrdvpp").html('');
            DOINGWITH = [];
        },
        error: function () {
        },
    });
    return false;
}
getTimedifference();
function getTimedifference() {
    var timeArray = Array();
    $("document .timestamp").each(function () {
        var elid = $(this).attr('id');
        timeArray[elid] = $(this).data("utime");
    });
    console.log(timeArray);
//    $.ajax({
//        url:'/',
//        date:{
//            time1:
//        },
//        type:'POST',
//        success:function(){
//            
//        }
//    });
    return false;
}
function getcurrentdoingbox() {
    getlocation();
    $("#hcontenttr bndvpp").fadeIn('slow');
    $("#hcontenttrdvpp").html(obj)
}
function removestatusdoingbox() {
    $(this).parent().remove()
}
function triggeruploadimageondoing() {
    $('.ststsppdvimgupbtnrg').trigger('click');
}
function getlocation() {
    google.maps.event.addDomListener(window, 'load', initialize);
}
/******************************************************************/
//Google MAP BOX
function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(-33.8688, 151.2195),
        zoom: 13
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

    var input = /** @type {HTMLInputElement} */(
            document.getElementById('pac-input'));

    var types = document.getElementById('type-selector');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(types);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    google.maps.event.addListener(autocomplete, 'place_changed', function () {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
        }
        marker.setIcon(/** @type {google.maps.Icon} */({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
    });

    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
    function setupClickListener(id, types) {
        var radioButton = document.getElementById(id);
        google.maps.event.addDomListener(radioButton, 'click', function () {
            autocomplete.setTypes(types);
        });
    }

    setupClickListener('changetype-all', []);
    setupClickListener('changetype-address', ['address']);
    setupClickListener('changetype-establishment', ['establishment']);
    setupClickListener('changetype-geocode', ['geocode']);
}

/******************************************************************/
function currentstatus(el, length) {
    var query = el.val();
    if (length && $("#hcontenttrdvpp").hasClass('hcontenttrdvppact')) {

        var results = $.grep(currently, function (item) {
            return item.search(RegExp(query, "i")) != -1;
        });
        // Add results
        // to cache
        // cache[query] = results;
        // }
        if (results.length > 0) {
            // First search
            if (drew == false) {
                // Create list for
                // results
                $("#crntlyimtdvtdv").after('<ul id="crntlytag"></ul>');
                $('#crntlytag').addClass('crntlytagul');
                // Prevent
                // redrawing/binding
                // of list
                drew = true;
                console.log(results);
                // Bind click
                // event to list
                // elements in
                // results

                $("#crntlytag")
                        .on(
                                "click",
                                "li",
                                function () {
                                    $("#befspnlbl").html('');
                                    el.val('');
                                    $prevtext = $(this).text() === 'travellling' ? 'where you are '
                                            : 'what you are ';
                                    $('#crntlyimtdvtdv').attr('placeholder',
                                            $prevtext + ' ' + $(this).text() + '?');
                                    $('#crntlyimtdvbinpa')
                                            .attr(
                                                    'placeholder',
                                                    'with whom you '
                                                    + $(this).text() + '?');
                                    $('#crntlyimtdvbinpb').attr(
                                            'placeholder',
                                            'how are you feel during '
                                            + $(this).text() + '?');
                                    $('#hcontenttrdvpp').removeClass(
                                            'hcontenttrdvppact');
                                    $('.crntlyimtdvta').find('.befspnlbl').html(
                                            $(this).text() + "&nbsp");
                                    $("#crntlyimtdvtdv").val('');
                                    $("#crntlytag").empty().removeClass(
                                            'crntlytagul');
                                    $("#crntlyimtdvtinp").val('');
                                    statusverb = 2;
                                });
            }
            // Clear old results
            else {
                $("#crntlytag").empty().removeClass('crntlytagul');
            }
            // Add results to the
            // list
            $('#crntlytag').addClass('crntlytagul');
            for (term in results) {
                $("#crntlytag").append("<li>" + results[term] + "</li>");
            }
        } else {
            // $('#crntlytag').addClass('crntlytagul');
            // for (term in currently) {
            // $("#crntlytag").append("<li>" + results[term] + "</li>");
            // }
            $("#crntlytag").empty().removeClass('crntlytagul');
        }
    }
    // Handle
    // backspace/delete so
    // results don't remain
    // with less than 3
    // characters
    else if (drew) {
        $("#crntlytag").empty().removeClass('crntlytagul');
    }
}
function outsideTrigger(event) {
    var t = $(event.target);
    if (!(t.is("#currentststsppdv") || t.parents("#currentststsppdv").length > 0) && (!t.is(".mstxth "))) {
        onTriggerUpdateStatus();
    }
}
function onTriggerUpdateStatus() {
    if (($("#hcontenttldvpp").html().length > 0) && ($(document).find("#currentststsppdvdvinp").val().length > 0)) {
        var status = $(document).find("#currentststsppdvdvinp").val();
        $.ajax({
            type: 'POST',
            url: 'user/update',
            data: {
                status: status,
                type: 'updatestatus'
            },
            success: function (data) {
                $(".mcrntsttsbxtx  span").html(status);
                $("#hcontenttldvpp").html('');
            },
            error: function () {
            },
        });
        return false;
    } else {
        $("#currentststsppdv").remove();
    }
}
;


function confirmresult(element) {
    if (CONFIRM) {
        var removeItem = element.next('input').val();
        element.parent('.crntlyimtdvtbbspnspn').remove();
        console.log(removeItem);
        DOINGWITH = $.grep(DOINGWITH, function (n) {
            return n != removeItem;
        });
        console.log(DOINGWITH);
        if (DOINGWITH.length < 1) {
            $("#crntlyimtdvtabwth").html('');
        }
        CONFIRM = false;
    }
}
function confirm(text) {
    var element = "<div id = 'confirmbox' class='confirmbox'><div class='confirmboxh'>" + text + "</div><div class='confirmboxf'><button class='approve' id ='approve'>Remove</button><button class='decline' id='decline'>Cancel</button></div></div>"
    $("#container").append(element);
}
function warning(text) {
    var element = "<div id = 'confirmbox' class='confirmbox'><div class='confirmboxh'>" + text + "</div><div class='confirmboxf'><button class='decline' id='decline'>Close</button></div></div>"
    $("#container").append(element);
}
function pregetfeelingicon() {
    drew = false;
    getfeelingicon
}
/**
 * get my old status
 * 
 */
function getmyoldstatus() {
    var elem = this;
    $.ajax({
        url: 'getmyoldquotes',
        method: 'POST',
        type: 'JSON',
        success: function (data) {
            var li = "";
            console.log(data);
            if (data) {
                $.each(data, function (key, value) {
                    li += "<li data-key=" + key + ">" + value + "</li>";
                }).done(function () {
                    elem.append("<ul>" + li + "</ul>");
                });
            }
        },
        error: function () {

        }
    });
}
function updatemystatusquote() {
    var elem = this;
    $.ajax({
        url: '/updatemystatusquote',
        method: 'POST',
        type: 'JSON',
        success: function (data) {
            var li = "";
            if (data) {
                $.each(data, function (key, value) {
                    li += "<li data-key=" + key + ">" + value + "</li>";
                }).done(function () {
                    elem.append("<ul>" + li + "</ul>");
                });
            }
        },
        error: function () {

        }
    });
}
function initcurrentstatus() {
    if (statusverb == 1) {
        var currently = CURRENTSTATUS;
    } else {
        var currently = ['']
    }

}
function addvideooncurrentstatus(e, element) {
    //  $(this).keyup(function() {
    var element = element.next('#currentststsppdvdvinp');
    var val = element.val();
    element.val("");
    var id = checkUrl(val);
    // alert('r');
    var code = (e.keyCode ? e.keyCode : e.which);
    if (id && ((code === 86 || code === 118) && e.ctrlKey)) //86 = v 118 = V 
    {

        //        var title = getYouTubeInfo(id);
        //        console.log(title);
        //            $(this).next('.deditoblockminbwrtdvin').val(id);
        //console.log(checkUrl(text));                    
        var parentDiv = document.getElementById('currentststsppdvfrm');
        var adiv = document.createElement('div');
        var aspan = document.createElement('span');
        var ainp = document.createElement('input');


        //        ainp.attributes('place holder',);
        var imagesrc = "http://i1.ytimg.com/vi/" + id + "/default.jpg";
        var img = document.createElement('img');
        img.setAttribute('src', imagesrc);
        adiv.className = 'vidpromodv_crsts';
        aspan.className = 'vidpromospn';
        img.className = 'vidpromoimg';
        img.className = 'vidpromoimg_crsts';
        aspan.appendChild(img);
        adiv.appendChild(aspan);
        parentDiv.appendChild(adiv);
    } else {
        ////       console.log('sd');
    }

}
function confirm() {
    CONFIRM = true;
    $(this).parents("#confirmbox").remove();
    confirmresult(CONFIRMRESULT_ARG);
}
function decline() {
    CONFIRM = false;
    $(this).parents("#confirmbox").remove();
}
/**
 * 
 * @param {type} event
 * @param {type} element
 * @returns {undefined}
 */
function addcurrentstatusinput(event, element) {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    var val = element.val();
    element.next('#currentststsppdvdvinp').val(val);

    if ((keycode === 86 || keycode === 118) && event.ctrlKey) //86 = v 118 = V 
    {
        addvideooncurrentstatus(event, element);
    }
    if (keycode === 13) {
        onTriggerUpdateStatus(event);
    }

}
function __init() {
    $('input[type=text]').attr('autocomplete', 'off');
    $('#hcontenttrdvpp').on('keyup', '#ststsppdv', function (e) {
        var code = e.keyCode || e.which;
        if (code == 27) {
            $("#crntlytag").empty().removeClass('crntlytagul');
            $("#crntlyimtdvbinpbtag").empty().removeClass('crntlytagul');
        }
    });
    $(document).click(function (e) {
        var doc = document.getElementById("#ststsppdv");
        if (e.target == doc) {
            var code = e.keyCode || e.which;
            $("#crntlytag").empty().removeClass('crntlytagul');
            $("#crntlyimtdvbinpbtag").empty().removeClass('crntlytagul');
        }
    });
    $(document).on("click", "#ppcnt > div", function () {

        $("#ppcnt").fadeOut("slow").remove();

    });
}
function getfeelingicon() {

    if (drew == false) {
        $("#crntlyimtdvbinpb").after(
                '<ul id="crntlyimtdvbinpbtag" class="crntlytagul"></ul>');
        $('#crntlyimtdvbinpbtag').addClass('crntlytagul');
        drew = true;
        $("#crntlyimtdvbinpbtag").on(
                "click",
                "li",
                function () {
                    $("#crntlyimtdvbinpbtag").empty()
                            .removeClass('crntlytagul');
                    $(".crntlyimtdvbinpb").val('');
                    $('.crntlyimtdvtabspnafl').html(
                            "<span>" + $(this).html() + "</span>");
                });
    } else {
        $("#crntlyimtdvbinpbtag").empty().removeClass('crntlytagul');
    }
    $('#crntlyimtdvbinpbtag').addClass('crntlytagul');
    for (feel in feeling) {
        $("#crntlyimtdvbinpbtag").append(
                "<li>&nbsp&nbsp<img class='crntlyimtdvbinpbtagimg' src='/images/smiley/"
                + feeling[feel] + "' alt ='" + feeling[feel]
                + "'/>&nbsp" + feeling[feel] + "</li>");
    }
    function addmydetail() {
        $.ajax({
            url: '/',
            method: 'POST',
            type: 'JSON',
            data: {
            },
            success: function () {

            },
            error: function () {

            }
        });
    }
}
 