// $(document).ready(function(){
//    $('#myform').submit(function(){
//      var form = $(this),
//      formData = form.serialize(),
//      formUrl = form.attr('action'),
//      formMethod = form.attr('method'),
//      responseMsg = $('#result')
//
//      responseMsg.hide()
//            .addClass('response-waiting')
//            .text('Please Wait...')
//            .fadeIn(200);
//
//            $.ajax({
//              url: formUrl,
//              type: formMethod,
//              data: formData,
//              success:function(data){
//                var responseData = jQuery.parseJSON(data),
//                klass = '';
//              }
//            })
//
//            //response conditional
//            switch(responseData.status){
//                 case 'error':
//                     klass = 'response-error';
//                 break;
//                 case 'success':
//                     klass = 'response-success';
//                 break;
//            }
//
//            //show reponse message
//             responseMsg.fadeOut(200,function(){
//                 $(this).removeClass('response-waiting')
//                        .addClass(klass)
//                        .text(responseData.message)
//                        .fadeIn(200,function(){
//                            //set timeout to hide response message
//                            setTimeout(function(){
//                                responseMsg.fadeOut(200,function(){
//                                    $(this).removeClass(klass);
//                                });
//                            },3000)
//                         })
//             })
//
//         return false;
//     })
// })

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
  });
});
