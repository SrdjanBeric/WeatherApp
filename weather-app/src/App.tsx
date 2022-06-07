import React, { useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

import InteractionCard from "./Components/InteractionCard/InteractionCard";
import FiveDayAverage from "./Components/FiveDayAverage/FiveDayAverage";
import WeeklyTemperature from "./Components/WeeklyTemperature/WeeklyTemperature";

function App() {
    const [average, setAverage] = useState(0);

    const colorLogic = (temperature: number) => {
        let y1 = 0;
        let y2 = 0;
        let y3 = 0;
        if (temperature <= 10) {
            y1 = 220;
            y2 = -0.94 * temperature + 62.4;
            y3 = 0.46 * temperature + 68.4;
        } else {
            y1 = -1.5172413793104 * temperature + 81.689655172414;
            y2 = 0.79310344827586 * temperature + 36.275862068966;
            y3 = -0.41379310344828 * temperature + 82.551724137931;
        }
        return [y1, y2, y3];
    };

    const handleAverageWeather = (value: number) => {
        setAverage(value);
        const colors = colorLogic(value);
        console.log(colors);
        document.body.style.backgroundImage = `linear-gradient(to bottom right, hsl(${colors[0]}, ${colors[1]}%, ${colors[2]}%) , white)`;
    };

    return (
        <Provider store={store}>
            <div className="home-page">
                <InteractionCard />
                <FiveDayAverage getAverage={handleAverageWeather} />
                <WeeklyTemperature />
            </div>
        </Provider>
    );
}

export default App;
