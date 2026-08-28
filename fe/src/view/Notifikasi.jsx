import React, { useEffect, useState } from "react";
import Index from "./navbar";
import "../css/notifikasi.css";

const notificationsData = [
  {
    id: 1,
    title: "Stok Kritis",
    description: "Insulin Glargine tersisa 8 vial — di bawah minimum 50 unit.",
    time: "5 Menit yang Lalu",
    isUnread: true,
  },
  {
    id: 2,
    title: "Hampir Expired",
    description:
      "Dexamethasone 5mg akan expired pada 1 Agustus 2024 (8 hari lagi).",
    time: "18 menit lalu",
    isUnread: true,
  },
  {
    id: 3,
    title: "PO Disetujui",
    description:
      "Purchase Order PO-2024-0187 telah disetujui oleh Manajer Pengadaan.",
    time: "1 jam lalu",
    isUnread: true,
  },
  {
    id: 4,
    title: "Barang Diterima",
    description:
      "PO-2024-0186 dari Kimia Farma — 8 item telah diterima di Gudang A.",
    time: "3 jam lalu",
    isUnread: false,
  },
];

function Notifikasi() {
  const [notifications, setNotifications] = useState(notificationsData);

  const unreadCount = notifications.filter((item) => item.isUnread).length;

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((item) => ({ ...item, isUnread: false })),
    );
  };

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
      <h3 className="judul-halaman">Notifikasi</h3>
      <h1 className="judul-sub">Notifikasi</h1>
      <div className="notif-wrapper">
        <div className="notif-container">
          <div className="notif-header">
            <div className="notif-title-group">
              <h1 className="notif-title">Belum di baca</h1>
              {unreadCount > 0 && (
                <span className="notif-badge">{unreadCount}</span>
              )}
            </div>

            <button onClick={markAllAsRead} className="btn-read-all">
              <span className="btn-icon">+</span>
              <span>Tandani Semua Dibaca</span>
            </button>
          </div>

          <div className="notif-list">
            {notifications.map((item) => (
              <div key={item.id} className="notif-card">
                <div className="notif-content-left">
                  <div className="avatar-placeholder" />

                  <div className="notif-body">
                    <div className="notif-item-header">
                      <h2 className="notif-item-title">{item.title}</h2>
                      {item.isUnread && <span className="green-dot" />}
                    </div>
                    <p className="notif-description">{item.description}</p>
                  </div>
                </div>

                <span className="notif-time">{item.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Index>
  );
}

export default Notifikasi;
