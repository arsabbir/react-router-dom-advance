import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../components/Nav/Nav";

const Product = () => {
  const navigate =useNavigate()
  const handleStockProduct = (stock) => {
    if (stock >0) {
      navigate("/product/alo")
    }else{
      alert("out of stock")
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <Nav />
            <h3>Product Page</h3>
            <div className="row">
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <h2>Alo</h2>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequatur, cupiditate corporis animi, praesentium
                      quibusdam sit autem quam nihil, vero atque maxime sed
                      labore veritatis debitis quae ipsum veniam alias itaque?
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleStockProduct(0)}
                      to="/product/alo"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <h2>Alo</h2>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequatur, cupiditate corporis animi, praesentium
                      quibusdam sit autem quam nihil, vero atque maxime sed
                      labore veritatis debitis quae ipsum veniam alias itaque?
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleStockProduct(1)}
                      to="/product/alo"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-body">
                    <h2>Alo</h2>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Consequatur, cupiditate corporis animi, praesentium
                      quibusdam sit autem quam nihil, vero atque maxime sed
                      labore veritatis debitis quae ipsum veniam alias itaque?
                    </p>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleStockProduct(20)}
                      to="/product/alo"
                    >
                      View Product
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
