import React from "react";
import { Footer, Header } from "../Components/Layout";
import { useState, useEffect } from "react";
import { API_PATH } from "../constants";
import { menuItemModel } from "../Interfaces";

function App() {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  useEffect(() => {
    fetch(API_PATH + "MenuItem").then((response) => response.json()).then((data) => {
      console.log(data);
      setMenuItems(data.result);
    })
  }, [])

  return (
    <div className="text-white">
      <Header />
      Main Component
      <Footer />
    </div>
  );
}

export default App;
