
const changeCityReducer=(state='Delhi',action)=>
{
   switch(action.type)
   {
       case 'CHANGE_CITY':
          let newState=action.payload
          return newState;
      default:
          return state
   }
}

export default changeCityReducer