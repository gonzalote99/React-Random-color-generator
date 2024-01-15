import {useState} from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
 const [colorCode, setColorCode] = useState('');
  const changeColor = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setColorCode(randomColor);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(colorCode);
    toast.success('code copied', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 2000,

    });

  };

  return(
    <div style={{
      background: `${colorCode}`,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'ease-in-out'
    }}>
    <ToastContainer position='top-right' autoClose={2000} />
      <div className='d-flex justify-content-center'>
      <button 
           className='btn btn-primary rounded-0 py-2 mt-4'
        onClick={changeColor}
        style={{
          boxShadow: '5px 5px 0 black'
        }}
        > random color</button>
      </div>
      <h2 className='text-center text-white text-uppercase mt-4 fw-bold' style={{textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)', cursor: 'pointer'}} onClick={copyToClipboard}
        >{colorCode}</h2>
    </div>
  );


};

export default App;