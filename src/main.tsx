import ReactDOM from 'react-dom';
import { App } from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <>
    <ToastContainer position="top-right" rtl={false} />
    <App />
  </>,
  rootElement
);
