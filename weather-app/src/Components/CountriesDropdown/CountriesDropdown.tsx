import React from "react";
import "./CountriesDropdown.css";
import countries from "../../Assets/Countries.json";

function CountriesDropdown({ country }: { country: any }) {
    const renderOptions = countries.map((country) => {
        return (
            <option key={country.Iso2} value={country.name}>
                {country.Iso2} {getFlagEmoji(country.Iso2)}
            </option>
        );
    });

    function getFlagEmoji(countryCode: string) {
        const codePoints = countryCode
            .toUpperCase()
            .split("")
            .map((char) => 127397 + char.charCodeAt(0));
        return String.fromCodePoint(...codePoints);
    }

    const handleChange = (e: any) => {
        var value = countries.filter(function (item) {
            return item.name == e.target.value;
        });
        country(e.target.value, value[0].Iso2);
    };

    return (
        <div className="countries-dropdown">
            <select
                className="code-menu"
                name="country"
                onChange={handleChange}
            >
                {renderOptions}
            </select>
        </div>
    );
}

export default CountriesDropdown;
