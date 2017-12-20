var STATUS_WIDTH = $(".hcontenttrinp").width() + 20;
var STATUS_TEXT = $(".hcontenttrinp").val();
var MY_STATUS = $("#mindexheaderform").find(".hsth").val();
console.log("MY_STATUS +"+MY_STATUS);
var marginleft = 1;
var count = 0;
var feeling = FEELING;
var statusverb = 1;
var cache = {};
var drew = false;
var length;
var DOINGWITH = new Array();
var DOINGWITH_KEY = 0;
var CURRENTSTATUS = ['watching', 'reading', 'listening', 'eating', 'drinking', 'running', 'travelling', 'working', 'missing', 'hanging out', 'dancing', 'enjoying'];
var FEELING = ['cry', 'glad', 'happy', 'nervous', 'ok', 'sad', 'satisfied'];
var CURRENTSTATUSIMAGE = new Array();
var mwithwhom = new Array();
var CONFIRM = false;
var CONFIRMRESULT_ARG = '';
var CONFIRMRESULT_FUN = '';
var obj =
        //	"< $this->partial('user/uploadingdedicationheader.phtml', array('DedicationForm' => $DedicationForm)) ?>";
        "<div id='ststsppdv' class='ststsppdv'>\n\
<span class='clststsppdv'>close</span>\n\
<form id='crntlyim' enctype='multipart/form-data'>\n\
<div class='crntlyimt'>\n\
<div class='crntlyimtdvt'>\n\
<div class= 'tooltip'>eg: watching movie.</div>\n\
<div class='crntlyimtdvta'>\n\
<div class='crntlyimtdvtadv'>\n\
<input autocomplete='off' id='pac-input' class='crntlyimtdvtdv' placeholder='Where are you?' />\n\
<input id='crntlyimtdvtinp' class='crntlyimtdvtinp' type='hidden'  placeholder='What you are doing now: 'value='' />\n\
</div>\n\
<div class='crntlyimtdvtab'>\n\
<span id='crntlyimtdvtabwth'>--with :</span>\n\
<span class='crntlyimtdvtabspna'></span>\n\
<span class='crntlyimtdvtabspnafl'></span>\n\
</div>\n\
<div class='crntlyimtdvb'>\n\
<div class= 'tooltip'>Press enter to add people</div>\n\
<div class='crntlyimtdvba'> <span class='crntlyimtdvbawth'>+</span><input autocomplete='off' type='text' placeholder='with whom you are ?' id='crntlyimtdvbinpa' class='crntlyimtdvbinpa'>\n\
<!--input autocomplete='off' class='ststsppdvimgupbtn btn btn-sbmt' type='button' value='+ upload images'/-->\n\
<input autocomplete='off' name='ststsppdvimgupbtnrg' id='ststsppdvimgupbtnrg' type='file' class='ststsppdvimgupbtnrg' />\n\
<input id ='crntlyimsubmit' type='button'  class='btn btn-sbmt' value='update location'>\n\
<!--span class='crntlyimtdvbafl'>?</span><div class='crntlyimtdvbaflndv'>\n\
<input autocomplete='off' placeholder='How you feel now?' type='text' id='crntlyimtdvbinpb' class='crntlyimtdvbinpb'></div-->\n\
</div>\n\
<div class='ststsppdvimg'>\n\
<div id='ststsppdvimgbdy' class='ststsppdvimgbdy'>\n\
<ul></ul>\n\
</div>\n\
<div class='ststsppdvimgaddv ststsppdvimgupbtn'><span>+ current photos</span></div>\n\
<div class='ststsppdvimgbdya' id='ststsppdvimgbdya'><ul></ul></div>\n\
</div>\n\
</div>\n\
</div>\n\
</div>\n\
</form>\n\
</div>";
// $(".hcontenttr").hover(function() {
// $(".hcontenttrsttm").html('');
// $(".hcontenttrinp").css({ border: '1px solid #D9D9D9'});
// $(this).find('.crntlyimt').css({
// border: '1px solid #D9D9D9',
// }).animate({
// width: '245px',
// height:'45px',
// }, 500);
// $(this).find('.crntlyimt').html("");
//        
// }, function() {
// $(this).find('.hcontenttrinp').val(STATUS_TEXT).css({
// float: 'right',
// border: '0px solid #D9D9D9',
// width: STATUS_WIDTH
// }).animate({
// width: STATUS_WIDTH
// }, 500);
// });
$(document).ready(function () {
    $(".mcrntsttsbx").on('click', '.mcrntsttsbxtx span', getstatuspopupbox);
    $(".hcontenttl").off('keyup', '#currentststsppdvdv').on('keyup', '#currentststsppdvdv', function (e) {
        addcurrentstatusinput(e, $(this))
    });
    $(".hcontenttr").off('click', '.hcontentdocumenttrdv').on('click', '.hcontenttrdv', getcurrentdoingbox);
    $("#hcontenttrdvpp").off('click', ".crntlyimtdvtbbspnb").on('click', ".crntlyimtdvtbbspnb", function () {
        console.log(DOINGWITH);
        CONFIRMRESULT_ARG = $(this);
        CONFIRMRESULT_FUN = 'doingwith';
        confirm("Are you sure to Remove '" + $(this).prev('a').text() + "' from the list ? ");
    });
    $("#hcontenttrdvpp").off('change', ".ststsppdvimgupbtnrg").on('change', ".ststsppdvimgupbtnrg", fileuploadtrigger);
    $("#hcontenttrdvpp").on('click', '#ststsppdvimgbdya > ul > li', shiftimage);
    $("#hcontenttrdvpp").off('click', '.ststsppdvimgupbtn').on('click', '.ststsppdvimgupbtn', triggeruploadimageondoing);
    $(".hcontenttr,.hcontenttl").on('click', '#hcontenttrdvpp .clststsppdv', removestatusdoingbox);
    $("#hcontenttrdvpp").on("focusout", ".crntlyimtdvbinpa", updatecurrentstatus);
    $("#hcontenttrdvpp").on("keyup", ".crntlyimtdvbinpa", addindedicationlist);
    $('#hcontenttrdvpp').on('keyup,click', '#crntlyimtdvbinpb', pregetfeelingicon);
    $(initcurrentstatus);
    $(__init);
    $(checkinbox)
    //document.getElementById('mindexheader').addEventListener("click", getmyoldstatus, false);
    $('#hcontenttrdvpp').on('keyup', '.crntlyimtdvtdv', function (event) {
        addpeoplecurrentdoing(event);
    });
    $('#hcontenttrdvpp').on('click', '.crntlyimtdvtdv', function () {
        drew = false;
        $("#crntlytag").empty().removeClass('crntlytagul');
        $("#crntlyimtdvtinp").val($(this).val());
        $(this).parents(".crntlyimtdvta").find(".ststsppdvimg").fadeIn("slow");
        //currentstatus($(this), true);
    });
    $("#hcontenttrdvpp").on('click', '.crntlyimtdvtdv', changelookofplaceonclick);
    $("#hcontenttrdvpp").on('focusout', '.crntlyimtdvtdv', changelookofplaceonfocus);
    $("#hcontenttrdvpp").off('click', '#crntlyimsubmit').on('click', '#crntlyimsubmit', function (event) {
        submittingcurrentdoing(event)
    });
    $("#mcrntstts").submit(function () {
        return false;
    });
    $(".readmore").off('click').on('click', function () {
        var el = "<div class='shwcmbx' style='display:none;background-color: #fff;border: 1px solid #888;padding: 5px;position: absolute;top: 0;width: 525px;z-index: 9999;'>" + $(this).next(".readrtx").html() + "<span class='clrdmtx'>close</span></div>";
        $(this).parents(".mcrntsttsbxtx").find(".shwcmbx").remove();
        $(this).parents(".mcrntsttsbxtx").append(el);
        $(".shwcmbx").fadeIn("slow");
    });
    $(".mcrntsttsbx").off("click", ".clrdmtx").on("click", ".clrdmtx", function () {
        $(this).parents(".shwcmbx").fadeOut("slow");
    });
    var mindexheaderli = $("#mindexheader").find("li:first-child");//document.getElementById("mindexheader").firstElementChild.children[0].tagName;
    $(mindexheaderli).hover(function () {
//        $(this).find("span")
//                .css({
//                    "background-color": "#fff",
//                    "border-color": "#ccc",
//                    "border-style": "solid",
//                    "border-width": "1px",
//                    "cursor": "text",
//                    "box-shadow": "0px 0px 1px rgba(1,1,1,0.2)",
//                    "-moz-box-shadow": "0px 0px 1px rgba(1,1,1,0.2)",
//                    "-webkit-box-shadow": "0px 0px 1px rgba(1,1,1,0.2)",
//                    "filter: progid": "DXImageTransform.Microsoft.Blur(PixelRadius=1,MakeShadow=true,ShadowOpacity=0.10)",
//                    "-ms-filter": "progid:DXImageTransform.Microsoft.Blur(PixelRadius=1,MakeShadow=true,ShadowOpacity=0.10)",
//                });
//
//    }, function () {
//        $(this).find("span")
//                .css({
//                    "background-color": "",
//                    "border-color": "",
//                    "border-style": "",
//                    "border-width": "",
//                    "cursor": "text",
//                    "box-shadow": "",
//                    "-moz-box-shadow": "",
//                    "-webkit-box-shadow": "",
//                    "filter: progid": "",
//                    "-ms-filter": "",
//                });
    });
    $(mindexheaderli).on("click", function () {
        var descisionbtn = "<div class='desbtn'><span><button type='reset'>clear</button><button type='submit'>Submit</button><span></div>";
        var text = $(".hsth").val();        
        $(this).find(".sth")
                .attr('contentEditable', true)
                .css({
                    "border-color": "#ddd",
                    "line-height": "14px",
                    "text-align": "left",
                    "background-color": "#fff",
                    "overflow-y":"auto",
                })
                .animate({
                    'height': '60px',
                })
                .focus()
                .text();
        if(!$(this).hasClass("added")){
            $(this).addClass('added');
            $(this).find(".sth").append(descisionbtn);
        }
        
    });

    $("#mindexheader").off("keyup").on("keyup",".sth",function () {
        var text = $(this).children("p").text();
        console.log("writing status in input text: "+text);
        $(this).parents("#mindexheader").find(".hsth").val(text);
    });

     $("#mindexheaderform").off("reset").on("reset",function(){
         $(this).children("p").text(MY_STATUS);
        $(this).find(".hsth").val(MY_STATUS);
     });
     
      $("#mindexheader").off("submit ").on("submit",function(){
         alert("sds");
         return false;
     });
     
     
    var CreateNewImage = function (url, value) {
        var img = new Image;
        img.src = url;
        img.width = img.width * (1 + (value / 100));
        img.height = img.height * (1 + (value / 100));
        var container = document.getElementById("container");
        container.appendChild(img);
    }

    $("#container").on('click', '#approve', confirm);
    $("#container").on('click', '#decline', decline);
    (function ($) {
        $.fn.getCursorPosition = function () {
            var el = $(this).get(0);
            var pos = 0;
            if ('selectionStart' in el) {
                pos = el.selectionStart;
            } else if ('selection' in document) {
                el.focus();
                var Sel = document.selection.createRange();
                var SelLength = document.selection.createRange().text.length;
                Sel.moveStart('character', -el.value.length);
                pos = Sel.text.length - SelLength;
            }
            return pos;
        };

    })(jQuery);
});