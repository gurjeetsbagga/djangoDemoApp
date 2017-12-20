// JavaScript Document
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
$(document).ready(function (){
var winH=$(window).height();
var winW=$(window).width();
var minWidth = 1160;
var minHeight= 100;
var MyId = $(".CheckMe").val();
setInterval(function(){CheckInComingCM(MyId)},1000);
	 $(window).load(function() {			
			//if((winW<minWidth )|| (winH<minHeight)){
				// $("#chatdiv").css("display","none");
				// $(".cht-mn-container").css("display","block");
				
		//	}
		//	else{
				$("#chatdiv").css("display","block");				
		    //    $("#chtbx_component").css("height",$(".chatdiv_component").height()-40);	
				$(".cht-mn-container").css("display","none");
		//		}
			$("#chatbbdy_h").css("height",$("#chatb_container").height()-40);
			
			$('#l_img').hide();
			var d = new Date();
			var n = d.getTimezoneOffset();
			$("#imguptz").val(n); 
	});
	$(window).resize(function(e) {
    //  if((winW<minWidth )||(winH<minHeight)){
				// $("#chatdiv").css("display","none");
				// $(".cht-mn-container").css("display","block");				
	//		}
	//		else{
				$("#chatdiv").css("display","block");
			//	$("#chtbx_component").css("height",$(".chatdiv_component").height()-40);
				$(".cht-mn-container").css("display","none");
	//			}
		$("#chatbbdy_h").css("height",$("#chatb_container").height()-40);
    });
	$(".cht-mn-container").click(function(e) {
		$(this).css("display","none").addClass("");	
        $("#chatdiv").css("display","block");
		$("#chatdiv_component_bxh").css("height",$(".chatdiv_component_bxh").height());
		$("#chtbx_component").css("height",$(".chatdiv_component").height()-40);
    });
	
	$(".cdusrhdr").click(function(e){
		$("#chatdiv").css("display","none");		
        $(".cht-mn-container").css("display","block");
	});
	$("#pimg").show();
	$(".cdusr-stng-img").click(function(e) {
        if($(this).hasClass("open")){
			$(this).addClass("close").removeClass("open");
			$(".chng-stts-bx").hide();
		}else{
			$(this).addClass("open").removeClass("close");
			$(".chng-stts-bx").show();
		}
    });
	$("#pimg,#mimg").click(function () {
		if ($(".rsmenunav").hasClass("open")) {
			$(".rsmenunav").addClass("close").removeClass("open").slideUp();
			$("#mimg").hide();
			$("#pimg").show();
		}
		else {
			$(".rsmenunav").addClass("open").removeClass("close").slideDown("slow");
			$("#pimg").hide();
			$("#mimg").show();
		}
	});
	
	$(".upimage").click(function(){ 
		 $(".uploadimgdiv").css("display","block"); 
	 });
	 $(".upimgclose").click(function(){
		 $(".uploadimgdiv").css("display","none");
	 });
	 $(".bubble").click(function(){
		if($(this).hasClass("opench")){
			  $(".closech").css("background-color","white").removeClass("closech").addClass("opench");
			 }
			 else{
				 $(this).css("background-color","").removeClass("opench").addClass("closech");
			 }
		// $(".openimg").removeClass("openimg").addClass("closeimg").css("display","none");
		// $("#"+$(this).val()+"curimage").removeClass("closeimg").addClass("openimg").css("display","block");
		  
	});
	$(".wallnew").click(function(){
		$(".newupfile").trigger("click",function(){
			//$(this).trigger("change",function(){$("[name=newfile]").submit();});
		//	$("[name=newfile]").submit();
			  
		}); 
	});
	$(".accprq li").click(function(){		
		var mygrpid = $(this).val();
		var sid = $(".frndqsndrd").val();
		$(this).parents(".srchfrndlirbxl").remove();
		var d = new Date();
			var n = d.getTimezoneOffset();
		var x = getXMLHTTP();
		x.onreadystatechange=function()
		{
			if(x.readyState == 4 && x.status == 200)
				{
					
				}
		}
		x.open("POST", "accptfrndreq.php?senderid="+escape(sid)+"&mygrpid="+escape(mygrpid)+"&tz="+n, true);
	    x.send(null);	
	});
	$(".frndrqntfcn").click(function(){
		$(".vwfrndrqntfctn").css("display","block");
	});	
	 $(".olusrli").change(function(e) {
        $(this).children(".olusrlibx").css("display","block");
    });
	$(".olusrli").click(function(e) {
		if($(this).hasClass('close')){
			$(this).addClass('open').removeClass('close');
			var width= $(".w_cht").val();
			var usrid = $(this).next("[name=authid]").val();
			var name=$(this).find(".chatbdy_nm").html();
			var link = $(this).find(".sttslnk").attr("src")
			var WinWidth = Math.ceil(parseInt($(window).width())/264);
			var ChtWidth = Math.ceil(parseInt($(".w_cht").val())/264);
			if( WinWidth-1 > ChtWidth){
			$(".w_cht").val(parseInt(width)+264);
			var d = new Date();
				var n = d.getTimezoneOffset();
			var x = getXMLHTTP();
			x.onreadystatechange=function()
			{
				if(x.readyState == 4 && x.status == 200)
					{
						$(".chtcontainer").append("<div class='chtbx_ocontainer' style=''><div class='chtbx_container'><div class='chtbx_hdr'><table class='chtbx_table'><tr><td class='chtbx_clm'><ul class='chtbx_clm_ul'><li class='chtbx_clm_li'><img class='sttsimg' alt=$status src='"+link+"' /></li><li class='chtbx_clm_li chtbx_nm'>"+name+"</li></ul></td><td class='chtbx_clm_r'><ul class='chtbx_clm_ul'><li class='chtbx_clm_li chtmin'><img alt='minimize' src='images/mini.png'/></li><li class='chtbx_clm_li chtmax'><img alt='maximize' src='images/max.png'/></li><li class='chtbx_clm_li chtcl'><img alt='close' src='images/cw.png'/></li></ul></td></tr></table></div><div  class='chtbx_bdy chtbx_component' id='chtbx"+usrid+"_bdy' ></div><div class='chtbx_footer'><div class='chtbx_footerin'><div class='chtbx_dt'><textarea class='chtbx_txtarea'  onKeyDown='sendChat(event,this,"+usrid+")' ></textarea><input class='chtbx_bdyc' type='hidden' value='"+usrid+"' /></div></div></div></div></div>");
						mestart_ping(usrid);
					}
			}
			x.open("POST", "chatbox.php?tz="+n+"&width="+width+"&usrid="+usrid, true);
			x.send(null);
			}
		}
		
    });
	$(".bubble img").click(function(){
		$(".chtsearch").toggle();
	});
	$(".chtcl").click(function(){
		var uid = $(".chtbx_bdyc").val();
		$(this).parents(".chtbx_ocontainer").hide();
		$(".olusrli"+uid).addClass('close').removeClass('open');
		$(".w_cht").val($(".w_cht").val()-264);
	});
	$(".newupfile").change(function(){
		$("[name=newfile]").submit();

	});	
	
});
function  sendChat(event,chthstry_textarea,toid) {
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
		 var hour = d.getHours();
		 var min = d.getMinutes()
		 var time= hour+":"+min;
		 var link = $(".chatb_img img").attr("src");
		 var x = getXMLHTTP();
		x.onreadystatechange=function()
		{
			if(x.readyState == 4 && x.status == 200)
				{
					
					$("#chtbx"+toid+"_bdy").append("<div class='chatblock'><div class='msgblock'><div class='imgblock'><a href=''><img src="+link+" /></a></div><div class='msg_b_i'>"+message+"</div><div class='tmblock blockr'>"+time+"</div></div></div>")
				}
		}
		x.open("POST", "getchat.php?action=savechat&tz="+n+"&toid="+toid+"&message="+message, true);
	    x.send(null);
		}
		//chatHeartbeatTime = minChatHeartbeat;
		//chatHeartbeatCount = 1;

		return false;
	}

}
function CheckInComingCM(MyId){
	var x = getXMLHTTP();
	x.onreadystatechange=function()
		{
			if(x.readyState == 4 && x.status == 200)
				{
					var id =x.responseText;
					//alert(id);
					//return about people is new(2) or existing(1) if removed(0)
					//alert($(".chtbx_bdyc"+id).length);
					if(id>0){
						if($(".chtbx_bdyc"+id).length>0){
							mestart_ping(id);
						}
						else{
							getInstantCM(id);
						}
					}
					
				}
		}
		x.open("POST", "updatechat.php?userid="+MyId+"&action=check_in", true);
	    x.send(null);
}
function getInstantCM(id){
	//$("#chtcontainer").append("updatechat.php?userid="+id+"&action=get_in_chat");
	var x = getXMLHTTP();
	x.onreadystatechange=function()
		{
			if(x.readyState == 4 && x.status == 200)
				{
					// var num =x.responseText;
					// if(num==0){
						// return false;
					// }else
					//document.getElementById("chtcontainer").appendChild(x.responseText);
					
						$(".chtcontainer").append(x.responseText);
						mestart_ping(id);
					//}					
				}
		}
		x.open("POST", "updatechat.php?userid="+id+"&action=get_in_chat", true);
	    x.send(null);
}
function mestart_ping(id){

	//var id = $(".chtbx_bdyc").val();
//	$("#chtbx"+id+"_bdy").load("updatechat.php?userid="+id);
var x = getXMLHTTP();
	x.onreadystatechange=function()
		{
			if(x.readyState == 4 && x.status == 200)
				{
					
						$("#chtbx"+id+"_bdy").append(x.responseText);
						updatechatrecord();
				}
		}
		x.open("POST", "updatechat.php?userid="+id+"&action=update", true);
	    x.send(null);
setTimeout(function(){mestart_ping(id)},1000);
}
function updatechatrecord(){
var x = getXMLHTTP();
	x.onreadystatechange=function()
		{
			if(x.readyState == 4 && x.status == 200)
				{
					
				}
		}
		x.open("POST", "updatechatrecord.php", true);
	    x.send(null);
}