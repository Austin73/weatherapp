import { currentDataLoading, setCurrentData } from "../actions"


function fetchCurrentData(city) {

    return function (dispatch) {
        console.log(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=37c73aa48ddde8568ba7817ff047302d`)
        dispatch(currentDataLoading())
        
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37c73aa48ddde8568ba7817ff047302d`)
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(data=>{
          
            console.log(data)
            console.log("int fetch funciton")
            dispatch(setCurrentData(data))
        })
        
    }
}

export default fetchCurrentData