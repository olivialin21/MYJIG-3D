import * as QueryString from "query-string";

import Header from "../components/Header"
import BG from "../components/BG"
import RegisterForm from "../components/RegisterForm"
import Footer from "../components/Footer"

function Register() {
  // const { redirect } = QueryString.parse(props.location.search);

  return (
    <>
      <Header />
      <BG />
      <RegisterForm />
      <Footer />
    </>
  );
}

export default Register;