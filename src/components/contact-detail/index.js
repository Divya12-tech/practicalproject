import React, { useState, useEffect } from "react";
import axios from "axios";
const ContactDetail = (props) => {
  const [contact, setContact] = useState(null);
  const [message, setMessage] = useState("");
  useEffect(() => {
    getContact();
  }, []);
  const getContact = async () => {
    const data = await axios.get(
      `https://reqres.in/api/users/${props.match.params.id}`
    );
    if (data.status === 200) {
      setContact(data.data.data);
    }
  };

  const addToFav = () => {
    const favData = localStorage.getItem("favdata")
      ? JSON.parse(localStorage.getItem("favdata"))
      : [];
    favData.push(contact);
    localStorage.setItem("favdata", JSON.stringify(favData));
    setMessage("Successfully added to favourites");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  };

  const addToFavStatus = (id) => {
    const favData = localStorage.getItem("favdata")
      ? JSON.parse(localStorage.getItem("favdata"))
      : [];
    if (favData.length) {
      const isFav = favData.filter((el) => el.id === id);
      if (isFav.length) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  };
  return (
    <div className="contact-detail">
      {contact ? (
        <>
          <img src={contact.avatar} alt={`avatar_${contact.first_name}`} />
          <div className="contact-detail-wrapper">
            <div className="contact-detail-name">
              {contact.first_name + " " + contact.last_name}
            </div>
            <div className="contact-detail-email">{contact.email}</div>
            {!addToFavStatus(contact.id) ? (
              <button onClick={addToFav}>Add to favourites</button>
            ) : (
              <div>Already added in favourites</div>
            )}
          </div>
        </>
      ) : (
        <div>loading...</div>
      )}
      {message !== "" && <div className="success">{message}</div>}
    </div>
  );
};

export default ContactDetail;
