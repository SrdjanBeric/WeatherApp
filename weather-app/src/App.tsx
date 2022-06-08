import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

import InteractionCard from "./Components/InteractionCard/InteractionCard";
import FiveDayAverage from "./Components/FiveDayAverage/FiveDayAverage";
import WeeklyTemperature from "./Components/WeeklyTemperature/WeeklyTemperature";

function App() {
    const colorLogic = (temperature: number) => {
        const h =
            temperature <= 10
                ? 220
                : -1.5172413793104 * temperature + 81.689655172414;
        const s =
            temperature <= 10
                ? -0.94 * temperature + 62.4
                : 0.79310344827586 * temperature + 36.275862068966;
        const l =
            temperature <= 10
                ? 0.46 * temperature + 68.4
                : -0.41379310344828 * temperature + 82.551724137931;
        return [h, s, l];
    };

    const handleAverageWeather = (value: number) => {
        const colors = colorLogic(value);
        document.body.style.backgroundImage = `linear-gradient(to bottom right, hsl(${colors?.[0]}, ${colors[1]}%, ${colors[2]}%) , white)`;
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
