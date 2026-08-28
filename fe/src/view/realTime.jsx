import { useEffect } from "react";

function RealTanggal() {
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
      <div
        className="clock-container"
        style={{ fontSize: "14px", color: "#333" }}
      >
        <span>{tanggalFormat}</span>
      </div>
    </>
  );
}
export default RealTanggal;
