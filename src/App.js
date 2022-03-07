
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
  const post="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Samantha_at_10_Enradhukulla_Teaser_Launch.jpg/1200px-Samantha_at_10_Enradhukulla_Teaser_Launch.jpg"
  const profile="https://c.ndtvimg.com/2021-12/ebpsij18_samantha-ruth-prahu-naga-chaitanya_295x200_08_December_21.jpg"
  const openModal=()=>{
    setShowModal(!showModal);
  }
  

  return (
          <>
          <UserProflie name="Samantha Akhineni" profile={profile} post={post} posts="43" phone="8788677472" work="Civil Engineer" likes="433" comments="34" following="234" followers="439"  />
   {/* <Navbar />
   <MainPage /> */}
   
</>
  );
}
export default App;

