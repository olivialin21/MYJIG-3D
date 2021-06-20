// import * as QueryString from "query-string";
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import BG from "../components/BG"
import RegisterForm from "../components/RegisterForm"
import Footer from "../components/Footer"

function Register() {
  // const { redirect } = QueryString.parse(props.location.search);

  return (
    <>
      <Navbar />
      <Header />
      <BG />
      <RegisterForm />
      <Footer />
    </>
  );
}

export default Register;