import ReactSlider from "react-slider";
import { climateContext } from "../../context/ClimateContext";
import { useContext } from "react";
import "./Thermometer.css";

function Thermometer() {
	const { temp, setTemp } = useContext(climateContext);

	return (
		<section>
			<h2>Thermometer</h2>
			<div className="actual-temp">Actual Temperature: {temp}°F</div>
			<ReactSlider
				value={temp}
				onAfterChange={(val) => {
					setTemp(val);
				}}
				className="thermometer-slider"
				thumbClassName="thermometer-thumb"
				trackClassName="thermometer-track"
				ariaLabel={"Thermometer"}
				orientation="vertical"
				min={0}
				max={120}
				renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
				invert
				pearling
				minDistance={1}
			/>
		</section>
	);
}

export default Thermometer;
