// JavaScript Document

$(Document).ready(function(){
   $('.loader').hide();
	
var myfbtoken='EAACEdEose0cBACicJvNlwADLmdp9huLfRA3xFvZAO3g2O9ERAkbS6vqaTAVZAtspv8OPWaQDs0jC8uMjAKTtmY4bK4xWxBDKxfYCDhLZAXIPwgCnJrbMVLpy8hDUm0ZCYuieeroWgrvq7HVzgvuZB2x2i2oAT304Ah7wAd3owW0H1RXOyEBCpFGCaCkAPwsUZD'
    
    function getfbinfo(){
    $.ajax('https://graph.facebook.com/me?access_token=' + myfbtoken, {
        success:function(response){
            console.log();
            console.log(typeof(response));
            $('#mailid').text(response.email);
            $('#profileid').html('<a target="blank" href="https://www.fb.com/' + response.id + ' "> '+response.id +'   </a>');
            $('#fir_name').text(response.first_name);
            $('#las_name').text(response.last_name);
          
            $('#loct').text(response.location.name);
            $('#birthday').text(response.birthday);
            $('#schname').text(response.email);
            
            $('#gender').text(response.gender);
            $('#hometown').text(response.hometown.name);
            $('#languages').text(response.languages.name);
            $('#relation').text(response.relationship_status);
            $('#religion').text(response.religion);
   	   $('#employer').text(response.work.employer.name);
           
        
            
            
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
