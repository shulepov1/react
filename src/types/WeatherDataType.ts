interface weatherDataType {
    country: string;
    city: string;
    feelslike_c: number;
    feelslike_f: number;
    temp_c: number;
    temp_f: number;
    humidity: number;
    wind_kph: number;
    wind_mph: number;
}

type temperatureUnitType = "C" | "F";
type speedUnitType = "km/h" | "m/h";

export type { weatherDataType, temperatureUnitType, speedUnitType };
