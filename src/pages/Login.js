// import * as QueryString from "query-string";
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import BG from "../components/BG"
import LoginForm from "../components/LoginForm"
import Footer from "../components/Footer"

function Login(props) {
  // const { redirect } = QueryString.parse(props.location.search);

  return (
    <>
      <Navbar />
      <Header />
      <BG />
      <LoginForm />
      <Footer />
    </>
  );
}

export default Login;