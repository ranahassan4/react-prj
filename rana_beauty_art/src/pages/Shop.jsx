import { useState, useEffect } from "react";
import "../CSS/shopPage.css"; // Make sure this file exists
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  const [products, setProducts] = useState([]); // State for products
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    // Fetch products from the backend
    fetch(
      "http://localhost/RanaHassan/react-prj/rana_beauty_art/backend/getMarriageRings.php"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => setProducts(data)) // Store fetched products in state
      .catch((error) => {
        console.error("Error fetching products:", error);
        setError(error.message); // Set error message
      });
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="shop-container">
        {error ? (
          <p className="error-message">Error: {error}</p> // Display error if any
        ) : products.length > 0 ? (
          <div className="product-list">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="no-products-message">No products available.</p>
        )}
      </div>
    </>
  );
}
