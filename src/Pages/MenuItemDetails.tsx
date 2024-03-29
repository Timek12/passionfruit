import React from "react";
import { useState, useEffect } from "react";
import { API_PATH } from "../constants";
import { menuItemModel } from "../Interfaces";
import { MenuItemCard } from "../Components/Page/MenuItems";
import {
  useGetMenuItemByIdQuery,
  useGetMenuItemsQuery,
} from "../Apis/menuItemApi";
import { useDispatch } from "react-redux";
import { setMenuItem } from "../Storage/Redux/menuItemSlice";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MenuItemDetails() {
  const { menuItemId } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const { data, isLoading } = useGetMenuItemByIdQuery(menuItemId);

  const handleQuantity = (counter: number) => {
    let newQuantity = quantity + counter;
    if(newQuantity < 1) {
      newQuantity = 1;
    }

    setQuantity(newQuantity);
    return;
  }
  return (
    <div className="container pt-4 pt-md-5">
      {isLoading ? (
        <div
          className="d-flex justify-content-center"
          style={{ width: "100%" }}
        >
          <div>Loading...</div>
        </div>
      ) : (
        <div className="container pt-4 pt-md-5">
          <div className="row">
            <div className="col-7">
              <h2 className="text-success">{data.result?.name}</h2>
              <span>
                <span
                  className="badge text-bg-dark pt-2"
                  style={{ height: "40px", fontSize: "20px" }}
                >
                  {data.result?.category}
                </span>
              </span>
              <span>
                <span
                  className="badge text-bg-light pt-2"
                  style={{ height: "40px", fontSize: "20px" }}
                >
                  {data.result?.specialTag}
                </span>
              </span>
              <p style={{ fontSize: "20px" }} className="pt-2">
                {data.result?.description}
              </p>
              <span className="h3">${data.result?.price}</span>{" "}
              &nbsp;&nbsp;&nbsp;
              <span
                className="pb-2  p-3"
                style={{ border: "1px solid #333", borderRadius: "30px" }}
              >
                <i onClick={() => {handleQuantity(-1)}}
                  className="bi bi-dash p-1"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                ></i>
                <span className="h3 mt-3 px-3">{quantity}</span>
                <i onClick={() => {handleQuantity(+1)}}
                  className="bi bi-plus p-1"
                  style={{ fontSize: "25px", cursor: "pointer" }}
                ></i>
              </span>
              <div className="row pt-4">
                <div className="col-5">
                  <button className="btn btn-success form-control">
                    Add to Cart
                  </button>
                </div>

                <div className="col-5 ">
                  <button className="btn btn-secondary form-control"
                  onClick={() => navigate(-1 )}
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
            <div className="col-5">
              <img
                src="https://via.placeholder.com/150"
                width="100%"
                style={{ borderRadius: "50%" }}
                alt="No content"
              ></img>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuItemDetails;
