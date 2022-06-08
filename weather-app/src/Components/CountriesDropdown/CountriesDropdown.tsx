import React from "react";
import "./CountriesDropdown.css";
import countries from "../../Assets/Countries.json";

const EMOJI_CONSTANT = 127397;

function CountriesDropdown({ handleCountry }: { handleCountry: any }) {
    const convertToFlagEmoji = (countryCode: string) => {
        const codePoints = countryCode
            .toUpperCase()
            .split("")
            .map((char) => EMOJI_CONSTANT + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    };

    const renderOptions = countries.map((country) => {
        return (
            <option key={country.Iso2} value={country.name}>
                {country.Iso2} {convertToFlagEmoji(country.Iso2)}
            </option>
        );
    });

    const selectCountry = (e: any) => {
        const value = countries.filter((item) => {
            return item.name == e.target.value;
        });
        handleCountry(e.target.value, value[0].Iso2);
    };

    return (
        <div className="countries-dropdown">
            <select
                className="code-menu"
                name="country"
                onChange={selectCountry}
            >
                {renderOptions}
            </select>
        </div>
    );
}

export default CountriesDropdown;
