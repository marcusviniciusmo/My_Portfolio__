import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import 'react-toastify/dist/ReactToastify.css';

export function Toastify() {
  const { theme } = useContext(ThemeContext);

  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme={theme.title.toLowerCase()}
    />
  );
}
