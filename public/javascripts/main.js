
//TODO: Avoid duplicate additions in interest box from FB, removing interest after adding is broken
$(document).ready(function() {

  function addInterest(interestName) {
    if (!interestName || 0 === interestName.length) {
      return;
    }
    $.ajax({
      type: "POST",
      url: "/addinterest"  ,
      dataType:"json",
      contentType:"application/json; charset=utf-8",
      data: JSON.stringify({'interestName': interestName}),
      success: function(data, status, xhr) {
        console.log(data);
        if (data.redirect) {
          window.location.href = data.redirect;
        } else {
          if(data.exists) {
            var message = interestName + " is already present in your interests!"
          } else {
            var message = interestName + " has been successfully added to your interests!"            
          }
          
        }     
      },
      error: function(jqXHR, textStatus, errorThrown) {
          alert(textStatus);
          
        }
    });
  };

  

  $("a.follow_interest_link").click(function() {
    var interestName = $(this).data('interest');
    addInterest(interestName);
  });  


  $("#follow-interest").on('click', function(e){
    var interestName = $(this).data('interest');
    addInterest(interestName);
  });  

	$('button.add-interest').click(function(){
		var interestName = $("#interestForm").val();
    addInterest(interestName);
		$("#interestForm").val('');
	});

  
}); 

