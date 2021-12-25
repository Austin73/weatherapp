
const WeeklyDataReducer=(state={
    weeklyData:{},
    isLoading:false
},action) =>{

    switch(action.type)
    {
        case 'SETWEEKDATA':
            return {
                weeklyData:action.payload,
                isLoading:false
            }
        case "SETWEEKDATALOADING":
            return{
                ...state,
                isLoading:true
            }
        default:
            return state
    }
}

export default WeeklyDataReducer