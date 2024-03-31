import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Footer from "./Footer";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { FaShoppingBasket, FaSearch, FaTimes, FaHeart } from "react-icons/fa";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showFullContent, setShowFullContent] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
        setLoading(false);
      } catch (error) {
        setError("Error fetching products. Please try again later.");
        setLoading(false);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        setError("Error fetching categories. Please try again later.");
      }
    };

    fetchProducts();
    fetchCategories();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setSearchTerm("");
    setCurrentPage(1);
    if (event.target.value === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === event.target.value
      );
      setFilteredProducts(filtered);
    }
  };

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleFullContent = () => {
    setShowFullContent(!showFullContent);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h1>
          <span style={{ color: "#ff00be" }}>M</span>oBoo
          <span style={{ color: "#ff00be" }}>M</span>
        </h1>

        <div style={{ position: "relative", marginRight: "175px" }}>
          <div style={{ position: "relative" }}>
            <input
              className="inputfieldcss"
              type="text"
              placeholder="What do you want to buy today?"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            {searchTerm ? (
              <button
                onClick={handleClearSearch}
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "25px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <FaTimes aria-hidden="true" />
              </button>
            ) : (
              <span
                className="iconcolor"
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "-120px",
                }}
              >
                <FaSearch />
              </span>
            )}
          </div>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <span style={{ marginRight: "50px", color: "#46423dde" }}>Store</span>
          <span style={{ marginRight: "50px", color: "#46423dde" }}>
            Account
          </span>
          <span style={{ marginRight: "50px", color: "#46423dde" }}>
            Wishlist
          </span>
          <span style={{ fontWeight: "bolder" }}>
            Basket &nbsp;
            <FaShoppingBasket style={{ cursor: "pointer" }} />
          </span>
        </div>
      </div>
      <div
        style={{
          background:
            "linear-gradient(to right, #000000d1, #000000d1, #ff0b009c)",
          padding: "18px 28px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "#fff" }}>Lorem Ipsum</h3>
        <p style={{ color: "#fff" }}>
          {showFullContent ? (
            <>
              Slash Sales begins in June.Get up to 80% Discount on oil products.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </>
          ) : (
            <>
              Slash Sales begins in June.Get up to 80% Discount on oil products.
            </>
          )}
          <a
            href=""
            onClick={(e) => {
              e.preventDefault();
              toggleFullContent();
            }}
            style={{ marginLeft: "10px", color: "#fff" }}
          >
            {showFullContent ? "Read Less" : "Read More"}
          </a>
        </p>
      </div>
      <div>
        <select
          className="selectfieldcss"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      &nbsp;
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-between",
          rowGap: "unset",
          borderRadius: "8px",
        }}
      >
        {currentProducts.map((product) => (
          <Card
            key={product.id}
            style={{
              width: "325px",
              marginBottom: "20px",
              border: "0.5px solid #8080804d",
              borderRadius: "11px",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "365px",
                overflow: "hidden",
              }}
            >
              <Card.Img
                variant="top"
                src={product.thumbnail}
                alt={product.title}
                style={{
                  width: "100%",
                  height: "365px",
                  borderTopLeftRadius: "10px",
                  borderTopRightRadius: "10px",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: "15px",
                  height: "15px",
                  right: "20px",
                  cursor: "pointer",
                  backgroundColor: "#6b5e5e63",
                  padding: "10px",
                }}
              >
                <FaHeart color="white" />
              </span>
            </div>
            <Card.Body style={{ height: "206px" }}>
              <Card.Title style={{ fontWeight: "600" }}>
                {product.title}
              </Card.Title>
              <Card.Text
                className="cardtext"
                style={{
                  width: "100%",
                  color: "#847375ff",
                }}
              >
                Product Description:{product.description}
              </Card.Text>
              <Card.Text style={{ fontWeight: "800" }}>
                {" "}
                ${product.price}
              </Card.Text>
              <Card.Text>Rating: {renderRatingStars(product.rating)}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={filteredProducts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Footer />
    </div>
  );
}

// Function to render rating stars
const renderRatingStars = (rating) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<BsStarFill key={i} color="gold" />);
  }

  if (halfStar) {
    stars.push(<BsStarHalf key={fullStars} color="gold" />);
  }

  const remainingStars = 5 - stars.length;

  for (let i = 0; i < remainingStars; i++) {
    stars.push(<BsStar key={fullStars + i + 1} color="gold" />);
  }

  return stars;
};

// Pagination component

const Pagination = ({
  productsPerPage,
  totalProducts,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={{ listStyle: "none", display: "flex", justifyContent: "end" }}>
        <li>
          <button
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
            style={{
              border: "1px solid #ccc",
              marginRight: "5px",
              cursor: "pointer",
            }}
          >
            {"<"}
          </button>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} style={{ margin: "0 5px" }}>
            <a
              onClick={() => paginate(number)}
              href="!#"
              style={{
                border: "1px solid #ccc",
                padding: "1px 10px",
                textDecoration: "none",
                color: currentPage === number ? "red" : "black",
                cursor: "pointer",
              }}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(pageNumbers.length)}
            disabled={currentPage === pageNumbers.length}
            style={{
              border: "1px solid #ccc",
              marginLeft: "5px",
              cursor: "pointer",
            }}
          >
            {">"}
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default ProductListing;
