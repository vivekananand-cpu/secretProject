
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
   
</>
  );
}

export default App;
