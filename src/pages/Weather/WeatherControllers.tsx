import { useRef } from "react";
import styles from "./weatherControllers.module.scss";
import type {
    temperatureUnitType,
    speedUnitType,
} from "../../types/WeatherDataType.ts";
import SearchSvg from "../../components/svg/Search.tsx";
import Celcius from "../../components/svg/Celcius.tsx";
import Fahrenheit from "../../components/svg/Fahrenheit.tsx";

interface WeatherControllersProps {
    temperatureUnit: temperatureUnitType;
    speedUnit: speedUnitType;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
    setTemperatureUnit: React.Dispatch<
        React.SetStateAction<temperatureUnitType>
    >;
    setSpeedUnit: React.Dispatch<React.SetStateAction<speedUnitType>>;
}

export default function WeatherControllers({
    temperatureUnit,
    speedUnit,
    setLocation,
    setTemperatureUnit,
    setSpeedUnit,
}: WeatherControllersProps) {
    const inputRef = useRef(null);

    return (
        <div className={styles.main}>
            <div className={styles.formContainer}>
                <form
                    className={styles.form}
                    onSubmit={(e) => {
                        e.preventDefault();
                        if (inputRef.current != null) {
                            setLocation(
                                (inputRef.current as HTMLFormElement).value
                            );
                        }
                    }}
                >
                    <div className={styles.inputContainer}>
                        <div>
                            <SearchSvg></SearchSvg>
                            <input
                                id="location"
                                type="text"
                                ref={inputRef}
                                placeholder="Moscow, Russia"
                            />
                        </div>
                    </div>

                    <input
                        className={styles.button}
                        type="submit"
                        value="Go!"
                    />
                </form>
            </div>

            <div className={styles.unitButtons}>
                <button
                    className={styles.button}
                    onClick={() => {
                        setTemperatureUnit((currUnit: temperatureUnitType) => {
                            return currUnit === "C" ? "F" : "C";
                        });
                    }}
                >
                    {temperatureUnit === "C" && (
                        <Celcius size="28" strokeWidth={0.75}></Celcius>
                    )}

                    {temperatureUnit === "F" && (
                        <Fahrenheit strokeWidth={0.75} size="28"></Fahrenheit>
                    )}
                </button>
                <button
                    className={styles.button}
                    onClick={() => {
                        setSpeedUnit((speedUnit: speedUnitType) => {
                            return speedUnit === "km/h" ? "m/h" : "km/h";
                        });
                    }}
                >
                    {speedUnit === "km/h" || "Km|h"}
                    {speedUnit === "m/h" || "M|h"}
                </button>
            </div>
        </div>
    );
}
