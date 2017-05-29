// JavaScript Document

$(Document).ready(function(){
   $('.loader').hide();
	
var myfbtoken='EAACEdEose0cBAFj1PUofU1KM8k97wTGZAoDc3KxtKe9VILnPZCaZChcmX9LSg1tGEVyZB7ayAVZAPP0dTGALOZAtAfv8S4bZBC1Ewk2C500eygac9v6Yuld3rmIQBZBwlQN4QvANaKcptwit7RCZCWFcyEYsZA3ZCl01jN5ffznZA1hKF4xORZA3O88Y5gWZC7uQiNz1IZD'
    
    function getfbinfo(){
    $.ajax('https://graph.facebook.com/me?access_token=' + myfbtoken, {
        success:function(response){
            console.log();
            console.log(typeof(response));
            $('#mailid').text(response.email);
            $('#profileid').html('<a target="blank" href="https://www.fb.com/' + response.id + ' "> '+response.id +'   </a>');
            $('#fir_name').text(response.first_name);
            $('#las_name').text(response.last_name);
         //   $('#edu').text(response.education.school.name);
            $('#loct').text(response.location.name);
            $('#birthday').text(response.birthday);
            $('#schname').text(response.email);
            
            $('#gender').text(response.gender);
            $('#hometown').text(response.hometown.name);
            $('#languages').text(response.languages.name);
            $('#relation').text(response.relationship_status);
            $('#religion').text(response.religion);
            
         //   $('#employer').text(response.work.employer.name);
           
        
            
            
        },
		// --  sucess end
		error: function(request, errorType, errorMessage){
			console.log(request);
			console.log(errorType);
			alert(errorMessage);
		},
		
		// -- error end
		timeout:3000,
		
		beforesend:function(){
		$('.loader').show();
	},
		complete:function(){
		$('.loader').hide();
	}   
        
    }); 
        
    }
    $('#fbbtn').on('click', getfbinfo);
	
	
});
