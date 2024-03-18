import React from 'react'
import { useState, useEffect } from "react";
import { API_PATH } from "../../../constants";
import { menuItemModel } from "../../../Interfaces";
import MenuItemCard from './MenuItemCard';

function MenuItemList() {

    const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

    useEffect(() => {
      fetch(API_PATH + "MenuItem").then((response) => response.json()).then((data) => {
        console.log(data);
        setMenuItems(data.result);
      })
    }, [])

  return (
    <div className="container row">{menuItems.length > 0 && menuItems.map((menuItem, index) => (
      <MenuItemCard key={index} menuItem={menuItem} />
    ))}</div>
  )
}

export default MenuItemList