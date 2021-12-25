
const cityReducers=(state='Delhi',action)=>
{
   switch(action.type)
   {
       case 'SET_CITY':
          let newState=action.payload
          return newState;
      default:
          return state
   }
}

export default cityReducers