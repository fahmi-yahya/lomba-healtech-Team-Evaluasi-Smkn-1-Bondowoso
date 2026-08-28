import React, { useState } from "react";
import Index from "./navbar";
import "../css/pengaturan.css";

function Pengaturan() {
  const [activeTab, setActiveTab] = useState("profil");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    departemen: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data disimpan:", formData);
  };

  return (
    <Index>
      <h3 className="judul-halaman">Pengaturan</h3>
      <h1 className="judul-sub">Pengaturan</h1>
      <div className="pengaturan-wrapper">
        <div className="pengaturan-container">
          <div className="pengaturan-header">
            <h1 className="header-title">Pengaturan</h1>
            <p className="header-date">Rabu, 29 Juli 2026</p>
          </div>

          <div className="tab-group">
            <button
              className={`tab-btn ${activeTab === "profil" ? "active" : ""}`}
              onClick={() => setActiveTab("profil")}
            >
              <span>Profil</span>
            </button>
            <button
              className={`tab-btn ${activeTab === "notifikasi" ? "active" : ""}`}
              onClick={() => setActiveTab("notifikasi")}
            >
              {/* Form */}

              <span>Notifikasi</span>
            </button>
          </div>

          <div className="pengaturan-card">
            <div className="profile-header">
              <div className="avatar-placeholder" />
              <div className="profile-info">
                <h2 className="user-name">Ahmad Fauzan</h2>
                <p className="user-role">Manajer Menejemen</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="pengaturan-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="username">UserName</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="departemen">Departemen</label>
                  <input
                    type="text"
                    id="departemen"
                    name="departemen"
                    value={formData.departemen}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-save">
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Index>
  );
}

export default Pengaturan;
