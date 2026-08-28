import Index from "./navbar";

import "../css/dashboard.css";
import RealTanggal from "./realTime";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useEffect, useState } from "react";

const datadummy = [
  { nama: "Kaliwates", total: 42 },
  { nama: "Sumbersari", total: 58 },
  { nama: "Patrang", total: 35 },
  { nama: "Ajung", total: 20 },
  { nama: "Rambipuji", total: 15 },
];

function Dashboard() {
  const [data] = useState(datadummy);
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
    <>
      <Index>
        <div
          className="clock-container"
          style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}
        >
          <p>{tanggalFormat}</p>
        </div>
        <h3 className="judul-halaman">Dashboard</h3>
        <div>
          <h1 className="judul-sub">Dashboard</h1>
        </div>

        <div className="kotak-semua">
          <div className="kotak-atas">
            <div className="kotak-info">
              <div
                className="kotak-icon"
                style={{ backgroundColor: "#7DCCAD" }}
              ></div>
              <div className="semua-text-bawah">
                <h2 className="text-1">139</h2>
                <p className="text-2">Total Obat</p>
                <p className="text-3">30 Hari Lagi</p>
              </div>
            </div>
            <div className="kotak-info">
              <div
                className="kotak-icon"
                style={{ backgroundColor: "#FFF449" }}
              ></div>
              <div className="semua-text-bawah">
                <h2 className="text-1">239</h2>
                <p className="text-2">Alat Kesehatan</p>
                <p className="text-3">30 Hari Lagi</p>
              </div>
            </div>
            <div className="kotak-info">
              <div
                className="kotak-icon"
                style={{ backgroundColor: "#FB6C00" }}
              ></div>
              <div className="semua-text-bawah">
                <h2 className="text-1">119</h2>
                <p className="text-2">Stok Rendah</p>
                <p className="text-3">30 Hari Lagi</p>
              </div>
            </div>
          </div>
          <div className="kotak-bawah">
            <div className="kotak-info">
              <div
                className="kotak-icon"
                style={{ backgroundColor: "#D51C39" }}
              ></div>
              <div className="semua-text-bawah">
                <h2 className="text-1">39</h2>
                <p className="text-2">Akan Expired</p>
                <p className="text-3">30 Hari Lagi</p>
              </div>
            </div>
            <div className="kotak-info">
              <div
                className="kotak-icon"
                style={{ backgroundColor: "#39B1D1" }}
              ></div>
              <div className="semua-text-bawah">
                <h2 className="text-1">9</h2>
                <p className="text-2">PO Masuk</p>
                <p className="text-3">30 Hari Lagi</p>
              </div>
            </div>
            <div className="kotak-info">
              <div
                className="kotak-icon"
                style={{ backgroundColor: "#FF97D0" }}
              ></div>
              <div className="semua-text-bawah">
                <h2 className="text-1">29</h2>
                <p className="text-2">PO Keluar</p>
                <p className="text-3">30 Hari Lagi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chart">
          <p className="text-char1">Tren Stok Bulanan</p>
          <p className="text-char2">
            Pergerakan barang masuk dan keluar barang
          </p>
          <ResponsiveContainer width="100%" height={170}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorMasuk" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#93c5fd" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#93c5fd" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="nama"
                axisLine={false}
                tickLine={false}
                stroke="#9ca3af"
              />
              <YAxis axisLine={false} tickLine={false} stroke="#9ca3af" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="total"
                stroke="#60a5fa"
                strokeWidth={2}
                fill="url(#colorMasuk)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Index>
    </>
  );
}

export default Dashboard;
