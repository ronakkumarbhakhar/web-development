

    
        async function weather_forecaste(city){
        
            url ="http://api.weatherapi.com/v1/forecast.json?key=38145dc6ffe84a8bb6d170430211712&q="+city+"&days=1&aqi=yes&alerts=yes";
            const response = await fetch(url);
            const data = await response.json();
            const result = {'data':data};
            const res = []
            res.push(result.data);
            console.log(res);
            document.getElementById('weather_forecate_result').innerHTML = `
            ${res.map(function(info){
                return `
                    <div class="row">
                        <div class=" text-center col-lg-6 col-sm-3">
                            <p class="lead">location(reg.,country)</p><br>
                            <p class="lead">cordinates(lat,lon)</p><br>
                            <p class="lead">tempreature(cel.)</p> <br>
                            <p class="lead">wind speed(kph)</p> <br>
                            <p class="lead">humidity(%)</p><br>
                            <p class="lead">cloud(%)</p><br>
                            <p class="lead">alert</p><br>
                        </div>
                        <div class="col-lg-6 col-sm-3">
                            <p class="lead">${info.location.name},${info.location.region},${info.location.country}</p><br>
                            <p class="lead">${info.location.lat},${info.location.lon}</p><br>
                            <p class="lead">${info.current.wind_kph}</p><br>
                            <p class="lead">${info.current.humidity}</p><br>
                            <p class="lead">${info.current.cloud}</p><br>
                            <p class="lead">${info.current.cloud}</p><br>
                            <p class="lead">${info.alerts.alert}</p><br>
                        </div>
                    </div>
                `
                })}
            `
        }

        