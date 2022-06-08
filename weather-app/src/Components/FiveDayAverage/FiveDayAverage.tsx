import { connect } from "react-redux";
import "./FiveDayAverage.css";

const months = [
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

const SECONDS_TO_MILISECONDS = 1000;

function FiveDayAverage({
    weatherData,
    getAverage,
}: {
    weatherData: any;
    getAverage: any;
}) {
    let fiveDayAverageTemp = 0;
    let fiveDays = [];
    if (weatherData?.weather?.length) {
        fiveDays = weatherData?.weather?.slice(0, 5);
        const dayTemp = fiveDays.map((day: any) => {
            return day.temp.day;
        });

        fiveDayAverageTemp =
            dayTemp.reduce((a: any, b: any) => a + b) / dayTemp.length;
        getAverage(fiveDayAverageTemp);
    }

    const FormatDate = (unix_timestamp: number) => {
        const datetime = new Date(unix_timestamp * SECONDS_TO_MILISECONDS);
        return `${datetime.getDate()}. ${months[datetime.getMonth()]}`;
    };

    return (
        <>
            {fiveDays?.length ? (
                <div className="five-days-average">
                    <p className="blue-font">
                        {FormatDate(fiveDays[0].dt)} -{" "}
                        {FormatDate(fiveDays[4].dt)}
                    </p>
                    <p className="average-temperature white-font">
                        {Math.round(fiveDayAverageTemp)} °C
                    </p>
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
}

const mapStateToProps = (state: any) => {
    return {
        weatherData: state.weather,
    };
};

export default connect(mapStateToProps)(FiveDayAverage);
