// import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from "./components/header"
import Footer from "./components/footer"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer />
      <Header/>

      <main className='min-h-[calc(100vh-138px)]'>
        <Outlet/>
      </main>
      
      <Footer/>
    </>
  );
}

export default App;
