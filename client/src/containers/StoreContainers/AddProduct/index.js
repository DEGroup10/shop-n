import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoard from "../../../components/DashBoardSidebar";
import "./style.css";
import Navbar from "../../../components/Navbar";

const StoreAddProduct = () => {
  const [categoryId, setCategoryId] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productPictures, setProductPictures] = useState([]);

  return (
    <>
      <Navbar />
      <DashBoard sidebar>
        <span style={{paddingTop:'60px'}}>Add Product</span>
        <div
          className="app-layout-content"
          style={{ paddingTop: "20px", paddingBottom: "0px" }}
        >
          <div className="p3222">
            <div className="d-flex">
              <div className="fill-available product-form-wrap">
                <form>
                  <div className="product-information-section card">
                    <h4 className="section-text-5 mb24">Product Information</h4>
                    <section className="EmailPage__email-field form-group">
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          Product Name *
                        </label>
                        <input
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter Product Name"
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          Product Category *
                        </label>
                        <input
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter Product Category"
                          value={categoryId}
                          onChange={(e) => setCategoryId(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          Price *
                        </label>
                        <input
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter Price"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          Discounted Price *
                        </label>
                        <input
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter Discounted Price"
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          Quantity *
                        </label>
                        <input
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter Quantity"
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          Description *
                        </label>
                        <input
                          className="spectrum-Textfield spectrum-Textfield--quiet"
                          placeholder="Enter Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        ></input>
                      </div>
                      <div>
                        <label
                          className="spectrum-FieldLabel"
                          style={{ fontSize: "14px" }}
                        >
                          Media *
                        </label>
                        <div className="_1ARYa">
                          <div className="Polaris-Card__Section_1b1h1">
                            <div className="Polaris-Labelled__LabelWrapper_bf6ys">
                              <div className="Polaris-Label_2vd36">
                                <label
                                  id="PolarisDropZone5Label"
                                  for="PolarisDropZone5"
                                  class="Polaris-Label__Text_yj3uv"
                                >
                                  Upload Product Images
                                </label>
                              </div>
                            </div>
                            <div
                              className="Polaris-DropZone_1ehhx Polaris-DropZone--hasOutline_1z0fh Polaris-DropZone--sizeExtraLarge_1akox"
                              aria-disabled="false"
                            >
                              <span className="Polaris-VisuallyHidden_yrtt5">
                                <input id="PolarisDropZone5"></input>
                              </span>
                              <div className="Polaris-DropZone__Container_13mbo">
                                <div className="_2Rcw0">
                                  <div className="Polaris-DropZone-FileUpload_1fbjx">
                                    <div className="Polaris-Stack_32wu2 Polaris-Stack--vertical_uiuuj">
                                      <div className="Polaris-Stack__Item_yiyol">
                                        <img
                                          width="40"
                                          src="data:image/svg+xml,%3csvg fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 10a10 10 0 11-20 0 10 10 0 0120 0zM5.3 8.3l4-4a1 1 0 011.4 0l4 4a1 1 0 01-1.4 1.4L11 7.4V15a1 1 0 11-2 0V7.4L6.7 9.7a1 1 0 01-1.4-1.4z' fill='%235C5F62'/%3e%3c/svg%3e"
                                          alt=""
                                        />
                                      </div>
                                      <div className="Polaris-Stack__Item_yiyol">
                                        <div className="Polaris-DropZone-FileUpload__Button_r99lw">
                                          Add files
                                          {/* value={productName}
                          onChange={(e) => setProductName(e.target.value)} */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div
                      className="d-flex"
                      style={{
                        justifyContent: "flex-end",
                        paddingBottom: "15px",
                      }}
                    >
                      <div className="button-group ml16 btn-primary section-text-5 btn-product-new">
                        <div className="btn-text">Add Product</div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </DashBoard>
    </>
  );
};

export default StoreAddProduct;
