import "./ClimateStats.css";
import { climateContext } from "../../context/ClimateContext";
import { useContext, useEffect } from "react";

function ClimateStats() {
	const { humidity, pageTemp, temp, setPageTemp, setTemp, pageHumidity, setPageHumidity } = useContext(climateContext);
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

	useEffect(() => {
		const humidityChange = setTimeout(() => {
			if (pageHumidity < humidity) {
				setPageHumidity(pageHumidity + 2);
			} else if (pageHumidity > humidity) {
				setPageHumidity(pageHumidity - 2);
			} else {
				return clearTimeout(humidityChange);
			}
		}, 1000);
	}, [pageHumidity, humidity, setPageHumidity]);

	return (
		<div className="climate-stats">
			<div className="temperature">Temperature {pageTemp}°F</div>
			<div className="humidity">Humidity {pageHumidity}%</div>
		</div>
	);
}

export default ClimateStats;
