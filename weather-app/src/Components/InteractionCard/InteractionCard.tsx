import { useState, useEffect } from "react";
import CitiesDropdown from "../CitiesDropdown/CitiesDropdown";
import CountriesDropdown from "../CountriesDropdown/CountriesDropdown";
import "./InteractionCard.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities, fetchCoordinates, fetchWeather } from "../../Redux";
import icon from "../../Assets/images/cloud.png";
function InteractionCard({}: {}) {
    const coordinatesData = useSelector((state: any) => state.coordinates);
    const dispatch = useDispatch();
    const [countryCode, setCountryCode] = useState<string>("");

    const handleCountry = (name: string, code: string) => {
        setCountryCode(code);
        dispatch(fetchCities(name) as any);
    };

    const handleCity = (cityName: string) => {
        dispatch(fetchCoordinates(countryCode, cityName) as any);
    };

    useEffect(() => {
        if (!!coordinatesData?.coordinates) {
            dispatch(
                fetchWeather(
                    coordinatesData?.coordinates[0],
                    coordinatesData?.coordinates[1]
                ) as any
            );
        }
    }, [coordinatesData]);
    return (
        <>
            <div className="card">
                <img style={{ width: "50px", height: "40px" }} src={icon} />
                <CountriesDropdown handleCountry={handleCountry} />
                <CitiesDropdown city={handleCity} />
            </div>
            {!!coordinatesData?.error && <div>Error</div>}
        </>
    );
}

export default InteractionCard;
