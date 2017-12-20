function getXMLHTTP() { 
	var xmlhttp=false;
	try{
		xmlhttp=new XMLHttpRequest();
	}
	catch(e){		
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
// JavaScript Document
$(document).ready(function () { 
var minWidth = 1370;
var minHeight= 120;
	 $(window).load(function() {			
			if(($(window).width()<minWidth )||($(window).height()<minHeight)){
				$("#chatdiv").css("display","none");
				$(".cht-mn-container").css("display","block");
			}
			else{
				$("#chatdiv").css("display","block");
				$("#chatdiv_component_bxh").css("height",$("#chatdiv_component_bxh").height());
		        $("#chtbx_component").css("height",$(".chatdiv_component").height()-40);	
				$(".cht-mn-container").css("display","none");
			}
		$('#l_img').hide();
		var d = new Date();
			var n = d.getTimezoneOffset();
			$("#imguptz").val(n); 
	});
	$(window).resize(function(e) {
       if(($(window).width()<minWidth )||($(window).height()<minHeight)){
				$("#chatdiv").css("display","none");
				$(".cht-mn-container").css("display","block");				
			}
			else{
				$("#chatdiv").css("display","block");
				$("#chatdiv_component_bxh").css("height",$("#chatdiv_component_bxh").height());
				$("#chtbx_component").css("height",$(".chatdiv_component").height()-40);
				$(".cht-mn-container").css("display","none");
				}
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
	$(".olusrli").one("click",function(e) {
		var width= $(".w_cht").val();
		var usrid = $(this).next("[name=authid]").val();
		var WinWidth = Math.ceil(parseInt($(window).width())/256);
		var ChtWidth = Math.ceil(parseInt($(".w_cht").val())/256);
		if( WinWidth-1 > ChtWidth){
		$(".w_cht").val(parseInt(width)+256);
        var d = new Date();
			var n = d.getTimezoneOffset();
		var x = getXMLHTTP();
		x.onreadystatechange=function()
		{
			if(x.readyState == 4 && x.status == 200)
				{
					$(".container").append(x.responseText);
				}
		}
		x.open("POST", "chatbox.php?tz="+n+"&width="+width+"&usrid="+usrid, true);
	    x.send(null);
		}
    });
	$(".bubble img").click(function(){
		$(".chtsearch").toggle();
	});
	
	$(".newupfile").change(function(){
		$("[name=newfile]").submit();

		});	
$(".closebtnimg").click(function(){
		if($(".cnfrmobox").hasClass("op")){
			$(".cnfrmobox").addClass("cl").removeClass("op").hide();
		}
	});
	$(".dngtxtar").bind('paste', function(e){
		setTimeout(function() {                	
                    //ms word clean-up	
                	//var html = self.getContent();
                    var html = $(".dngtxtar").html();					
                    html = html.replace(/<(\/)*(\\?xml:|a|span|p|button|style|font|del|ins|st1:|[ovwxp]:)(.*?)>/gi,"");
                    html = html.replace(/(class|style|type|start|href)="(.*?)"/gi,""); 
                    html = html.replace( /\s*mso-[^:]+:[^;"]+;?/gi,"") ;
                    html = html.replace(/<\s*(\w[^>]*) class=([^ |>]*)([^>]*)/gi, "");
                    html = html.replace( /<(\w[^>]*) onmouseover="([^\"]*)"([^>]*)/gi, "") ;
                    html = html.replace( /<(\w[^>]*) onmouseout="([^\"]*)"([^>]*)/gi, "") ;
                    html = html.replace(/<script(.*?)script>/gi, '');
                    html = html.replace(/<!--(.*?)-->/gi, '');      
                    html = html.replace(/<\/?(span)[^>]*>/gi, '');       
                    html = html.replace(/<\/?(span)[^>]*>/gi, '');     
                    html = html.replace( /<\/?(img|font|style|p|div|v:\w+)[^>]*>/gi,"");       	 
                    html = html.replace( /\s*style="\s*"/gi, '' ) ;
                    html = html.replace( /<SPAN\s*[^>]*>\s*&nbsp;\s*<\/SPAN>/gi, '' ) ;
                    html = html.replace( /<SPAN\s*[^>]*><\/SPAN>/gi, '' ) ;
					html = html.replace(/<div[^>]*>/ig, "<x>"); html = html.replace(/<\/?div[^>]*>/ig, "");
					html = html.replace(/[\r\n]/g,"");	
					html = html.replace(/[\r]/g,"");	
					html = html.replace(/[\n]/g,"");	
					html = html.replace(/<br>/ig,"");	
					html = html.replace(/<li>/ig,"");	
					html = html.replace(/<\/li>/ig,"");	// itens de lista
					html = html.replace(/&nbsp;/g,"");
					html = html.replace(/[\t]/g," ");						
					// Limpeza de xml, style, script, noscript e object
					html = html.replace(/<(xml|style|script|noscript|object)[^>]*>.*?<\/\1>/ig, "");					
					//substitui tags h1-h6 por negrito
					html = html.replace(/<h1[^>]*>/ig, ""); html = html.replace(/<\/?h1[^>]*>/ig, "");
					html = html.replace(/<h2[^>]*>/ig, ""); html = html.replace(/<\/?h2[^>]*>/ig, "");
					html = html.replace(/<h3[^>]*>/ig, ""); html = html.replace(/<\/?h3[^>]*>/ig, "");
					html = html.replace(/<h4[^>]*>/ig, ""); html = html.replace(/<\/?h4[^>]*>/ig, "");
					html = html.replace(/<h5[^>]*>/ig, ""); html = html.replace(/<\/?h5[^>]*>/ig, "");
					html = html.replace(/<h6[^>]*>/ig, ""); html = html.replace(/<\/?h6[^>]*>/ig, "");
					// Mantem as tags <br>					
					// substitui <strong> por <b>		
					html = html.replace(/<strong>/ig,"");	html = html.replace(/<\/?strong>/ig,"");	
					// mantem imagens de anexos
					html = html.replace(/<IMG id=AN/g,"");	// IE está tirando as aspas
					html = html.replace(/<img id=\"AN/g,"");	// outros
					html = html.replace(/<b[^>]*>/g,"");
					html = html.replace(/<\/?b[^>]*>/g,"");
					
					// Limpa as tags diferentes de <b> <i> <u> e <x>, variável auxiliar de <br> 
					//html = html.replace(/<((\/\w[biuxz].*?)|(\/[^biuxz\/]{1})|([^biuxz\/]{1})|(\/[^biuxz\/]{1}\w.*?)|([^biuxz\/]{1}\w.*?)|([biuxz]{1}\w.*?)|(\/[biuxz]{1}\w.*?))>/ig,"");	
					html = html.replace(/<((\/\w[biuxyz][^>]*)|(\/[^biuxyz\/]{1}[^>]*)|([^biuxyz\/]{1}[^>]*)|(\/[^biuxyz\/]{1}\w[^>]*)|([^biuxyz\/]{1}\w[^>]*)|([biuxyz]{1}\w[^>]*)|(\/[biuxyz]{1}\w[^>]*))>/ig,"");	
					// retorna a tag real da imagem
					html = html.replace(/<y id=AN/g,"<IMG id=AN");	
					html = html.replace(/<z id=\"AN/g,"<img id=\"AN");	
					// Retorna a tag real de <br>	
					html = html.replace(/<x>([\s]*<x>){2,100}/g,"<x>");//Trata exesso de quebras de linhas	
					html = html.replace(/(<x>){2,}/g,"<x>");//Trata exesso de quebras de linhas	
					//html = html.replace(/<x> <x>/g,"<x>");//Trata exesso de quebras de linhas	
					html = html.replace(/<x>/ig,"<br>");	
					// Substitui tags <p  xxxxx> por <p>
					//html = html.replace(/<p [^>]>/ig,"<br>");	html = html.replace(/<\/p>/ig,"</p>");
				    $(".dngtxtar").html(html);                    
                }, 10);
	});
	$(".retxtar").bind('paste', function(e){
		var el = $(this);
  	setTimeout(function() {                	
                    //ms word clean-up	
                	//var html = self.getContent();
                    var html = el.html();					
                     html = html.replace(/<(\/)*(\\?xml:|a|span|p|button|style|font|del|ins|st1:|[ovwxp]:)(.*?)>/gi,"");
                    html = html.replace(/(class|style|type|start|href)="(.*?)"/gi, ''); 
                    html = html.replace( /\s*mso-[^:]+:[^;"]+;?/gi, '' ) ;
                    html = html.replace(/<\s*(\w[^>]*) class=([^ |>]*)([^>]*)/gi, "");
                    html = html.replace( /<(\w[^>]*) onmouseover="([^\"]*)"([^>]*)/gi, "") ;
                    html = html.replace( /<(\w[^>]*) onmouseout="([^\"]*)"([^>]*)/gi, "") ;
                    html = html.replace(/<script(.*?)script>/gi, '');
                    html = html.replace(/<!--(.*?)-->/gi, '');      
                    html = html.replace(/<\/?(span)[^>]*>/gi, '');       
                    html = html.replace(/<\/?(span)[^>]*>/gi, '');     
                    html = html.replace( /<\/?(img|font|style|p|div|v:\w+)[^>]*>/gi,"");       	 
                    html = html.replace( /\s*style="\s*"/gi, '' ) ;
                    html = html.replace( /<SPAN\s*[^>]*>\s*&nbsp;\s*<\/SPAN>/gi, '' ) ;
                    html = html.replace( /<SPAN\s*[^>]*><\/SPAN>/gi, '' ) ;
					html = html.replace(/<div[^>]*>/ig, "<x>"); html = html.replace(/<\/?div[^>]*>/ig, "");
					html = html.replace(/[\r\n]/g,"");	
					html = html.replace(/[\r]/g,"");	
					html = html.replace(/[\n]/g,"");	
					html = html.replace(/<br>/ig,"");	
					html = html.replace(/<li>/ig,"");	
					html = html.replace(/<\/li>/ig,"");	// itens de lista
					html = html.replace(/&nbsp;/g,"");
					html = html.replace(/[\t]/g," ");						
					// Limpeza de xml, style, script, noscript e object
					html = html.replace(/<(xml|style|script|noscript|object)[^>]*>.*?<\/\1>/ig, "");					
					//substitui tags h1-h6 por negrito
					html = html.replace(/<h1[^>]*>/ig, ""); html = html.replace(/<\/?h1[^>]*>/ig, "");
					html = html.replace(/<h2[^>]*>/ig, ""); html = html.replace(/<\/?h2[^>]*>/ig, "");
					html = html.replace(/<h3[^>]*>/ig, ""); html = html.replace(/<\/?h3[^>]*>/ig, "");
					html = html.replace(/<h4[^>]*>/ig, ""); html = html.replace(/<\/?h4[^>]*>/ig, "");
					html = html.replace(/<h5[^>]*>/ig, ""); html = html.replace(/<\/?h5[^>]*>/ig, "");
					html = html.replace(/<h6[^>]*>/ig, ""); html = html.replace(/<\/?h6[^>]*>/ig, "");
					// Mantem as tags <br>					
					// substitui <strong> por <b>		
					html = html.replace(/<strong>/ig,"");	html = html.replace(/<\/?strong>/ig,"");	
					// mantem imagens de anexos
					html = html.replace(/<IMG id=AN/g,"");	// IE está tirando as aspas
					html = html.replace(/<img id=\"AN/g,"");	// outros
					html = html.replace(/<b[^>]*>/g,"");
					html = html.replace(/<\/?b[^>]*>/g,"");
					
					// Limpa as tags diferentes de <b> <i> <u> e <x>, variável auxiliar de <br> 
					//html = html.replace(/<((\/\w[biuxz].*?)|(\/[^biuxz\/]{1})|([^biuxz\/]{1})|(\/[^biuxz\/]{1}\w.*?)|([^biuxz\/]{1}\w.*?)|([biuxz]{1}\w.*?)|(\/[biuxz]{1}\w.*?))>/ig,"");	
					html = html.replace(/<((\/\w[biuxyz][^>]*)|(\/[^biuxyz\/]{1}[^>]*)|([^biuxyz\/]{1}[^>]*)|(\/[^biuxyz\/]{1}\w[^>]*)|([^biuxyz\/]{1}\w[^>]*)|([biuxyz]{1}\w[^>]*)|(\/[biuxyz]{1}\w[^>]*))>/ig,"");	
					// retorna a tag real da imagem
					html = html.replace(/<y id=AN/g,"<IMG id=AN");	
					html = html.replace(/<z id=\"AN/g,"<img id=\"AN");	
					// Retorna a tag real de <br>	
					html = html.replace(/<x>([\s]*<x>){2,100}/g,"<x>");//Trata exesso de quebras de linhas	
					html = html.replace(/(<x>){2,}/g,"<x>");//Trata exesso de quebras de linhas	
					//html = html.replace(/<x> <x>/g,"<x>");//Trata exesso de quebras de linhas	
					html = html.replace(/<x>/ig,"<br>");	
					// Substitui tags <p  xxxxx> por <p>
					//html = html.replace(/<p [^>]>/ig,"<br>");	html = html.replace(/<\/p>/ig,"</p>");		   
				    el.html(html);                   
                }, 10);
	});
	$(".mainusrimgdiv").hover(function(){
		$(".upimage").css("display","block");
	},function(){
			$(".upimage").css("display","none");
	});
	$(".msgdiv").click(function(){
		$(".dngtxtdiv").show();
	});
	$(".cancelmsg").click(function(){
		$(".jntbtn").hide();
		$(".dngtxtar").hide();
		$(".dngtxtar").text("");
		$(".dngtxtarspn").show();
	});	
	 $(".wus").click(function(){
		 $(this).parents(".frndremsgcontent").find(".retxtar").show();
	 });
	 $(".frmsg").click(function(){
		 if($(this).hasClass("open")){
			 $(this).addClass("close").removeClass("open").parent().next(".remsgtxtdiv").hide();
		 }
			 else{
				 $(this).addClass("open").removeClass("close").parent().next(".remsgtxtdiv").show();
			 }
	 });
	 //$(".lcontent").css("height",$(".innermcontent").height());
	$(".opsignin").focus(function(){
		$(this).css("opacity","1");
	});
	$(".vall").click(function()
	{
	  if($(this).hasClass("open"))
	  {
		  $(this).text("view all").addClass("close").removeClass("open").parents(".frndremsgcontent").find(".hiddenfrnmsg").slideUp("slow");
	  }
		  else
		  {
			  $(this).text("hide").addClass("open").removeClass("close").parents(".frndremsgcontent").find(".hiddenfrnmsg").slideDown("slow");
		  }
	});
function isValidUrl(url){
return preg_match("^(https?|ftp)\:\/\/([a-z0-9+!*(),;?&=\$_.-]+(\:[a-z0-9+!*(),;?&=\$_.-]+)?@)?[a-z0-9+\$_-]+(\.[a-z0-9+\$_-]+)*(\:[0-9]{2,5})?(\/([a-z0-9+\$_-]\.?)+)*\/?(\?[a-z+&\$_.-][a-z0-9;:@/&%=+\$_.-]*)?(#[a-z_.-][a-z0-9+\$_.-]*)?\$",url);
	}	
	
	function urlchk(url) {  
                    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;  
                    return text.replace(urlRegex, function(url) {  
                            return '<a href="' + url + '">' + url + '</a>';  
                        })  
  }
    
	$(".prvcnclimg").click(function(){
		$(".prvcnclimg").css("display","none");
		$("#prvcontainer").html("");
	});
  
	$(".vidup").click(function(){
		//$("#dngtxtar").html("");			
		$(".vidupfileup").trigger("click",function(){
		}); 
	});
	$(".imgup").click(function(){
		//$("#dngtxtar").html("");			
		$(".imgupfileup").trigger("click",function(){
		}); 
	});
	$(".vidupfileup").change(function(){
		var ext = $(this).val().split('.').pop().toLowerCase();		  
			  if($.inArray(ext, ['vlc','wmv','3gp','mov','mpg','rm']) == -1) {
					$('.err').fadeIn("100");
					$('.err').html("* only vlc/wmv/3gp/mov/mpg/rm");
					$(".vidimgprvw").css("display","block");
					$(".vidupbtnop").css("display","none");
					(".imgupbtnop").css("display","none");
			  }
			  else{
				    $('.err').css("display","none");
					var txt = $(this).val().split('\\').pop().toLowerCase();
					//$(".vidimgtxt").text(txt);
					$("#prvcontainer").html("<div class='shwprv'>"+txt+"</div>");
					$(".prvcnclimg").css("display","block");
					$("#postbtn").addClass("vidact").removeClass("imgact").removeClass("msgact");	
					//$(".vidimgprvw").css("display","block");
					//$(".vidupbtnop").css("display","inline-block");
					//$("[name=imgupfile]").submit();
			  }
	});
	$(".imgupfileup").change(function(){
		var ext = $(this).val().split('.').pop().toLowerCase();		  
			  if($.inArray(ext, ['gif','png','jpg','jpeg']) == -1) {
					$('.err').fadeIn("100");;
					$('.err').html("* only jpg/jpeg/png/gif");
					$(".vidimgprvw").css("display","block");
					$(".imgupbtnop").css("display","none");
					$(".vidupbtnop").css("display","none");
			  }
			  else{
					var txt = $(this).val().split('\\').pop().toLowerCase();
					$('.err').css("display","none");
					//$(".vidimgtxt").text(txt);
					$("#prvcontainer").html("<div class='shwprv'>"+txt+"</div>");
					$(".prvcnclimg").css("display","block");
					$("#postbtn").addClass("imgact").removeClass("vidact").removeClass("msgact");		
					//$(".vidimgprvw").css("display","block");
					//$(".imgupbtnop").css("display","inline-block");
					//$("[name=imgupfile]").submit();
			  }
	});
	$(".vidupbtnop").click(function(){
		//$(".loaderbar").css("display","block");
//		$(".vidimgupbtncl").val("hide");
//		$("[name=vidupfile]").submit();
	});
	$(".acwrite").click(function(){
		$(this).hide();
		$(this).next(".remsgform").css("display","block");
	});
	$(".imgupbtnop").click(function(){
		//$(".loaderbar").css("display","block");
//		$(".vidimgupbtncl").val("hide");
//		$("[name=imgupfile]").submit();
	});
	$(".vidimgupbtncl").click(function(){
		$(".vidimgprvw").css("display","none");
	});
	$(".vimgbxlimg").click(function(){
	
	//	$(this).css("display","none");
	//	$(this).next(".vvid").css("display","block");
	});
   $("#dngtxtar").click(function(e){
	   $(".opnmsz").remove();
	   $("#dngtxtarspntxtar").attr("value",$(this).html());
	   $(".dntxtarbdy").css("border","1px solid green");			
	  	$(".jntbtn").show();
   });
    $(".closeabt").click(function(){
		$(".openabt").removeClass(".openabt").addClass("closeabt").css("display","none");
		$(this).removeClass(".closeabt").addClass("openabt").css("display","block");
	});
    $("#abt").click(function(){
		$("#abt1").css("display","block");
		$("#ph1").css("display","none");
		$("#vid1").css("display","none");
		$("#ru1").css("display","none");
		
	});
	$("#ph").click(function(){
		$("#ph1").css("display","block");
		$("#abt1").css("display","none");
		$("#vid1").css("display","none");
		$("#ru1").css("display","none");
		
	});
	$("#vid").click(function(){
		$("#vid1").css("display","block");
		$("#ph1").css("display","none");
		$("#abt1").css("display","none");
		$("#ru1").css("display","none");
		
	});
	$("#ru").click(function(){
		$("#ru1").css("display","block");
		$("#ph1").css("display","none");
		$("#vid1").css("display","none");
		$("#abt1").css("display","none");
		
	});
	$("#dngtxtar").keyup(function(e){
	  $(".dntxtarbdy").css("border","1px solid green");
	  $(".opnmsz").remove();
	  $(".jntbtn").show();
	  var reg = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	  var url = $(this).text();
	 if(reg.test(url)){
	     $("#postbtn").addClass("vidlnkact").removeClass("vidact").removeClass("imgact").removeClass("msgact");
	     var videoID = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w\-]{10,12})\b/)[1];
	   //alert(videoID+"dfgdfg");	
		if($("#prvcontainer").html("")){	
		  var x = getXMLHTTP();
		  x.onreadystatechange=function()
			{
			   if(x.readyState == 4 && x.status == 200)
				{
				   $("#prvcontainer").html(x.responseText);
				}
			 }
			 x.open("POST", "getwebdetail.php?videoID="+videoID, true);
			 x.send(null);
		}
	}
	    //var str = $(this).html();
		//$("#dngtxtarspntxtar").attr("value",$(this).html().replace( /(&amp;)/g,"&").replace(/(&gt;)/g,">").replace(/(&lt;)/g,"<").replace(/(&quot;)/g,"\"").replace(/(&#039;)/g,"'").replace(/(&nbsp;)/g,' ').replace(/<br>/g,'\n'));
		$("#dngtxtarspntxtar").attr("value",$(this).html().replace(/<br>/g,'\n'));
		//}
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
		var x = getXMLHTTP();
		x.onreadystatechange=function()
		{
			if(x.readyState == 4 && x.status == 200)
				{
					message = message.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;");
				$("#chthstry_content_"+toid).append("<div class='chthstry_content_hdr'><div class='chthstry-name' style='color:;'><a href='' class='chthstry_name_link'></a></div></div><div class='chthstry_msg'>"+message+"</div></div>");
				}
		}
		x.open("POST", "getchat.php?action=savechat&tz="+n+"&toid="+toid+"&message="+message, true);
	    x.send(null);
		}
		//chatHeartbeatTime = minChatHeartbeat;
		//chatHeartbeatCount = 1;

		return false;
	}

	//var adjustedHeight = chthstry_textarea.clientHeight;
//	var maxHeight = 94;
//
//	if (maxHeight > adjustedHeight) {
//		adjustedHeight = Math.max(chthstry_textarea.scrollHeight, adjustedHeight);
//		if (maxHeight)
//			adjustedHeight = Math.min(maxHeight, adjustedHeight);
//		if (adjustedHeight > chthstry_textarea.clientHeight)
//			$(chthstry_textarea).css('height',adjustedHeight+8 +'px');
//	} else {
//		$(chthstry_textarea).css('overflow','auto');
//	}
	 
		
}
function urlchk(url) {  
                    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;  
                    return text.replace(urlRegex, function(url) {  
                            return '<a href="' + url + '">' + url + '</a>';  
                        })  
  }

function submitmsg(e,user,findid,tomsgid)
{
	var keycode = event.charCode;
	var d = new Date();
	var n = d.getTimezoneOffset();
	if(keycode==13)
	{
		var req = getXMLHTTP();
		if (req)
		   {
			   req.onreadystatechange = function()
				 {
					if (req.readyState == 4)
						{
							// only if "OK"
							if (req.status == 200)
							{
								var ndiv = document.getElementById(findid);
								if(ndiv.style.display == "none" || ndiv.style.display == "")												
										ndiv.style.display = "block";
								//	var x = ndiv.lastChild;								
//								//	var nspan = document.getElementById(userwriteid);
//									var nlabel = document.createElement('span');
//									nlabel.setAttribute("id","userwriteid");
//								var ndiv1 = document.createElement('div');
//									//ndiv1.setAttribute("id","retxtar");
//								    nlabel.innerHTML=req.responseText;
//									ndiv.children[1].appendChild(nlabel);
								//ndiv.children[1].appendChild(ndiv1);
								   //ndiv.innerHTML=req.responseText;
									$('#'+findid+'>:last').before(req.responseText);
							} 
							else 
							{
								//alert("There was a problem while using XMLHTTP:\n" + req.statusText);
							}
						}
					}
								  var namevalue=e.innerHTML;
								  $("."+findid).val(namevalue);
								 var msg =  $("."+findid).val().replace(/\s\s+/g,' ');
								 req.open("POST", "remsg.php?msg="+encodeURIComponent(msg)+"&to="+user+"&tomsgid="+tomsgid+"&tz="+n+"&findid="+findid, true); 
								  req.send(null);
								  e.innerHTML="";	 		
				   } 
				   else
				   {
				   }
				  // $("."+e.className).css("display","none");
				   $("."+e.className).val('');
		 }
	  }
	  function delnode(pid,id,from,to,mid){
		//	$(".cnfrmobox").addClass("op").removeClass("cl").css("display","block");
//			$(".cnfrmy").click(function(){ 
					 var x = getXMLHTTP();
		 			 x.onreadystatechange=function()
					 {
					   if(x.readyState == 4 && x.status == 200)
					   {
						    $("#"+id).fadeOut("fast");
						    pd= document.getElementById(pid); 
						    cd = document.getElementById(id); 
							pd.removeChild(cd);	
					   }
					 }
					 x.open("POST", "deldata.php?from="+from+"&to="+to+"&mid="+mid, true);
					 x.send(null);
				// $(".cnfrmobox").addClass("cl").removeClass("op").hide();
//			});
//			$(".cnfrmn").click(function(){
//				$(".cnfrmobox").addClass("cl").removeClass("op").hide();
//				});
	  }
	   function delmnnode(pid,cid,uid,mid){
		//	$(".cnfrmobox").addClass("op").removeClass("cl").css("display","block");
//			$(".cnfrmy").click(function(){ 
					 var x = getXMLHTTP();
		 			 x.onreadystatechange=function()
					 {
					   if(x.readyState == 4 && x.status == 200)
					   {
						    $("#"+cid).fadeOut("fast");
						    pd= document.getElementById(pid);
						    cd = document.getElementById(cid);
							pd.removeChild(cd);	
					   }
					 }
					 x.open("POST", "delmainmsz.php?uid="+uid+"&mid="+mid, true);
					 x.send(null);
				// $(".cnfrmobox").addClass("cl").removeClass("op").hide();
//			});
//			$(".cnfrmn").click(function(){
//				$(".cnfrmobox").addClass("cl").removeClass("op").hide();
//				}); 
	  }
	  function submitmnmsg(e){
		  if($("#postbtn").hasClass("vidlnkact"))
		  {
			  var url = $("#dngtxtar").text();
	          var vid = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=))([\w\-]{10,12})\b/)[1];
			  var form = document.forms['vidupfile'];
			  var title = form.title.value;
			  
			  var x = getXMLHTTP();
		      x.onreadystatechange=function()
			 {
			   if(x.readyState == 4 && x.status == 200)
				{
				   $("#frmsgul").prepend(x.responseText).fadeIn("slow");
				}
			 }
			 x.open("POST", "vidimglnk.php?vid="+vid+"&vlink="+url, true);
			 x.send(null);
		}
		else if($("#postbtn").hasClass("imgact"))
		{
			$(".loaderbar").css("display","block");
			$(".vidimgupbtncl").val("hide");
			var form = document.forms["imgupfile"];
			form.dngmsgname.value=$("#dngtxtarspntxtar").val().replace(/\s\s+/g,' ');
		    $("[name=imgupfile]").submit();
		}
		else if($("#postbtn").hasClass("vidact"))
		{
			var form = document.forms["vidupfile"];
			form.dngmsgname.value=$("#dngtxtarspntxtar").val().replace(/\s\s+/g,' ');
			$(".loaderbar").css("display","block");
			$(".vidimgupbtncl").val("hide");
			$("[name=vidupfile]").submit();
		}
		else if($("#postbtn").hasClass("msgact")){
		    var x = getXMLHTTP();
		    var form = document.forms["dngmsgform"];
		
	  	    var d = new Date();
			var n = d.getTimezoneOffset();			
			//var msg1 =document.getElementById("dngtxtar").innerHTML();
			//var msg = $("#dngtxtarspntxtar").val().replace(/\s\s+/g,' ').replace(/\n/g,"<br>");
			var msg = $("#dngtxtarspntxtar").val().replace(/\s\s+/g,' ');
			//var msg = $("#dngtxtar").html().replace(/\s\s+/g,' ').replace(/\n/g,"<br>");
			
		//alert(msg);
			//msg = msg.replace(/^\s+|\s+$/g, '');Regex.Replace(myString, @"\s+", " ");
			x.onreadystatechange=function()
			{
			   if(x.readyState == 4 && x.status == 200)
				{
					//form.submit();
					$("#frmsgul").prepend(x.responseText).fadeIn("slow");				  
				}
			};
			x.open("POST", "dngmsg.php?msg="+encodeURIComponent(msg)+"&tz="+n, true);
			x.send(null);
			$(".jntbtn").hide(); 
			$(".dngtxtar").html((msg)).show("fast");
		  }
	}