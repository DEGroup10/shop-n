import React, { useState } from "react";
import "./style.css";
import Navigationbar from "../../components/Navbar";
import Footer from "../../components/Footerr/Footer";
import Product from "../../components/Product";
import MenuNavbar from "../../components/MenuNavbar";

/**
 * @author
 * @function HomePage
 **/

const HomePage = (props) => {

  const [searchTerm , setSearchTerm] = useState(""); 
  const [categoryTerm , setCategoryTerm] = useState(""); 
  const [locationTerm , setLocationTerm] = useState("");
  
  const searchHandler = (searchValue) => {
    setSearchTerm(searchValue);
    setCategoryTerm("");
    setLocationTerm("");
  };
  const searchLocation = (LocationValue) => {
    setLocationTerm(LocationValue);
    setSearchTerm("");
  };
  const searchCategory = (CategoryValue) => {
    setCategoryTerm(CategoryValue);
    setSearchTerm("");
  };

  const renderProduct = () => {
    return (
      <div style={{ padding: "30px",paddingTop:'135px' }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product /> <Product />
          <Product />
          <Product />
          <Product /> <Product />
          <Product /> <Product />
          <Product /> <Product /> <Product /> <Product />
          <Product /> <Product /> <Product /> <Product /> <Product />
          <Product /> <Product /> <Product /> <Product /> <Product />{" "}
          <Product /> <Product />
        </div>
      </div>
    );
  };

  return (
    <>
      <Navigationbar />
      <MenuNavbar
        term={searchTerm}
        locationterm={locationTerm}
        categoryterm={categoryTerm}
        searchKeyword={searchHandler}
        searchLocation={searchLocation}
        searchCategory={searchCategory}
      />
      <Footer />
      {renderProduct()}
    </>
  );
};

export default HomePage;
