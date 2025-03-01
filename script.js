$(document).ready(function() {
    $('#weatherForm').submit(function(event) {
        event.preventDefault();
        let city = $('#city').val();
        let apiKey = 'e235b49c6ec373e6d4290197af4d073f'; // Replace with your OpenWeatherMap API key

        if(city) {
            $.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`, function(data) {
                if(data.cod === 200) {
                    $('#weatherResults').show();
                    $('#cityName').text(data.name + ', ' + data.sys.country);
                    $('#temperature').text('Temperature: ' + data.main.temp + '°C');
                    $('#weatherDescription').text('Weather: ' + data.weather[0].description);
                    $('#humidity').text('Humidity: ' + data.main.humidity + '%');
                    $('#windSpeed').text('Wind Speed: ' + data.wind.speed + ' m/s');
                } else {
                    alert('City not found! Please try again.');
                }
            }).fail(function() {
                alert('Error fetching weather data!');
            });
        } else {
            alert('Please enter a city!');
        }
    });
});
