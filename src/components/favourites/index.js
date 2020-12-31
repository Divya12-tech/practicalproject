import React, { useEffect, useState } from "react";
import ContactListItem from "../contact-list-item";
import axios from "axios";
const Favourites = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getFavList();
  }, []);
  const getFavList = async () => {
    const data = localStorage.getItem("favdata")
      ? JSON.parse(localStorage.getItem("favdata"))
      : [];
    setList(data);
  };
  return (
    <div className="home favourites">
      {list.length ? (
        <ul className="contact_list">
          {list.map((el) => {
            return <ContactListItem key={el.id} data={el} />;
          })}
        </ul>
      ) : (
        <div>No Favourites found</div>
      )}
    </div>
  );
};

export default Favourites;
