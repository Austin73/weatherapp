import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { change_city, set_city } from '../actions'
import '../styles/InputContainer.css'
import { useEffect } from 'react'
import fetchCurrentData from '../apicall/fetchCurrentData';

function InputContainer() {

    const city = useSelector(state => state.city)
    const dispatch = useDispatch()
    
    const currentData = useSelector(state => state.currentData)
    const changecity=useSelector(state=>state.changecity)
    console.log(currentData.currentData)
    console.log(changecity)

    useEffect(() => {
        
        dispatch(fetchCurrentData(changecity))
    }, [changecity])

    return (
        <div>
            <input type="search"
                name='city'
                placeholder='Enter City'
                autoFocus
                value={city}
                onChange={(e) => {
                    dispatch(set_city(e.target.value))
                }}

            />
            <button onClick={
                () => {
                    dispatch(change_city(city))
                }
            }>Search</button>
        </div>
    )
}

export default InputContainer
