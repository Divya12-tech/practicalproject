import React from "react";
import {Link} from "react-router-dom"
const ContactListItem = ({ data }) => {
  return (
    <li className="contact-list-item">
    <Link to={`/contact/${data.id}`}>
      <img src={data.avatar} alt={`image_${data.first_name}`} />
      <div className="wrapper_content">
        <div className="name">{data.first_name + " " + data.last_name}</div>
        <div className="email">{data.email}</div>
      </div>
       </Link>
    </li>
  );
};

export default ContactListItem;
