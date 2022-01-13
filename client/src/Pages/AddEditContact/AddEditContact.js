import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addContact, EditContact } from "../../JS/Actions/Actions";
import { Link } from "react-router-dom";

const AddEditContact = () => {
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const edit = useSelector((state) => state.contactReducer.edit);
  const contactToFind = useSelector(
    (state) => state.contactReducer.contactToFind
  );

  useEffect(() => {
    edit
      ? setNewContact(contactToFind)
      : setNewContact({
          name: "",
          email: "",
          phone: "",
        });
  }, [edit, contactToFind]);

  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={newContact.name}
            name="name"
            type="name"
            placeholder="Enter your name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={newContact.email}
            name="email"
            type="email"
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            onChange={handleChange}
            value={newContact.phone}
            name="phone"
            type="phone"
            placeholder="Enter your phone number"
          />
        </Form.Group>
        {edit ? (
          <img
            style={{ cursor: "pointer" }}
            src="/edit.png"
            alt="edit"
            width="30px"
            onClick={() => dispatch(EditContact(contactToFind._id, newContact))}
          />
        ) : (
          <Link to="/">
            <img
              style={{ cursor: "pointer" }}
              src="/add-user.png"
              alt="add-user"
              width="30px"
              onClick={() => dispatch(addContact(newContact))}
            />
          </Link>
        )}
      </Form>
    </div>
  );
};

export default AddEditContact;
