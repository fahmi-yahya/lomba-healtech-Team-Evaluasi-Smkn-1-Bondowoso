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
import { useState } from "react";

const datadummy = [
  { nama: "Kaliwates", total: 42 },
  { nama: "Sumbersari", total: 58 },
  { nama: "Patrang", total: 35 },
  { nama: "Ajung", total: 20 },
  { nama: "Rambipuji", total: 15 },
];

function Dashboard() {
  const [data] = useState(datadummy);

  return (
    <>
      <Index>
        <h3 className="judul-halaman">Dashboard</h3>
        <div>
          <h1 className="judul-sub">Dashboard</h1>
        </div>

        <div className="kotak-semua">
          <div className="kotak-atas">
            <div className="kotak-info">
              <div className="kotak-icon"></div>
              <div className="semua-text-bawah">
                <h2 className="text-1">2999</h2>
                <p className="text-2">Akan Expired</p>
                <p className="text-3">30 Hari Lagi</p>
              </div>
            </div>
            <div className="kotak-info">
              <div className="kotak-icon"></div>
              <div className="semua-text-bawah">
                <h2 className="text-1">2999</h2>
                <p className="text-2">Akan Expired</p>
                <p className="text-3">30 Hari Lagi</p>
              </div>
            </div>
            <div className="kotak-info">
              <div className="kotak-icon"></div>
              <div className="semua-text-bawah">
                <h2 className="text-1">2999</h2>
                <p className="text-2">Akan Expired</p>
                <p className="text-3">30 Hari Lagi</p>
              </div>
            </div>
          </div>
          <div className="kotak-bawah">
            <div className="kotak-info">
              <div className="kotak-icon"></div>
              <div className="semua-text-bawah">
                <h2 className="text-1">2999</h2>
                <p className="text-2">Akan Expired</p>
                <p className="text-3">30 Hari Lagi</p>
              </div>
            </div>
            <div className="kotak-info">
              <div className="kotak-icon"></div>
              <div className="semua-text-bawah">
                <h2 className="text-1">2999</h2>
                <p className="text-2">Akan Expired</p>
                <p className="text-3">30 Hari Lagi</p>
              </div>
            </div>
            <div className="kotak-info">
              <div className="kotak-icon"></div>
              <div className="semua-text-bawah">
                <h2 className="text-1">2999</h2>
                <p className="text-2">Akan Expired</p>
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
