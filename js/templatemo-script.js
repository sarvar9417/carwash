/**
 *	www.templatemo.com
 */

/* HTML document is loaded. DOM is ready.
-----------------------------------------*/
$(document).ready(function () {

	// Mobile menu
	$('.mobile-menu-icon').click(function () {
		$('.tm-nav').toggleClass('show');
	});

	// http://stackoverflow.com/questions/2851663/how-do-i-simulate-a-hover-with-a-touch-in-touch-enabled-browsers
	$('body').bind('touchstart', function () { });
});


function sendMessage() {
	var tempParams = {
		name: document.getElementById("name").value,
		phone: document.getElementById("phone").value,
		message: document.getElementById("message").value
	}

	emailjs.send("service_x3bgq8p", "template_8a5mk77", tempParams)
		.then(
			() => {
				document.getElementById("send").style.display = "block"
			}
	)
	.catch(()=>{
		document.getElementById("error").style.display = "block"

	})
}