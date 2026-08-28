import Index from "./navbar";
import "../css/iventory.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const dummyData = [
  { id: 1, name: "vitamin b", kategori: "pills", status: "aman", stok: 11111 },
  { id: 2, name: "vitamin s", kategori: "pills", status: "aman", stok: 11111 },
];

const statusLabel = {
  aman: "stok aman",
  menipis: "stok menipis",
  habis: "stok habis",
};

function Inventory() {
  const [ShowModal, setShowModel] = useState(false);
  const [waktu, setWaktu] = useState(new Date());
  const [searchQuery, setSearchQuery] = useState(""); // State untuk input pencarian
  const [form, setForm] = useState({
    nama: "",
    kategori: "",
    satuan: "",
    stok: "",
    stokMin: "",
    pemasok: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSimpan = () => {
    console.log(form);
    setShowModel(false);
  };

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

  // Filter data berdasarkan kata kunci (nama produk atau kategori)
  const filteredData = dummyData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.kategori.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <>
      <Index>
        <div className="inventory-page-container">
          <div
            className="clock-container"
            style={{
              fontSize: "14px",
              color: "#333",
              fontWeight: "500",
              position: "absolute",
              top: "130px",
            }}
          >
            <p>{tanggalFormat}</p>
          </div>
          <h3 className="judul-halaman">Inventory</h3>

          <h1 className="judul-sub">Inventory</h1>

          <div className="toolbar-container">
            <div className="search-box">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="search-icon"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              <input
                type="text"
                placeholder="Cari produk atau kategori..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-search"
              />
            </div>

            <div className="fitur-fitur">
              <button className="btn-fitur">Semua</button>
              <button className="btn-fitur">Semua</button>
              <button className="btn-fitur">Semua</button>
              <button className="btn-fitur">Semua</button>
              <button className="btn-fitur">Semua</button>
            </div>

            <div className="fitur-tambah">
              <button className="btn-fitur2">Export CSV</button>
              <button className="btn-fitur2" onClick={() => setShowModel(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="icon icon-tabler icons-tabler-filled icon-tabler-plus"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1 -2 0v-6h-6a1 1 0 0 1 0 -2h6v-6a1 1 0 0 1 1 -1" />
                </svg>
                Tambah Item
              </button>
            </div>
          </div>

          <div className="table-wrapper">
            <table className="table-produk">
              <thead>
                <tr>
                  <th>Produk</th>
                  <th>Kategori</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length > 0 ? (
                  filteredData.map((i) => (
                    <tr key={i.id}>
                      <td>{i.name}</td>
                      <td>{i.kategori}</td>
                      <td>{i.stok.toLocaleString()}</td>
                      <td>
                        <span className="status">{statusLabel[i.status]}</span>
                      </td>
                      <td className="aksi">
                        <button className="btn-aksi">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                            <path d="M13.5 6.5l4 4" />
                          </svg>
                        </button>
                        <button className="btn-aksi">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center" }}>
                      Data tidak ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {ShowModal && (
          <div className="modal-overlay" onClick={() => setShowModel(false)}>
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Tambah Item</h3>
                <button
                  className="modal-close"
                  onClick={() => setShowModel(false)}
                >
                  ✕
                </button>
              </div>
              <div className="modal-body">
                <label>Nama produk</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Vitamin c"
                  value={form.nama}
                  onChange={handleChange}
                />

                <div className="modal-row">
                  <div className="modal-field">
                    <label htmlFor="kategori">Kategori</label>
                    <select
                      name="kategori"
                      id="kategori"
                      value={form.kategori}
                      onChange={handleChange}
                    >
                      <option value="">Pilih kategori</option>
                      <option value="pills">Pills</option>
                      <option value="syrup">Syrup</option>
                      <option value="alat">Alat medis</option>
                    </select>
                  </div>
                  <div className="modal-field">
                    <label htmlFor="satuan">Satuan</label>
                    <select
                      name="satuan"
                      id="satuan"
                      value={form.satuan}
                      onChange={handleChange}
                    >
                      <option value="">Pilih satuan</option>
                      <option value="botol">Botol</option>
                      <option value="strip">Strip</option>
                      <option value="box">Box</option>
                    </select>
                  </div>
                </div>

                <div className="modal-row">
                  <div className="modal-field">
                    <label>Jumlah stok</label>
                    <input
                      type="number"
                      name="stok"
                      placeholder="0"
                      value={form.stok}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="modal-field">
                    <label>Stok Minimum</label>
                    <input
                      type="number"
                      name="stokMin"
                      placeholder="0"
                      value={form.stokMin}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <label htmlFor="pemasok">Pemasok</label>
                <select
                  name="pemasok"
                  id="pemasok"
                  value={form.pemasok}
                  onChange={handleChange}
                >
                  <option value="">Pilih Pemasok</option>
                </select>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn-batal"
                  onClick={() => setShowModel(false)}
                >
                  Batal
                </button>
                <button
                  type="button"
                  className="btn-simpan"
                  onClick={handleSimpan}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}
      </Index>
    </>
  );
}

export default Inventory;
