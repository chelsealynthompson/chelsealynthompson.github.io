var weatherObject = new XMLHttpRequest();

weatherObject.open('GET','http://api.wunderground.com/api/42388727b0bf9716/forecast/geolookup/conditions/q/MN/Franklin.json', true);

weatherObject.send();

weatherObject.onload = function() {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    
    document.getElementById('weather_icon').src = weatherInfo.current_observation.icon_url;
    
    document.getElementById('windSpeed').innerHTML = weatherInfo.current_observation.wind_mph;
    
    document.getElementById('rainFall').innerHTML = weatherInfo.current_observation.precip_today_in;
    
    document.getElementById('highTemp').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    
    document.getElementById('lowTemp').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
}