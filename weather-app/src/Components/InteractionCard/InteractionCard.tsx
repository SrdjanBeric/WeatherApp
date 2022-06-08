import React, { useState, useEffect } from "react";
import CitiesDropdown from "../CitiesDropdown/CitiesDropdown";
import CountriesDropdown from "../CountriesDropdown/CountriesDropdown";
import "./InteractionCard.css";
import { connect } from "react-redux";
import { fetchCities } from "../../Redux";
import { fetchCoordinates } from "../../Redux";
import { fetchWeather } from "../../Redux";
import icon from "../../Assets/images/cloud.png";
function InteractionCard({
    fetchCities,
    fetchCoordinates,
    coordinatesData,
    fetchWeather,
}: {
    fetchCities: any;
    fetchCoordinates: any;
    coordinatesData: any;
    fetchWeather: any;
}) {
    const [countryCode, setCountryCode] = useState<string>("");

    const handleCountry = (name: string, code: string) => {
        setCountryCode(code);
        fetchCities(name);
    };

    const handleCity = (cityName: string) => {
        fetchCoordinates(countryCode, cityName);
    };

    useEffect(() => {
        if (!!coordinatesData?.coordinates) {
            fetchWeather(
                coordinatesData?.coordinates[0],
                coordinatesData?.coordinates[1]
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

const mapStateToProps = (state: any) => {
    return {
        coordinatesData: state.coordinates,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchCities: (country: any) => dispatch(fetchCities(country)),
        fetchCoordinates: (code: string, city: string) =>
            dispatch(fetchCoordinates(code, city)),
        fetchWeather: (lat: any, lon: any) => dispatch(fetchWeather(lat, lon)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InteractionCard);
