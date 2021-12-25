
const CurrentDataReducer=(state={
    currentData:{},
    isLoading:false
},action) =>{

    switch(action.type)
    {
        case 'SETCURRENTDATA':
            return {
                currentData:action.payload,
                isLoading:false
            }
        case "CURRENTDATALOADING":
            return{
                ...state,
                isLoading:true
            }
        default:
            return state
    }
}

export default CurrentDataReducer