import { useSearchParams } from "react-router-dom";

const Filter = () => {

  const [searchParams, setSearchParams] = useSearchParams();


  const handleSubmit = (e) => {
    e.preventDefault();

    const text = e.target[0].value;

    // url'e aktarılcak parametre
    searchParams.set("search", text);

    setSearchParams(searchParams);
  };


  const handleChange = (e) => {

    const value = e.target.value;

    // eğer değer seçildiyse eklenicek parametre
    if (value) {
      searchParams.set("sort", value);
    } else {
      searchParams.delete("sort");
    }

    setSearchParams(searchParams);
  };

  // urldeki parametreleri temizle
  const handleClear = () => {
    setSearchParams({});
  };

  // urldeki mevcut parametre eriş
  const currSearch = searchParams.get("search");
  const currSort = searchParams.get("sort");

  return (
    <div className="row g-3 align-items-center card-body shadow-sm">
      {/* sırala */}
      <div className="col-md-3">
        <select className="form-select" defaultValue={currSort} onChange={handleChange}>
          <option value="">Sırala</option>
          <option value="a-z">A-Z</option>
          <option value="z-a">Z-A</option>
        </select>
      </div>

      {/* filtrele */}
      <form className="col-md-7" onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            defaultValue={currSearch}
            type="search"
            className="form-control"
            placeholder="Kitap adı ara..."
          />
          <button className="btn btn-primary">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>

      {/* temizle */}
      <div className="col-md-2">
        {(currSearch || currSort) && (
          <button onClick={handleClear} className="btn btn-outline-secondary w-100">
            <i className="bi bi-x-lg"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Filter;
