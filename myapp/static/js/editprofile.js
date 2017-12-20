$(document).ready(function(){
	$("#livingtxtbox").keyup(function(){	
	 if($(this).val().length>3)
	 {
		 var str = $(this).val();
		 var x = getXMLHTTP();  
		 x.onreadystatechange=function()
		 {
		   if(x.readyState == 4 && x.status == 200)
		   {
				//if(x.responseText.indexOf("+ERROR")!=0){
				document.getElementById("livinglayer").innerHTML=x.responseText;
				document.getElementById("livinglayer").setAttribute("style","position:absolute;display:block;width:340px;z-index:1;padding:5px;border: 1px solid lightgrey; overflow:auto;background-color:#fff;");
			//	}else{
			//		document.getElementById("livinglayer").style.display="none";			
			//	} 
		   }		
		 }	 
		 x.open("POST","getlivingsuggest.php?search="+escape(str), true);
		 x.send(null);
	}
});

});