import Index from "./navbar";
import "../css/pemasok.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const dummyData = [
  {
    name: "khaizuran fahmi yahya",
    nomor: 812345,
    email: "ys1921565@gmail.com",
    stok: 132,
  },
  {
    name: "khaizuran fahmi yahya",
    nomor: 812345,
    email: "ys1921565@gmail.com",
    stok: 132,
  },
  {
    name: "khaizuran fahmi yahya",
    nomor: 812345,
    email: "ys1921565@gmail.com",
    stok: 132,
  },
  {
    name: "khaizuran fahmi yahya",
    nomor: 812345,
    email: "ys1921565@gmail.com",
    stok: 132,
  },
  {
    name: "khaizuran fahmi yahya",
    nomor: 812345,
    email: "ys1921565@gmail.com",
    stok: 132,
  },
  {
    name: "khaizuran fahmi yahya",
    nomor: 812345,
    email: "ys1921565@gmail.com",
    stok: 132,
  },
  {
    name: "khaizuran fahmi yahya",
    nomor: 812345,
    email: "ys1921565@gmail.com",
    stok: 132,
  },
];

function Supplier() {
  const [waktu, setWaktu] = useState(new Date());
  const [ShowModal, setShowModel] = useState(false);
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
  return (
    <>
      <Index>
        <div
          className="clock-container"
          style={{ fontSize: "14px", color: "#333", fontWeight: "500" }}
        >
          <p>{tanggalFormat}</p>
        </div>
        <h3 className="judul-halaman">Pemasok</h3>
        <h1 className="judul-sub">Pemasok</h1>
        <div className="semua-fitur">
          <div>
            <div className="semua-search">
              <div className="icon-search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-search"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
                </svg>
              </div>
              <input className="search" placeholder="" />
            </div>
          </div>
          <button className="btn-fitur6" onClick={() => setShowModel(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="icon icon-tabler icons-tabler-filled icon-tabler-plus"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 4a1 1 0 0 1 1 1v6h6a1 1 0 0 1 0 2h-6v6a1 1 0 0 1 -2 0v-6h-6a1 1 0 0 1 0 -2h6v-6a1 1 0 0 1 1 -1" />
            </svg>
            Tambah Item
          </button>
        </div>

        <div className="semua-kotak">
          {dummyData.map((i) => (
            <div className="kotak">
              <div className="semua-kotak-atas">
                <div className="kotak-img"></div>
                <b className="text-kotak-atas">PT MAHARDIKA</b>
                <p className="text-kotak-atas">farmasi</p>
              </div>

              <hr
                style={{
                  position: "relative",
                  top: "70px",
                  width: "340px",
                  left: "30px",
                }}
              />

              <div className="info">
                <p>{i.name}</p>
                <p>{i.email}</p>
                <p>{i.nomor}</p>
                <p>{i.stok} Produk</p>
              </div>
              <div className="btn-semua">
                <button>Lihat Detail</button>{" "}
                <button className="btn-po">Buat PO</button>
              </div>
            </div>
          ))}
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
                  x
                </button>
              </div>
              <div className="modal-body">
                <label htmlFor="">Nama produk</label>
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
                    <label htmlFor="">Jumlah stok</label>
                    <input
                      type="number"
                      name="stok"
                      placeholder="0"
                      value={form.stok}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="modal-field">
                    <label htmlFor="">Stok Minimum</label>
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
                  className="btn-batal"
                  onClick={() => setShowModel(false)}
                >
                  Batal
                </button>
                <Link to={"./inventory"}>
                  <button className="btn-simpan" onClick={handleSimpan}>
                    Simpan
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Index>
    </>
  );
}
export default Supplier;
