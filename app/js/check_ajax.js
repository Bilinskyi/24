$(document).ready(function() {

	$('#feedback-timer-1').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-timer-1')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";
							// $.fancybox.close()
							// var message = $('.modal');
							// $.fancybox(message);

						}
					}  
				}); 
		}
	});


	$('#feedback-timer-2').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-timer-2')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";
							// $.fancybox.close()
							// var message = $('.modal');
							// $.fancybox(message);

						}
					}  
				}); 
		}
	});


	$('#feedback-valid-pf-1').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-pf-1')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx1.html";
							// $.fancybox.close()
							// var message = $('.modal');
							// $.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#feedback-valid-pf-2').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-pf-2')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx1.html";
							// $.fancybox.close()
							// var message = $('.modal');
							// $.fancybox(message);

						}
					}  
				}); 
		}
	});



	$('#feedback-valid-maraph').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-maraph')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";
						
					}
				}  
			}); 
		}
	});


	$('#feedback-valid-stock').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-stock')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";
						
					}
				}  
			}); 
		}
	});


	$('#feedback-valid-question').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-question')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";
						
					}
				}  
			}); 
		}
	});





	$('#feedback-valid-choose').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-choose')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";
						
					}
				}  
			}); 
		}
	});


	$('#feedback-valid-written').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-written')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";
						
					}
				}  
			}); 
		}
	});


	$('#feedback-valid-map').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-map')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";
						
					}
				}  
			}); 
		}
	});


	$('#feedback-valid-form-ex').validate({
		rules:{
			"phone":{required:true}
		},
		messages:{
			"phone":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-form-ex')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
						window.location.href = "thx.html";
						
					}
				}  
			}); 
		}
	});

	
	

});
