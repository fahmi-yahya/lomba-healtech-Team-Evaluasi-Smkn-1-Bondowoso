
import React, { useEffect, useState } from "react";
import Index from "./navbar";

import "../css/pengguna.css"

const initialUsers = [
  {
    id: 1,
    name: "Dr. Rahma Aulia",
    role: "Admin",
    posisi: "IT",
    status: "Aktif",
  },
];

function Pengguna() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users] = useState(initialUsers);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

    const [waktu, setWaktu] = useState(new Date());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setWaktu(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    const tanggalFormat = waktu.toLocaleDateString("id-ID", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <Index>
      <div
        className="clock-container"
        style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}
      >
        <p>{tanggalFormat}</p>
      </div>
      <h3 className="judul-halaman">Pengguna</h3>
      <h1 className="judul-sub">Pengguna</h1>
      <div className="menejemen-wrapper">
        <div className="menejemen-container">
          <div className="menejemen-controls">
            <div className="search-box">
              <i className="ti ti-search search-icon"></i>
              <input
                type="text"
                placeholder="Cari Pengguna"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button className="btn-add">
              <i className="ti ti-plus"></i>
              <span>Tambah Menejemen</span>
            </button>
          </div>

          <div className="user-table-container">
            <table className="user-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Role</th>
                  <th>Posisi</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.role}</td>
                    <td>{user.posisi}</td>
                    <td>
                      <span className="status-badge active">{user.status}</span>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td colSpan="4">&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan="4">&nbsp;</td>
                </tr>
                <tr>
                  <td colSpan="4">&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Index>
  );
}

export default Pengguna;

