import ReactDOM from 'react-dom';
import { App } from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import store from './redux/store';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <>
    <ToastContainer position="top-right" rtl={false} />
    <Provider store={store}>
    <App />
    </Provider>
  </>,
  rootElement
);
