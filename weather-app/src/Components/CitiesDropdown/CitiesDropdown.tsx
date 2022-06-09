import { useSelector } from "react-redux";
import "./CitiesDropdown.css";

function CitiesDropdown({ city }: { city: any }) {
    const citiesData = useSelector((state: any) => state.cities);
    const selectCity = (e: any) => {
        city(e.target.value);
    };

    return (
        <div className="cities-dropdown">
            <select className="city-menu" name="city" onChange={selectCity}>
                {citiesData?.cities?.map((city: any) => {
                    return (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}

export default CitiesDropdown;
