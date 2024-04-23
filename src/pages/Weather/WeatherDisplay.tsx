import type {
    weatherDataType,
    temperatureUnitType,
    speedUnitType,
} from "../../types/WeatherDataType.ts";
import styles from "./weatherDisplay.module.scss";
import Wind from "../../components/svg/Wind.tsx";
import Humidity from "../../components/svg/Humidity.tsx";

interface WeatherDisplayProps {
    isFetchingError: boolean;
    weatherData: weatherDataType;
    temperatureUnit: temperatureUnitType;
    speedUnit: speedUnitType;
}

export default function WeatherDisplay({
    isFetchingError,
    weatherData,
    temperatureUnit,
    speedUnit,
}: WeatherDisplayProps) {
    return (
        <div>
            {isFetchingError ? (
                <div>
                    <p>nothing was found</p>
                    <p>try again</p>
                </div>
            ) : (
                <div className={styles.main}>
                    <div className={styles.topRow}>
                        <div>
                            <div>
                                <div className={styles.mainTemperature}>
                                    <div>
                                        {temperatureUnit === "C"
                                            ? weatherData.temp_c
                                            : weatherData.temp_f}
                                    </div>
                                    <div>
                                        {" °"}
                                        {temperatureUnit}
                                    </div>
                                </div>
                            </div>
                            <div className={styles.feelsLikeTemp}>
                                feels like{" "}
                                {temperatureUnit === "C"
                                    ? weatherData.feelslike_c
                                    : weatherData.feelslike_f}
                                {" °"}
                                {temperatureUnit}
                            </div>
                        </div>
                        <div className={styles.separator}></div>
                        <div className={styles.location}>
                            <div className={styles.location__city}>
                                {weatherData.city}
                            </div>
                            <div className={styles.location__country}>
                                {weatherData.country}
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomRow}>
                        <div className={styles.itemExtra}>
                            <Humidity size={"24"}></Humidity>
                            humidity {weatherData.humidity}%
                        </div>
                        <div className={styles.itemExtra}>
                            <Wind size="24"></Wind>
                            wind speed{" "}
                            {speedUnit === "km/h"
                                ? weatherData.wind_kph
                                : weatherData.wind_mph}{" "}
                            {speedUnit}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
