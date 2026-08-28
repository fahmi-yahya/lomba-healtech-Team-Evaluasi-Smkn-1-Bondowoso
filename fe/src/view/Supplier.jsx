import Index from "./navbar";
import "../css/pemasok.css";

const dummyData = [
  {name:"khaizuran fahmi yahya",nomor:812345,email:"ys1921565@gmail.com",stok:132},
  {name:"khaizuran fahmi yahya",nomor:812345,email:"ys1921565@gmail.com",stok:132},
  {name:"khaizuran fahmi yahya",nomor:812345,email:"ys1921565@gmail.com",stok:132},
  {name:"khaizuran fahmi yahya",nomor:812345,email:"ys1921565@gmail.com",stok:132},
  {name:"khaizuran fahmi yahya",nomor:812345,email:"ys1921565@gmail.com",stok:132},
  {name:"khaizuran fahmi yahya",nomor:812345,email:"ys1921565@gmail.com",stok:132},
  {name:"khaizuran fahmi yahya",nomor:812345,email:"ys1921565@gmail.com",stok:132},
]

function Supplier() {
  return (
    <>
      <Index>
        <h3 className="judul-halaman">Pemasok</h3>
        <h1 className="judul-sub">Pemasok</h1>

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
      </Index>
    </>
  );
}
export default Supplier;
