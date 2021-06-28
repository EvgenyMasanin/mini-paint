import React from 'react';
import './App.css';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import SignIn from './Components/Auth/SignIn';
import MainPage from './Components/MainPage/MainPage';
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {/* <div className="App"> */}
          <MainPage />
          {/* <SignIn></SignIn> */}
        {/* </div> */}
      </Provider>
    </BrowserRouter>
  );
}

export default App;
