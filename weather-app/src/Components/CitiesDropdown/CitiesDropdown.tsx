import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./CitiesDropdown.css";

function CitiesDropdown({ citiesData, city }: { citiesData: any; city: any }) {
    const renderOptions = citiesData?.cities?.map((city: any) => {
        return (
            <option key={city} value={city}>
                {city}
            </option>
        );
    });

    const handleChange = (e: any) => {
        city(e.target.value);
    };
    return (
        <div className="cities-dropdown">
            <select className="city-menu" name="city" onChange={handleChange}>
                {renderOptions}
            </select>
        </div>
    );
}

const mapStateToProps = (state: any) => {
    return {
        citiesData: state.cities,
    };
};

export default connect(mapStateToProps)(CitiesDropdown);
