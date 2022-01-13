import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../JS/Actions/Actions";
import ContactCard from "../../Components/ContactCard/ContactCard";

const ContactList = () => {
  const contactsToFind = useSelector(
    (state) => state.contactReducer.contactsToFind
  );
  const load = useSelector((state) => state.contactReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  return load ? (
    <h2>loading</h2>
  ) : (
    <div>
      {contactsToFind.map((contact) => (
        <ContactCard contact={contact} key={contact.id} />
      ))}
    </div>
  );
};

export default ContactList;
