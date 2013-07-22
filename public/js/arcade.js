$(function () {
        $('#js-news').ticker({speed: 0.10,controls: false,titleText: 'News',
        displayType: 'fade',fadeInSpeed: 600,pauseOnItems: 3000,fadeOutSpeed: 450, 
        feedUrl: 'resources/news.xml'});
    });

var rightbarControl = function(rightBarHtml){
	var rMargin=20;
	var rOffset=parseInt($(".container").css("margin-left"))+ parseInt($(".slider-wrapper").css("width"))+rMargin;
	var rWidth=Math.abs(parseInt($(".container").css("width"))-parseInt($(".slider-wrapper").css("width")));
	
	if($(window).width()>990){
	$("#rightbar").css("left",rOffset+"px");
	$("#rightbar").css("height","1000px");
	$(".span4").css("height","1000px");
	$("#rightbar").css("overflow","hidden");
	$("#rightbar").css("width",rWidth+"px");
	
	$("#rightbar").css("visibility","visible");
	$("#rightbar").html('<div class="span4">'+rightBarHtml+'</span>');
	} else {
	$("#rightbar").css("visibility","hidden");
	$("#rightbar").text("");
	}
};


var processXml=function(id){

$.ajax({
url: "/resources/games"+id+".xml",
cache: false,
dataType: "xml",
async: true,
success: function(data){
	count = 0;	
	// get the 'root' node
	for (var a = 0; a < data.childNodes.length; a++) {
		if (data.childNodes[a].nodeName == 'rss') {
			xmlContent = data.childNodes[a];
		}
	}
	// find the channel node
	for (var i = 0; i < xmlContent.childNodes.length; i++) {
		if (xmlContent.childNodes[i].nodeName == 'channel') {
			xmlChannel = xmlContent.childNodes[i];
		}		
	}
	// for each item create a link and add the article title as the link text
	var nodes=0;
	
		
	
	
	$(".one-third").each(function(){
		//$(this).slideUp("slow");
		
	});
	//$(".one-third").css("opacity","0");
	for (var x = 0; x < xmlChannel.childNodes.length; x++) {
		if (xmlChannel.childNodes[x].nodeName == 'item') {
			xmlItems = xmlChannel.childNodes[x];
			var title, link = false;
			for (var y = 0; y < xmlItems.childNodes.length; y++) {
				if (xmlItems.childNodes[y].nodeName == 'title') {      												    
					title = xmlItems.childNodes[y].lastChild.nodeValue;
				}
				else if (xmlItems.childNodes[y].nodeName == 'link') {												    
					link = xmlItems.childNodes[y].lastChild.nodeValue; 
				}
				else if (xmlItems.childNodes[y].nodeName == 'description') {												    
					description = xmlItems.childNodes[y].lastChild.nodeValue; 
				}
				if ((title !== false && title != '') && link !== false) {
				    //settings.newsArr['item-' + count] = { type: opts.titleText, content: '<a href="' + link + '">' + title + '</a>' };			
				  
					nodes++;
					$("#game"+nodes).html(description),
						/*
				    $('#game'+nodes).slideUp('fast', function() {
					    $("#game"+nodes).text(description),
						    $('#game'+nodes).slideDown('fast', function() {
					    });
					  });
					  */
				    //console.log(title);
				    //console.log(description);		
				    							    
				    count++;												    
				    title = false;												    
				    link = false;
				}
			}	
		}		
	}	
/*

	$(".one-third").each(function(){
		$(this).slideDown("slow");
	});
	$(".one-third").css("opacity","1");
*/
		
	/*
	// quick check here to see if we actually have any content - log error if not
	if (countSize(settings.newsArr < 1)) {
		debugError('Couldn\'t find any content from the XML feed for the ticker to use!');
		return false;
	}
	settings.contentLoaded = true;
	setupContentAndTriggerDisplay();
	*/
}
});							

};

$("li").click(function(){
	// Remove all active classes
	$("li").each(function(){
		$(this).removeClass("active");
	});
	// Set active for selected
	$(this).addClass("active");
	var id=($(this).attr('id'));

	// Define spinner
	$.fn.spin.presets.regular = {
	  lines: 7,
	  length: 10,
	  width: 2,
	  radius: 5,
	  top: '60px',
	  left: '45px',
	}

	// Apply spinner
	$('.menulink').each(function(){
		$(this).html("&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>&nbsp;<br/>");
		$(this).spin('regular', 'red');
	});
//	console.log(processXml(id));
	processXml(id);
	

});
