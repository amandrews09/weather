document.getElementById("search").addEventListener("click", function (){
    var city = document.getElementById("city").value
    var url = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=f38fa3321fedb33c87628113663fea22&units=imperial"
    fetch(url)
    .then(function(response){
        return response.json()
    })
    //Day of weather forecast
    .then(function(data){
        console.log(data)
        var currentDay = data.list[0]
        var cityName = document.createElement("h3")
        cityName.innerText = data.city.name 
        document.getElementById("currentWeather").appendChild(cityName)
        var date = document.createElement("p")
        date.innerText =dayjs.unix(currentDay.dt).format("MM/DD/YYYY")
        document.getElementById("currentWeather").appendChild(date)
        var icon = document.createElement("img")
        icon.src="https://openweathermap.org/img/wn/"+currentDay.weather[0].icon+".png"
        document.getElementById("currentWeather").appendChild(icon)
        var temperature = document.createElement("p")
        temperature.innerText = "Temperature: "+currentDay.main.temp+"°F"
        document.getElementById("currentWeather").appendChild(temperature)
        var humidity = document.createElement("p")
        humidity.innerText = "Humidity: "+currentDay.main.humidity+"%"
        document.getElementById("currentWeather").appendChild(humidity)
        var wind = document.createElement("p")
        wind.innerText = "Wind: "+currentDay.wind.speed+"mph"
        document.getElementById("currentWeather").appendChild(wind)
        //Five Day Weather Forecast
        // for (var i= 7; i<data.list.length; i+=8){
        //    var fiveDay = data.list[i]
        


        // }
    })
})