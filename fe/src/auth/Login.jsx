import logo from "../assets/logo-warna.png";
import bg from "../assets/bgLogin.jpeg";
import "../css/Login.css";
import { useState } from "react";
import { Auth } from "./AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function HandleKetik(e) {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  }

  const { setToken } = Auth();
  const Navigate = useNavigate();

  async function HandleLogin(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        data,
      );
      setData(response.data);
      Navigate("/Dashboard");
      setToken(response.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-container">
      <div className="left-section">
        <div className="form-wrapper">
          <div className="brand-header">
            <img className="logo-img" alt="MediSync Logo" src={logo} />
            <div className="brand-title-group">
              <h1 className="judul-web">MediSync</h1>
              <p className="dibawah-selamat">Clinical Supply Chain</p>
            </div>
          </div>

          <h2 className="selamat">Selamat Datang</h2>
          <p className="kata-kata">
            Masuk ke sistem manajemen rantai pasok klinis <br /> untuk memulai
            sesi Anda.
          </p>

          <form onSubmit={HandleLogin} className="login-form">
            <div className="form-group">
              <label className="label-input">Email</label>
              <input
                type="email"
                className="input-field"
                name="email"
                onChange={HandleKetik}
              />
            </div>

            <div className="form-group">
              <label className="label-input">Password</label>
              <input
                type="password"
                className="input-field"
                name="password"
                onChange={HandleKetik}
              />
            </div>

            <div className="lupa-password-container">
              <a href="#lupa-password" className="label-3">
                Lupa Password?
              </a>
            </div>

            <button className="button-masuk" type="submit">
              Masuk
            </button>

            <p className="belum-punya-akun">
              <span className="span">Belum punya akun? </span>
              <span className="link-daftar">Daftar</span>
            </p>
          </form>
        </div>
      </div>

      <div className="right-section">
        <img className="bg-image" alt="Background" src={bg} />
        <div className="hero-text-group">
          <h2 className="precision-management">
            Precision Management
            <br />
            for Clinical Supply Chain
          </h2>
          <p className="kata-kata-prec">
            Pantau stok obat, alat kesehatan, dan distribusi secara real-time.
            Kurangi risiko kehabisan stok di kondisi kritis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
