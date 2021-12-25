import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import fetchCurrentData from '../apicall/fetchCurrentData';
import { useDispatch } from 'react-redux';

function CurrentDataContainer() {
   
    const currentData = useSelector(state => state.currentData)
    const city = useSelector(state => state.city)
    const dispatch = useDispatch()
    console.log(currentData)


    return (
        <div>
            the continur
        </div>
    )
}

export default CurrentDataContainer
