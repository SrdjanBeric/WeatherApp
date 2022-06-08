import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/store";

import InteractionCard from "./Components/InteractionCard/InteractionCard";
import FiveDayAverage from "./Components/FiveDayAverage/FiveDayAverage";
import WeeklyTemperature from "./Components/WeeklyTemperature/WeeklyTemperature";

const H1 = 220;
const H2_K = -1.5172413793104;
const H2_N = 81.689655172414;

const S1_K = -0.94;
const S1_N = 62.4;
const S2_K = 0.79310344827586;
const S2_N = 36.275862068966;

const L1_K = 0.46;
const L1_N = 68.4;
const L2_K = -0.41379310344828;
const L2_N = 82.551724137931;

function App() {
    const colorLogic = (temperature: number) => {
        const h = temperature <= 10 ? H1 : H2_K * temperature + H2_N;
        const s =
            temperature <= 10
                ? S1_K * temperature + S1_N
                : S2_K * temperature + S2_N;
        const l =
            temperature <= 10
                ? L1_K * temperature + L1_N
                : L2_K * temperature + L2_N;
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
