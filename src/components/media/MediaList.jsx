import React, { useContext, useEffect } from "react";
import { productContext } from "../../contexts/ProductContextProvider";
import MediaCard from "./MediaCard";
import "./MediaList.css";

const MediaList = () => {
  const { getProducts, products } = useContext(productContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mediaList">
      {products?.map((item) => (
        <MediaCard product={item} />
      ))}
    </div>
  );
};

export default MediaList;
