import React, { useState } from "react";
import { connect } from "react-redux";
import "./FiveDayAverage.css";

function FiveDayAverage({
    weatherData,
    getAverage,
}: {
    weatherData: any;
    getAverage: any;
}) {
    var average = 0;

    var fiveDays = [];
    if (weatherData?.weather.length !== 0) {
        fiveDays = weatherData?.weather?.slice(0, 5);
        const dayTemp = fiveDays.map((day: any) => {
            return day.temp.day;
        });

        average = dayTemp.reduce((a: any, b: any) => a + b) / dayTemp.length;
        getAverage(average);
    }

    const FormatDate = (dt: number) => {
        var months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ];
        var tmp = new Date(dt * 1000);
        var month = months[tmp.getMonth()];
        var date = tmp.getDate();
        return `${date}. ${month}`;
    };
    if (fiveDays.length !== 0) {
        return (
            <div className="five-days-average">
                <p className="blue-font">
                    {FormatDate(fiveDays[0].dt)} - {FormatDate(fiveDays[4].dt)}
                </p>
                <p className="average-temperature white-font">
                    {Math.round(average)} °C
                </p>
            </div>
        );
    } else {
        return <div></div>;
    }
}

const mapStateToProps = (state: any) => {
    return {
        weatherData: state.weather,
    };
};

export default connect(mapStateToProps)(FiveDayAverage);
