import React, { useEffect } from "react";
import Product from "../components/product/product";
import MessageBox from "../components/boxes/MessageBox";
import LoadingBox from "../components/boxes/LoadingBox";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../redux/action/productAction";
import { products } from "../port";

function HomeScreen(props) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="article">
        <h2>Featured Product</h2>
      </div>
    </div>
  );
}

export default HomeScreen;
