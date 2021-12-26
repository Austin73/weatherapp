import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import fetchCurrentData from '../apicall/fetchCurrentData';
import { useDispatch } from 'react-redux';
import DisplayData from './DisplayData';

function CurrentDataContainer() {
   
    const currentData = useSelector(state => state.currentData)
    const city = useSelector(state => state.city)
    console.log(currentData)
     

    return (
        <div>
           


            <DisplayData/>
        </div>
    )
}

export default CurrentDataContainer
