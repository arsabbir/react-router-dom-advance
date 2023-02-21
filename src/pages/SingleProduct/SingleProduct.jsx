import React from "react";
import { Navigate, useLocation, useNavigate, useParams, useSearchParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const SingleProduct = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const navigate=useNavigate()
  console.log(location);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Nav />
            <h2>Single Product page</h2>

            <button onClick={() => setSearchParams({ destination: "Jannat" })}>
              Astagfirullah
            </button>
            <button onClick={() => setSearchParams({})}>Toiba</button>
            <button onClick={()=> navigate(-3)}>back</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
