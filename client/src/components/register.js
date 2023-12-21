import "../css/register.css";

function Register() {
  return (
    <>
      <div className="regform">
        <form>
          <div className="mb-3">
            <label  className="form-label">
             Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              
            />
          </div>

          <div className="mb-3">
            <label  className="form-label">
              Gender
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              
            />
          </div>

          <div className="mb-3">
            <label  className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              
            />
          </div>

          <div className="mb-3">
            <label  className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Register;
