import { SearchBox } from "./SearchBox";
import { InfoBox } from "./InfoBox";
import { useState } from "react";

function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 38.94,
        humidity: 58,
        temp: 33.05,
        tempMax: 33.05,
        tempMin: 33.05,
        weather: "haze",
        windSpeed: 5.2,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div>
            <h2>Weather Display</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    );
};

export { WeatherApp };