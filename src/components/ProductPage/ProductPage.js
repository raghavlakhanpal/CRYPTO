import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import Spinner from "../../Spinner";
import TagList from "./TagList";

// const getTags = ({ tagsData }) => {
//   return tagsData.map((tagData) => {
//     <Tag tags={tagData} />;
//   });
// };

const ProductPage = ({ getProductById }) => {
  const [data, setData] = useState([]);
  // console.log(data.tags);
  //url variable passed to
  const { productId } = useParams();

  useEffect(() => {
    var productData = getProductById(productId);
    setData(productData);
  }, [getProductById, productId]);

  return (
    <div className="product-container" style={{ backgroundColor: data.color }}>
      <div className="nav-buttons">
        <Link to="/" className="product-btn">
          Go back
        </Link>
        <a href={data.unsplashLink} className="product-btn">
          View image on Unsplash
        </a>
      </div>
      <div className="product-display">
        <div className="product-card">
          <div className="product-seller-info">
            <span className="product-seller-name">{data.sellerName}</span>
            <img
              className={"product-seller-img"}
              src={data.sellerImage}
              alt={data.sellerName}
            />
          </div>
          <div className="product-main-img">
            <img src={data.url} alt={data.description} />
          </div>
          <div className="product-tags">
            {Array.isArray(data.tags) ? (
              <TagList tags={data.tags} />
            ) : (
              <Spinner />
            )}
          </div>
        </div>
        <div className="product-info">
          <div className="product-info-head">
            <h3>{data.shoeName}</h3>
            <h2>{data.shoeStyle}</h2>
          </div>
          <p className="product-info-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem eos
            nobis eius obcaecati eaque tempore aspernatur laudantium dolor fuga
            libero. Laborum provident iure temporibus eaque perferendis maxime
            id animi aliquam. Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Autem eos nobis eius obcaecati eaque tempore
            aspernatur laudantium dolor fuga libero. Laborum provident iure
            temporibus eaque perferendis maxime id animi aliquam. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Autem eos nobis eius
            obcaecati eaque tempore aspernatur laudantium dolor fuga libero.
            Laborum provident iure temporibus eaque perferendis maxime id animi
            aliquam.
          </p>
          <div className="btn-div">
            <button class="buy-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
