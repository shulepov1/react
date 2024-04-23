import { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import { useQuery } from "react-query";
import styles from "./index.module.scss";
import type {
    weatherDataType,
    temperatureUnitType,
    speedUnitType,
} from "../../types/WeatherDataType.ts";
import WeatherControllers from "./WeatherControllers.tsx";
import WeatherDisplay from "./WeatherDisplay.tsx";

export default function WeatherPage() {
    const { setActiveIndex } = useContext(AppContext);
    useEffect(() => {
        setActiveIndex(3);
    }, [setActiveIndex]);

    const [weatherData, setWeatherData] = useState<weatherDataType>({
        country: "",
        city: "",
        feelslike_c: -1,
        feelslike_f: -1,
        temp_c: -1,
        temp_f: -1,
        humidity: -1,
        wind_kph: -1,
        wind_mph: -1,
    });
    const [location, setLocation] = useState("Moscow");
    const [temperatureUnit, setTemperatureUnit] =
        useState<temperatureUnitType>("C");
    const [speedUnit, setSpeedUnit] = useState<speedUnitType>("km/h");
    const [isFetchingError, setIsFetchingError] = useState(false);

    const { isLoading, isError, isFetching, error } = useQuery(
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

    if (isLoading || isFetching) return <h1>Loading...</h1>;
    if (isError) {
        console.log((error as Error).message);
        return <h1>Error!</h1>;
    }
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <WeatherControllers
                    setLocation={setLocation}
                    temperatureUnit={temperatureUnit}
                    setTemperatureUnit={setTemperatureUnit}
                    speedUnit={speedUnit}
                    setSpeedUnit={setSpeedUnit}
                ></WeatherControllers>
                <WeatherDisplay
                    isFetchingError={isFetchingError}
                    weatherData={weatherData}
                    temperatureUnit={temperatureUnit}
                    speedUnit={speedUnit}
                ></WeatherDisplay>
            </div>
        </div>
    );
}
