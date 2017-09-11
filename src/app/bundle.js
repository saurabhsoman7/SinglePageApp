(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

	var fs = require('fs');
	var file = './Storage/data.json';
	var obj = {
		users: []
	};

	fs.readFileSync(file, 'utf-8', function readFileCallback(err, data) {
		if (err) {
			console.log(err);
		}
		else {
			obj = JSON.parse(data);
			obj.users.push({
				"Name" : "saurabh", //"Name"
				"email" : "saurabh.soman7@gmail.com",
				"password" : "11111111"
			});
			json = JSON.stringify(obj);
			js.writeFile(file, json, 'utf-8', callback);
		}
	});

	// var jsonObject = {
	//   "Name" : $("#username").val(), //"Name"
	//   "email" : $("#email").val(),
	//   "password" : $("#password").val()
	// }

},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);


// fs.readFile(file, function(err, obj){
// 	console.dir(obj)
// })


// $(function() {
// 	$(document).ready(function(){
// 		$("#myform").validate({
// 			rules: {
// 				password: "required",
// 				cpassword: {
// 					required: true,
// 					equalTo: "#password"
// 				}
// 			},
//
// 			messages: {
//
// 				cpassword: {
// 					required: 'Please re-enter the password',
// 					equalTo: 'Please enter the same password'
// 				}
// 			}
// 		});
//
//     var output = document.getElementById('myform');
//     var ajaxhttp = new XMLHttpRequest();
//
//     ajaxhttp.open("GET", file, true);
//     ajaxhttp.setRequestHeader("content-type", "application/json");
//     ajaxhttp.onreadystatechange = function() {
//       if(ajaxhttp.readyState == 4 && ajaxhttp.status == 200){
//         var jsonobj = ajaxhttp.responseText;
//         var jcontent = JSON.parse(jsonobj);
//         console.log(jsonobj);
//       }
//
// 		$("#register").on('click', function(form){
//
//         var jsonObject = {
//             "Name" : $("#username").val(), //"Name"
//             "email" : $("#email").val(),
//             "password" : $("#password").val()
//         };
        //
        // $.each(jsonObj,function(i,v){
        //   if (v == jcontent.length) {
        //     v.Username = "Thomas";
        //     return false;
        //   }
        // });
				// ajaxhttp.open("POST", file, true);
        // fs.writeFile(file, JSON.stringify(file, jsonObject), {flag: 'a'}, function(err) {
        //   if(err) return console.log(err);
        //   console.log(JSON.stringify(file, null, 2));
        //   console.log('writing to' +file);
        // });

        // $.each(jsonObj,function(i,v){
        //   if (v.Id == 3) {
        //     v.Username = "Thomas";
        //     return false;
        //   }
        // });
//       });
// 		}
// 	});
// });
