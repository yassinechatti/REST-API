import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteContact,
  getContact,
  toggleTrue,
} from "../../JS/Actions/Actions";
const ContactCard = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{contact.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {contact.phone}
          </Card.Subtitle>
          <Card.Text>{contact.email}</Card.Text>
          <img
            style={{ cursor: "pointer" }}
            src="/remove.png"
            alt="remove"
            width="30px"
            onClick={() => dispatch(deleteContact(contact._id))}
          />
          <Link to={`/editContact/${contact._id}`}>
            <img
              style={{ cursor: "pointer" }}
              src="/edit.png"
              alt="edit"
              width="30px"
              onClick={() => {
                dispatch(toggleTrue());
                dispatch(getContact(contact._id));
              }}
            />
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContactCard;
