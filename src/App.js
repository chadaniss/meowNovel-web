import { ToastContainer } from 'react-toastify';
import Router from './route/Router';

function App() {
  return (
    <div className='App'>
      <Router />
      <ToastContainer position='top-left' />
    </div>
  );
}

export default App;
