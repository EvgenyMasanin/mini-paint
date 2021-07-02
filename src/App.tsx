import './App.css';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import MainPage from './Components/MainPage/MainPage';
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
