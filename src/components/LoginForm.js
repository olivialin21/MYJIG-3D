import React, { useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { checkLogin, loginToFirebase, rememberLoginUser } from '../actions'
import { StoreContext } from "../store"

export default function LoginForm() {
  const { state:{ userSignin: { userInfo, loading, error, remember } }, dispatch } = useContext(StoreContext);
  // const history = useHistory();

  const onFinish = async (values) => {
    console.log('Received values of form: ', values);
    await loginToFirebase(dispatch, values);
  };

  const onChange = e => {
    rememberLoginUser(dispatch, e.target.checked);
  }

  // useEffect(() => {    
  //   if( userInfo && checkLogin(dispatch) ) history.push(redirect);
  // }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps

  return(
    <div className="loginform">
      <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" onClick={onChange}/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onFinish}>Submit</button>
      </form>
      {error === "" ? (
          <></>
        ) : (
          <div className="login-form__error-wrap">
            <h3 className="login-form__error-title">
              {"  "}There was a problem
            </h3>
            <p className="login-form__error-message">{error}</p>
          </div>
        )}
    </div>
    
  );
}


// const LoginCard = ({ redirect }) => {
//   const { state:{ userSignin: { userInfo, loading, error, remember } }, dispatch } = useContext(StoreContext);
//   const [form] = Form.useForm();
//   const history = useHistory();
 
//   const onFinish = async (values) => {
//     console.log('Received values of form: ', values);
//     await loginToFirebase(dispatch, values);
//   };

//   const onChange = e => {
//     rememberLoginUser(dispatch, e.target.checked);
//   }

//   useEffect(() => {    
//     if( userInfo && checkLogin(dispatch) ) history.push(redirect);
//   }, [ userInfo ]);// eslint-disable-line react-hooks/exhaustive-deps

//   return (
//     <Form
//       name="normal_login"
//       className="login-form"
//       form={form}
//       initialValues={{
//         remember: true,
//       }}
//       onFinish={onFinish}
//     >
//       <Form.Item
//         name="email"
//         rules={[
//           {
//             type: "email",
//             message: "The input is not valid E-mail!",
//           },
//           {
//             required: true,
//             message: "Please input your E-mail!",
//           },
//         ]}
//         hasFeedback
//       >
//         <Input
//           prefix={<MailOutlined className="site-form-item-icon" />}
//           placeholder="E-Mail"
//         />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: "Please input your Password!",
//           },
//         ]}
//         hasFeedback
//       >
//         <Input.Password
//           prefix={<LockOutlined className="site-form-item-icon" />}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Item>
//       <Form.Item>
//         <Form.Item
//           name="remember"
//           noStyle
//         >
//           <Checkbox onChange={onChange} checked={remember}>Remember me</Checkbox>
//         </Form.Item>

//         <Link className="login-form__forgot" to={"/"}>
//           Forgot password
//         </Link>
//       </Form.Item>

//       <Form.Item>
//         {loading ? (
//           <Button
//             type="primary"
//             htmlType="submit"
//             className="login-form__button"
//             loading
//           >
//             Log in
//           </Button>
//         ) : (
//           <Button
//             type="primary"
//             htmlType="submit"
//             className="login-form__button"
//           >
//             Log in
//           </Button>
//         )}
//         Or <Link to={"/register?redirect=shipping"}>register now!</Link>
//         {error === "" ? (
//           <></>
//         ) : (
//           <div className="login-form__error-wrap">
//             <h3 className="login-form__error-title">
//               <WarningOutlined className="site-form-item-icon" />
//               {"  "}There was a problem
//             </h3>
//             <p className="login-form__error-message">{error}</p>
//           </div>
//         )}
//       </Form.Item>
//     </Form>
//   );
// };
// export default LoginCard;
