
const HourlyDataReducer=(state={
    hourlyData:{},
    isLoading:false
},action) =>{

    switch(action.type)
    {
        case 'SETHOURLYDATA':
            return {
                hourlyData:action.payload,
                isLoading:false
            }
        case "SETHOURLYTDATALOADING":
            return{
                ...state,
                isLoading:true
            }
        default:
            return state
    }
}

export default HourlyDataReducer