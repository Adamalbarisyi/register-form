import React from "react";
import { Row } from "react-bootstrap";
import logo from "../src/assets/img/logo.png";
import "./App.css";
import BidPerusahaan from './components/BidPerusahaan'

function App() {
  return (
    // <div className="content-center">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />

    //   </header>
    // </div>

    <div className="container">
      <div className="justify-content-center row">
        <div className="col-sm-8 col-md-9">
          <div className="card-group ">
            <div className="card form-register">
              <div className="card-body" style={{ padding: "0px" }}>
                <form>
                  <div className="text-center">
                    <img
                      className="App-logo"
                      src={logo}
                      alt="logo"
                      style={{ width: "200px", height: "45px" }}
                    />
                  </div>

                  <h5 style={{ textAlign: "left", fontSize: "17.5px" }}>
                    <b>Data Perusahaan</b>
                  </h5>

                  <Row>
                    <div className="col-sm-6">
                      <label className="input-label" htmlFor="basic-url">
                        Nama Perusahaan
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="basic-url"
                          aria-describedby="basic-addon3"
                        ></input>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label className="input-label" htmlFor="basic-url">
                        Website Perusahaan
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="basic-url"
                          aria-describedby="basic-addon3"
                        ></input>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label className="input-label" htmlFor="basic-url">
                        Nomor Telepon Perusahaan
                      </label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            +
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="62"
                          aria-label="62"
                          aria-describedby="basic-addon1"
                        ></input>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label className="input-label" htmlFor="basic-url">
                        Bidang Perusahaan
                      </label>
                      <BidPerusahaan></BidPerusahaan>
                    </div>
                  </Row>
                  <hr></hr>

                  <h5 style={{ textAlign: "left", fontSize: "17.5px" }}>
                    <b>Data Diri Anda</b>
                  </h5>

                  <Row>
                    <div className="col-sm-6">
                      <label className="input-label" htmlFor="basic-url">
                        Nama Lengkap
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="basic-url"
                          aria-describedby="basic-addon3"
                        ></input>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label className="input-label" htmlFor="basic-url">
                        Nama Panggilan
                      </label>
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          id="basic-url"
                          aria-describedby="basic-addon3"
                        ></input>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label className="input-label" htmlFor="basic-url">
                        Email
                      </label>
                      <div className="input-group">
                        <input type="text" className="form-control"></input>
                      </div>
                    </div>

                    <div className="col-sm-6">
                      <label className="input-label" htmlFor="basic-url">
                        Telepon
                      </label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">
                            +
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="62"
                          aria-label="62"
                          aria-describedby="basic-addon1"
                        ></input>
                      </div>
                    </div>
                  </Row>

                  <button
                    type="button"
                    className="btn btn-secondary btn-lg btn-block btn-register"
                  >
                    Register
                  </button>

                  <div className="mt-5">
                    <a className="text-link" href="https://widyaskilloka.com/login">
                    <i className="mr-2 fa fa-chevron-left font-weigh-bold" aria-hidden="true"></i>
                      Ke Halaman Login
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
