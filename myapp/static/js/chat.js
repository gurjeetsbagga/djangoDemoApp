$(document).ready(function(){
	//setInterval(ping,1000);
	$(".chtcl").click(function(){
		var uid = $(".chtbx_bdyc").val();
		$(this).parents(".chtbx_ocontainer").hide();
		$(".olusrli"+uid).addClass('close').removeClass('open');
		$(".w_cht").val($(".w_cht").val()-264);
	});
});
/* function ping(){
	var id = $(".chtbx_bdyc").val();
	$("#chtbx"+id+"_bdy").each(load("updatechat.php?userid="+id);
} */
/* function  sendChat(event,chthstry_textarea,toid) {
	if(event.keyCode == 13 && event.shiftKey == 0){
		message = $(chthstry_textarea).val();
		message = message.replace(/^\s+|\s+$/g,"");

		$(chthstry_textarea).val('');
		$(chthstry_textarea).focus();
		//$(chthstry_textarea).css('height','44px');
		if (message != '') {
			//$.post("getchat.php?action=savechat", {toid: toid, message: message} , function(data){
//				message = message.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;");
//				$("#chthstry_content_"+toid).append("<div class='chthstry_content_hdr'><div class='chthstry-name' style='color:;'><a href='' class='chthstry_name_link'></a></div></div><div class='chthstry_msg'>"+message+"</div></div>");
//				$("#chthstry_content_"+toid+" .chatboxcontent").scrollTop($("#chthstry_content_"+toid+" .chatboxcontent")[0].scrollHeight);
//			});
		var d = new Date();
		var n = d.getTimezoneOffset();
		var x = getXMLHTTP();
		x.onreadystatechange=function()
		{
			if(x.readyState == 4 && x.status == 200)
				{
					//message = message.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;");
					//$("#chthstry_content_"+toid).append("<div class='chthstry_content_hdr'><div class='chthstry-name' style='color:;'><a href='' class='chthstry_name_link'></a></div></div><div class='chthstry_msg'>"+message+"</div></div>");
				}
		}
		x.open("POST", "getchat.php?action=savechat&tz="+n+"&toid="+toid+"&message="+message, true);
	    x.send(null);
		}
		//chatHeartbeatTime = minChatHeartbeat;
		//chatHeartbeatCount = 1;

		return false;
	}
	} */