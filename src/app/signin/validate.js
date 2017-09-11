$(function() {
	$(document).ready(function(){
		$("#myform").validate({
			rules: {
				password: "required",
				cpassword: {
					required: true,
					equalTo: "#password"
				}
			},

			messages: {

				cpassword: {
					required: 'Please re-enter the password',
					equalTo: 'Please enter the same password'
				}
			}
		});

		$("#register").on('click', function(){
			var jsonObject = {
	        "name" : $("#username").val(),
	        "email" : $("#email").val(),
					"password": $("#password").val()
	        };
	        console.log(jsonObject);
		});
	});
});
