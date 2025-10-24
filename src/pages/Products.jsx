import axios from "axios"
import { useEffect,useState} from "react"
import Loader from "../components/Loader";
import Card from "./Card";
import Filtered from "../components/Filtered";
import { useSearchParams } from "react-router-dom";


const Products = () => {

  const [searchParams, setSearchParams] = useSearchParams();

    const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);



  
  // api'a gönderilcek parametre
  const params = {
    title_like: searchParams.get("search"),
    _sort: "title",
    _order: searchParams.get("sort") === "z-a" ? "desc" : "asc",
  };

    useEffect(()=>{
 setLoading(true)

        axios.get(" http://localhost:4000/books",{ params }).then((res)=>{
            setBooks(res.data);
            
        })
        .finally(()=>setLoading(false))
    },[searchParams])

 if (loading) return <Loader />;

  return (
    <div>
      <div className="container">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex align-items-center justify-content-between">
              <h2 className="h4 mb-0 text-primary fw-bold">
                <i className="bi bi-journal-text me-2"></i>
                Kitap Kolleksiyonu
              </h2>

              <span className="badge bg-primary fs-6 px-3 py-2">{books.length} kitap</span>
            </div>
          </div>
        </div>
             {/* Filtreme */}
        <div className="mb-4">
          <div className="card border-0 shadow-m">
            <Filtered />
          </div>
        </div>
        {/* Kitap Listesi */}
        {books.length > 0 ? (
          <div className="books-container">
            {books.map((book) => (
              <Card key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <i className="bi bi-search display-1 text-muted mb-3"></i>
            <h3>Kitap Bulunamadı</h3>
            <p className="text-muted">Farklı arama terimleri deneyin</p>
          </div>
        )}
      </div>
    </div>  )
}

export default Products