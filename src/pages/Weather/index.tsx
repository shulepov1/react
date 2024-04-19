import { useState, useEffect, useContext, useRef } from "react";
import { AppContext } from "../../App";
import { useQuery } from "react-query";

export default function WeatherPage() {
    const { setActiveIndex } = useContext(AppContext);
    useEffect(() => {
        setActiveIndex(3);
    }, []);

    const [weatherData, setWeatherData] = useState({});
    const [location, setLocation] = useState("Moscow");
    const [temperatureUnit, setTemperatureUnit] = useState("C");
    const [speedUnit, setSpeedUnit] = useState("km/h");
    const [isFetchingError, setIsFetchingError] = useState(false);

    const { isLoading, isError, isFetching, data, error, refetch } = useQuery(
        ["weather", location],
        () => {
            console.log("LOCATION", location);
            fetch(
                `https://api.weatherapi.com/v1/current.json?key=${
                    import.meta.env.VITE_API_KEY
                }&q=${location}&aqi=no`
            )
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    if (data.error) {
                        setIsFetchingError(true);
                        return;
                    }
                    setIsFetchingError(false);
                    setWeatherData({
                        country: data.location.country,
                        city: data.location.name,
                        feelslike_c: data.current.feelslike_c,
                        feelslike_f: data.current.feelslike_f,
                        temp_c: data.current.temp_c,
                        temp_f: data.current.temp_f,
                        humidity: data.current.humidity,
                        wind_kph: data.current.wind_kph,
                        wind_mph: data.current.wind_mph,
                    });
                });
        }
    );

    const inputRef = useRef(null);
    if (isLoading || isFetching) return <h1>Loading...</h1>;
    if (isError) {
        console.log((error as Error).message);
        return <h1>Error!</h1>;
    }
    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setLocation(inputRef.current.value);
                }}
            >
                <label htmlFor="location">location</label>
                <input
                    id="location"
                    type="text"
                    ref={inputRef}
                    placeholder="Moscow, Russia"
                />
                <input type="submit" value="Go!" />
            </form>
            <div>
                <button
                    onClick={() => {
                        setTemperatureUnit((currUnit) => {
                            return currUnit === "C" ? "F" : "C";
                        });
                    }}
                >
                    °{temperatureUnit}
                </button>
                <button
                    onClick={() => {
                        setSpeedUnit((speedUnit) => {
                            return speedUnit === "km/h" ? "m/h" : "km/h";
                        });
                    }}
                >
                    {speedUnit}
                </button>
            </div>
            weather
            {isFetchingError ? (
                <div>
                    <p>nothing was found</p>
                    <p>try again</p>
                </div>
            ) : (
                <div>
                    <div>country {weatherData.country}</div>
                    <div>city {weatherData.city}</div>
                    <div>
                        temperature{" "}
                        {temperatureUnit === "C"
                            ? weatherData.temp_c
                            : weatherData.temp_f}
                        {" °"}
                        {temperatureUnit}
                    </div>
                    <div>
                        feels like{" "}
                        {temperatureUnit === "C"
                            ? weatherData.feelslike_c
                            : weatherData.feelslike_f}
                        {" °"}
                        {temperatureUnit}
                    </div>
                    <div>humidity {weatherData.humidity}%</div>
                    <div>
                        wind speed{" "}
                        {speedUnit === "km/h"
                            ? weatherData.wind_kph
                            : weatherData.wind_mph}{" "}
                        {speedUnit}
                    </div>
                </div>
            )}
        </div>
    );
}
