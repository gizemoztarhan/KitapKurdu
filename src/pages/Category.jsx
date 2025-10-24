import Aside from "../components/Aside";
import { Outlet } from "react-router-dom";

const Category = () => {
  return (
    <div className="row g-4">
      <div className="col-sm-4">
        <Aside />
      </div>
      <div className="col-sm-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Category;
