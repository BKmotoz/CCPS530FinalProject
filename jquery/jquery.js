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

	$('select[name="colorpicker"]').simplecolorpicker();
	$('select[name="colorpicker"]').simplecolorpicker('selectColor', '#7bd148');
	$('select[name="colorpicker"]').simplecolorpicker('destroy');

	

});
