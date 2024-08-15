import "./ClimateStats.css";
import { climateContext } from "../../context/ClimateContext";
import { useContext, useEffect } from "react";

function ClimateStats() {
	const { humidity, pageTemp, temp, setPageTemp, setTemp } = useContext(climateContext);
	useEffect(() => {
		const tempChange = setTimeout(() => {
			if (pageTemp < temp) {
				setPageTemp(pageTemp + 1);
			} else if (pageTemp > temp) {
				setPageTemp(pageTemp - 1);
			} else {
				return clearTimeout(tempChange);
			}
		}, 1000);
	}, [pageTemp, setTemp, temp, setPageTemp]);

	return (
		<div className="climate-stats">
			<div className="temperature">Temperature {pageTemp}°F</div>
			<div className="humidity">Humidity {humidity}%</div>
		</div>
	);
}

export default ClimateStats;
