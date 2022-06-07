import React from "react";
import "./WeeklyTemperature.css";
import { connect } from "react-redux";

function WeeklyTemperature({ weatherData }: { weatherData: any }) {
    var week = [];

    const GetDayInWeek = (dt: number) => {
        var days = [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
        ];
        var tmp = new Date(dt * 1000);
        var day = days[tmp.getDay()];
        return day;
    };

    if (weatherData?.weather.length !== 0) {
        week = weatherData?.weather?.map((day: any) => {
            const weekDay = GetDayInWeek(day.dt);
            return [weekDay, day.temp.day];
        });
    }
    console.log(week);

    if (!!week) {
        const renderWeek = week.map((day: any) => {
            return (
                <div className="weekly-temperature-day">
                    <p className="blue-font">{day[0]}</p>
                    <p className="white-font">{Math.round(day[1])} °C</p>
                </div>
            );
        });
        return <div className="weekly-temperature">{renderWeek}</div>;
    } else {
        return <div></div>;
    }
}

const mapStateToProps = (state: any) => {
    return {
        weatherData: state.weather,
    };
};

export default connect(mapStateToProps)(WeeklyTemperature);
