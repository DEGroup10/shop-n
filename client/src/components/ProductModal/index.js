import React, { useState } from "react";
import { Modal } from "../../components/MaterialUI";
import { BiRupee } from "react-icons/bi";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const ProductModal = (props) => {
  const { show, handleclose } = props;
  // if (!productDetails) {
  //   return null;
  // }

  const diffToast = () => {
    toast.success("Item Added Successfull !", {
      position: "top-center",
    });
  };

  const renderButton = (storeId) => {
    return (
      <button
        style={{ marginLeft: "263px", fontSize:'16px',height:'28px' , marginTop:'16px'}}
        className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl"
      >
        <span> Follow Store</span>
      </button>
    );
  };

  // const { productDetails, show, handleclose } = props;
  // if (!productDetails) {
  //   return null;
  // }
  return (
    <>
      <Modal visible={show} onClose={handleclose} size="lg">
        <div className="productDescriptionContainer">
          <div className="flexRow">
            <div className="productDescContainer">
              <div className="productDescImgContainer">
                <img
                  src="https://m.media-amazon.com/images/I/41vqgX0c5EL.jpg"
                  alt="new"
                />
              </div>

              {/* action buttons */}
            </div>
          </div>
          {/* home > category > subCategory > productName */}
          <div className=" detailsWrapper">
            <div className="prodDesc clearfix">
              <div className="productDetails" style={{ width: "600px" }}>
                <div>
                  <div
                    className="Storename"
                    style={{ maxWidth: "521px", top: "-1px" }}
                  >
                    <p style={{display:'flex'}}>
                      Apple Store
                      {renderButton()}
                    </p>
                    <p
                      style={{
                        width: "130px",
                        fontSize: "12px",
                        color: "#878787",
                        fontWeight: "600",
                        marginRight: "20px",
                      }}
                    >
                      Viman Nagar Pune
                    </p>
                  </div>
                </div>
                <h1 className="productTitle" style={{ maxWidth: "509px" }}>
                  2020 Apple MacBook Pro (13.3-inch/33.78 cm, Apple M1 chip with
                  8‑core CPU and 8‑core GPU, 8GB RAM, 256GB SSD) - Space Grey
                </h1>
                <div className="flexRow priceContainer price">Price :
                  <span 
                  // classNa me="price"
                  >
                    <BiRupee />
                    1,00,000
                  </span>

                  {/* <span>i</span> */}
                </div>
                <div>
                  <p style={{ display: "flex", maxWidth: "500px" }}>
                    <span
                      style={{
                        width: "100px",
                        fontSize: "12px",
                        color: "#878787",
                        fontWeight: "600",
                        marginRight: "20px",
                      }}
                    >
                      Description
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#212121",
                      }}
                    >
                      Apple-designed M1 chip for a giant leap in CPU, GPU, and
                      machine learning performance Get more done with up to 20
                      hours of battery life, the longest ever in a Mac 8-core
                      CPU delivers up to 2.8x faster performance to fly through
                      workflows quicker than ever 8-core GPU with up to 5x
                      faster graphics for graphics-intensive apps and games
                      16-core Neural Engine for advanced machine learning 8GB of
                      unified memory so everything you do is fast and fluid
                      Superfast SSD storage launches apps and opens files in an
                      instant
                    </span>
                  </p>
                  <div className="share-btn-container">
                  <div
                id="addButtons"
                style={{ float: "left", width: "100%", marginLeft: "0px" }}
              >
                <div className="addToBagBtn  fixedCartBtnWrapper">
                  <div className="addButtons col-xs-12 pull-left">
                    <button
                      id="testWishButton"
                      className="addtocart pull-left "
                      onClick={diffToast}
                    >
                      <span>ADD TO Cart</span>
                    </button>
                    <button id="addToCart" className="wishlists pull-left ">
                      <span>SHARE</span>
                    </button>
                  </div>
                </div>
              </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <ToastContainer />
      </Modal>
    </>
  );
};

export default ProductModal;
