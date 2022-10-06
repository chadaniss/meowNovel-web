import { ToastContainer } from 'react-toastify';
import SpinnerComponent from './components/ui/SpinnerComponent';
import { useLoading } from './contexts/LoadingContext';
import Router from './route/Router';

function App() {
  const { loading } = useLoading();

  return (
    <>
      {loading && <SpinnerComponent />}
      <Router />
      <ToastContainer position='top-left' />
    </>
  );
}

export default App;
