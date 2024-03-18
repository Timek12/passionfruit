import React from 'react'
import { useState, useEffect } from "react";
import { API_PATH } from "../../../constants";
import { menuItemModel } from "../../../Interfaces";

function MenuItemList() {

    const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

    useEffect(() => {
      fetch(API_PATH + "MenuItem").then((response) => response.json()).then((data) => {
        console.log(data);
        setMenuItems(data.result);
      })
    }, [])

  return (
    <div>MenuItemList</div>
  )
}

export default MenuItemList