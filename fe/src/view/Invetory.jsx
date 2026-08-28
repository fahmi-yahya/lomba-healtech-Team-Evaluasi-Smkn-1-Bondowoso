import Index from "./navbar";
import "../css/Iventory.css";
const dummyData = [
  {id:1,name:"vitamin b",kategori:"pills",status:"aman",stok:11111},
  {id:2,name:"vitamin s",kategori:"pills",status:"aman",stok:11111},
]

const statusLabel = {
  aman: "stok aman",
  menipis: "stok menipis",
  habis: "stok habis",
};

function Inventory() {
  return (
    <>
      <Index>
        <h3 className="judul-halaman">Inventory</h3>
        <div>
          <h1 className="judul-sub">Inventory</h1>
        </div>
        <div>
          <div className="semua-search">
            <div className="icon-search2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 10a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
            </div>

            <input className="search2"></input>
          </div>
          <div className="fitur-fitur">
            <button className="btn-fitur">semua</button>
            <button className="btn-fitur">semua</button>
            <button className="btn-fitur">semua</button>
            <button className="btn-fitur">semua</button>
            <button className="btn-fitur">semua</button>
          </div>
          <div>
            <div className="fitur-tambah">
              <button className="btn-fitur2">Export CVS</button>
              <button className="btn-fitur2">
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
          </div>
        </div>

        <div>
          <table className="table-produk">
            <thead>
              <tr>
                <th>Produck</th>
                <th>Kategori</th>
                <th>Stock</th>
                <th>Status</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((i) => (
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
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-pencil"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                        <path d="M13.5 6.5l4 4" />
                      </svg>
                    </button>
                    <button className="btn-aksi">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="icon icon-tabler icons-tabler-outline icon-tabler-trash"
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
              ))}
            </tbody>
          </table>
        </div>
      </Index>
    </>
  );
}
export default Inventory;
