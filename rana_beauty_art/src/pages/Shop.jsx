import { useState, useEffect } from "react";
import "../CSS/shopPage.css";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  const [data, setData] = useState([]); // Store product data
  const [error, setError] = useState(null); // Store error messages

  useEffect(() => {
    fetch(
      "http://localhost/RanaHassan/react-prj/rana_beauty_art/backend/getMarriageRings.php"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Store the data in state
        setError(null); // Clear any previous errors
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError(err.message); // Store the error message
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="shop-container">
        {error ? (
          <p className="error-message">{error}</p>
        ) : data.length > 0 ? (
          <div className="product-list">
            {data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="no-data-message">No products available.</p>
        )}
      </div>
    </>
  );
}
