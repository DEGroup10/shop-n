import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import NavBar from "../../components/Navbar";
import Footer from "../../components/Footerr/Footer";
import Store from "../../components/Store/index";
import MenuNavbar from "../../components/MenuNavbar";

/**
 * @author
 * @function ExploreStore
 **/

const ExploreStore = (props) => {
  const renderStores = () => {
    return (
      <div style={{ padding: "30px", paddingTop: "135px" }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
          <Store />
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <MenuNavbar/>
      <div> {renderStores()}</div>
      <Footer />
    </>
  );
};

export default ExploreStore;
