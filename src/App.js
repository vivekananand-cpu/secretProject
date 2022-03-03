
import { UserGroupIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';

import MainPage from './components/MainPage';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import UserProflie from "./components/UserProflie";

function App() {
  const [showModal,setShowModal]=useState(false);
  const openModal=()=>{
    setShowModal(!showModal);
  }
  

  return (
          <>
          <UserProflie />
   {/* <Navbar />
   <MainPage /> */}
   {/* <button onClick={openModal} className="z-[1] bg-red-400 rounded-lg p-3 mt-8 hover:shadow-lg active:scale-105 transtion-all duration-500 ease-out">I am a modal</button>
   <Modal className="" showModal={showModal} setShowModal={setShowModal}  />
   <div className="bg-red-800 z-[2]">other content</div> */}
</>
  );
}

export default App;
