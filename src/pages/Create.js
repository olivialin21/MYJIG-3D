import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import BG from "../components/BG"
import PostForm from "../components/PostForm"
import PostList from "../components/PostList"
import Footer from "../components/Footer"

function Create() {
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
        <>
          <PostForm />
          <PostList />
        </>
      }
      <Footer />
    </>
  );
}

export default Create;