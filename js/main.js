$(document).ready(function(){
    

    var $download = $('.download');
    var $icon = $('i');

function download(song){

		   

	$.ajax({
        
		url: "https://kashyap32-youtubetomp3-v1.p.mashape.com/" + song,
		
		headers:{
			"X-Mashape-Key" : "7NsJzZ5xZrmshdCm6zuvv7IYS5kIp1Qic87jsnQ7Zc3iVGnH5z",
            "Accept" : "text/plain"
		},
		
		dataType: "json",// dont forget this, or u must do parse
		success: function(response){

				
				var linked = response.data[0].link;
				$download.text(linked);
				$download.attr("href",linked).show();
				$icon.slideDown(1000);


		}



	});

}


$('.btnDownload').on("click",function(){

	var searchValue = $(".search").val();
    download(searchValue);


});

$('.download').on("click",function(){

	$download.fadeOut(1000); 
	$icon.fadeOut(1000);

})
























});



