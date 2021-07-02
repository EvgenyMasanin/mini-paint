import React from 'react';
import './App.css';
import { store } from './Redux/store';
import { Provider, useDispatch } from 'react-redux';
import SignIn from './Components/Auth/SignIn';
import MainPage from './Components/MainPage/MainPage';
import Header from './Components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <ToastProvider>
          <MainPage />
        </ToastProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
