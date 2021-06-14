export default function RegisterForm() {
  return(
    <div className="commonForm">
      <p className="registerForm-title">Join us !</p>
      <form className="commonForm-form">
        <div className="form-group commonForm-block">
          <label for="exampleInputEmail1">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" />
        </div>
        <div className="form-group commonForm-block">
          <label for="exampleInputPassword1">Phone Number</label>
          <input type="tel" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="form-group commonForm-block">
          <label for="exampleInputPassword1">SMS verification code</label>
          <input type="text" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="form-group commonForm-block">
          <label for="exampleInputPassword1">Anonymous ID</label>
          <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Length must be less than 16 characters" maxLength="16"/>
        </div>
        <div className="form-group commonForm-block">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Length must be greater than 6 characters" minLength="6"/>
        </div>
        <div className="form-group commonForm-block">
          <label for="exampleInputPassword1">Confirm Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="form-group commonForm-block">
          <label for="exampleInputPassword1">Birthday</label>
          <input type="date" className="form-control" id="exampleInputPassword1" />
        </div>
        <p>By clicking the Continue button below, you accept the MyJig 3D <span>Terms of Use</span> and <span>Privacy Policy</span>.</p>
        <button type="submit">CONTINUE</button>
      </form>
    </div>
  );
}