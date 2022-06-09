import "./WeeklyTemperature.css";
import { useSelector } from "react-redux";

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const SECONDS_TO_MILISECONDS = 1000;

function WeeklyTemperature() {
    const weatherData = useSelector((state: any) => state.weather);
    let week = [];
    const GetDayInWeek = (unix_timestamp: number) => {
        const datetime = new Date(unix_timestamp * SECONDS_TO_MILISECONDS);
        return days[datetime.getDay()];
    };

    if (!!weatherData?.weather) {
        week = weatherData?.weather?.map((day: any) => {
            return [GetDayInWeek(day.dt), day.temp.day];
        });
    }

    return (
        <>
            {!!week ? (
                <div className="weekly-temperature">
                    {week.map((day: any) => {
                        return (
                            <div className="weekly-temperature-day">
                                <p className="blue-font">{day[0]}</p>
                                <p className="white-font">
                                    {Math.round(day[1])} °C
                                </p>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
}

export default WeeklyTemperature;
