
import './App.css';
import InputContainer from './components/InputContainer'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk' ;
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store =createStore(allReducers,applyMiddleware(thunk))


function App() {
  return (

    <Provider store={store}>
    <div className="App">
      
     
      <InputContainer/>
      {/* <CurrentDataContainer/> */}
    </div>
    </Provider>
  );
}

export default App;
