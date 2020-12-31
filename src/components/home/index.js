import React, { useEffect, useState } from "react";
import ContactListItem from "../contact-list-item";
import axios from "axios";
const Home = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getContactList();
  }, []);
  const getContactList = async () => {
    const data = await axios.get("https://reqres.in/api/users");
    if (data.status === 200) {
      setList([...data.data.data]);
    }
  };
  return (
    <div className="home">
      {list.length ? (
        <ul className="contact_list">
          {list.map((el) => {
            return <ContactListItem key={el.id} data={el} />;
          })}
        </ul>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default Home;
