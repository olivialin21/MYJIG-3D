import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import BG from "../components/BG"
import AboutUs from "../components/AboutUs"
import Steps from "../components/Steps"
import Footer from "../components/Footer"

function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  },[])

  return (
    <>
    <Navbar />
    <Header />
    <BG />
    {loading ? 
      <></>
      : 
      <AboutUs />
    }
    <Steps />
    <Footer />
    </>
  );
}

export default Home;