$(document).ready(function() {
	$("#register").click(function() {

		if ($("#password").val() != $("#cpassword").val()) {
				alert("Your passwords don't match. Try again?");
			}  function(data) {
			if (data == 'You have Successfully Registered.....') {
			$("form")[0].reset();
			}
			alert(data);
		}
	});
});