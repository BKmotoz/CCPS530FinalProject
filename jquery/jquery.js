window.onload = function() {
 
    alert( "Hello Visitor" );
    $( "a" ).click(function( event ) {
        alert( "Thanks for visiting!" );
 
    });

};

$(document).ready(function() {
	$("#button").click(
		function() {
			$("body").css("color", "#5a82b4");
		}
	);

	$('.gif').gifplayer();
	$('#multiscroll').multiscroll();
});