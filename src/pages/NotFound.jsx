import { useNavigate } from "react-router-dom"


const NotFound = () => {

    const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center" style={{ marginTop: "280px" }}>
      <h1>404</h1>
      <p className="fw-bold">Sayfa Bulunamadı</p>
      <button onClick={handleClick} className="btn btn-primary">
        Anasayfa'ya Git
      </button>
    </div>
  );
}

export default NotFound