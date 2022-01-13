import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleFalse } from "../../JS/Actions/Actions";
const Navbarr = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <Link to="/">
        <Button variant="secondary">Contact List</Button>
      </Link>
      <Link to="/addContact">
        <Button onClick={() => dispatch(toggleFalse())} variant="secondary">
          Add Contact
        </Button>
      </Link>
    </header>
  );
};

export default Navbarr;
