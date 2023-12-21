import "../css/register.css";

function Register() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Register
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <a className="nav-link" href="#">
                Logout
              </a>
            </form>
          </div>
        </div>
      </nav>

      <div className="regformdiv">
        <form className="regformtag">
          <div className="mb-3">
            <label className="form-label"> Name</label>
            <input type="text" className="form-control" id="exampleInputName" />
          </div>

          <div className="mb-3">
            <label className="form-label"> Gender</label>
            <select className="form-control">
              <option>--select--</option>
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label"> Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>

          <div className="mb-3">
            <label className="form-label"> Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
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
