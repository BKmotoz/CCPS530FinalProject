var city = "Toronto"

$.getJSON(
	"http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=13fd9956f71f6bd85a8354ac2a09ded4", 
	function(data) {
		console.log(data);

	var icon = 
		"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

	var temp = Math.floor(data.main.temp);
	var weather = data.weather[0].main;

	$('.icon').attr('src', icon);
	$('.weather').append(weather);
	$('.temp').append(temp);
}
);




$('.gif').gifplayer();