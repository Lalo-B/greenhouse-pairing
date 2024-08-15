// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { createContext, useState } from "react";

export const climateContext = createContext();

const ClimateProvider = (props) => {
    const [temp, setTemp] = useState(50);
    const [humidity, setHumidity] = useState(40);
    const [pageTemp, setPageTemp] = useState(temp);
    const [pageHumidity, setPageHumidity] = useState(temp);


    return(
        <climateContext.Provider value={{temp, setTemp, humidity, setHumidity, pageTemp, setPageTemp, pageHumidity, setPageHumidity}}>
            {props.children}
        </climateContext.Provider>
    )
};
export default ClimateProvider;
