import React from 'react'
import { useSelector } from 'react-redux'
import '../styles/displayData.css'
import cloudy from '../assests/cloudy.png'
import sunrise from '../assests/sunrise.png'
import position from '../assests/position.png'
function DisplayData() {

    const currentData = useSelector(state => state.currentData)
    return (
        <div className='weatherContainer'>
            <div className='header'>
                <b>Weather {currentData.currentData.name} </b>- Sunday Dec 26
            </div>
            <div className='dataContainer'>
                <div style={{ flex: '1' }}>
                    <img src={cloudy} width='20%' />
                    <br />
                    {currentData.currentData.weather[0].description}
                </div>
                <div style={{ flex: '2' }}>
                    <h4>Currently</h4>
                    <div>
                        Temp :{parseInt(currentData.currentData.main.temp - 273)}&deg;C
                    </div>
                    <div>
                        Feels :{parseInt(currentData.currentData.main.feels_like - 273)}&deg;C
                    </div>
                    <div>
                        Wind :{currentData.currentData.wind.speed} Km/h
                    </div>
                    <div>
                        Max Temp: {parseInt(currentData.currentData.main.temp_max -273)}&deg;C
                    </div>
                    <div>
                       Min Tem:{parseInt(currentData.currentData.main.temp_min -273)}&deg;C
                    </div>
                    <div>
                        Humidity :{currentData.currentData.main.humidity }%
                    </div>

                </div>
            </div>
            <div className='otherInfo'>
               <div>
                   <img src={sunrise}/>&nbsp;
                   Sunrise {currentData.currentData.sys.sunrise}&nbsp;   Sunset {currentData.currentData.sys.sunset}
               </div>
               <div>
                   <img src={position}/> &nbsp;
                   Latitude {currentData.currentData.coord.lon}&nbsp; Longitude :{currentData.currentData.coord.lat}
               </div>
            </div>



        </div>
    )
}

export default DisplayData
