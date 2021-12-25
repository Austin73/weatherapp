export const set_city=(city)=>{
    return{
        type:'SET_CITY',
        payload:city
    }
}

export const change_city=(changecity)=>{
    return{
        type:'CHANGE_CITY',
        payload:changecity
    }
}
export const setCurrentData=(data)=>{
    return{
        type:"SETCURRENTDATA",
        payload:data
    }
}
export const currentDataLoading=()=>{
    return{
        type: "CURRENTDATALOADING"
    }
}
export const setHourlyData=(data)=>{
    return{
        type:"SETHOURLYDATA",
        payload:data
    }
}
export const setHourlyDataLoading=()=>{
    return{
        type: "SETHOURLYTDATALOADING"
    }
}
export const setWeekData=(data)=>{
    return{
        type:"SETWEEKDATA",
        payload:data
    }
}
export const setWeekDataLoading=()=>{
    return{
        type: "SETWEEKDATALOADING"
    }
}