import axios from "axios";
import {
  ADD_CONTACT_FAIL,
  DELETE_CONTACT_SUCESS,
  DELETE_CONTACT_FAIL,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCESS,
  GET_CONTACT_SUCESS,
  GET_CONTACT_LOAD,
  GET_CONTACT_FAIL,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  EDIT_CONTACT_SUCESS,
  EDIT_CONTACT_FAIL,
} from "../ActionTypes/ActionTypes";

export const getContacts = () => async (dispatch) => {
  dispatch({ type: GET_CONTACTS_LOAD });
  try {
    let result = await axios.get("/api/contact");
    dispatch({
      type: GET_CONTACTS_SUCESS,
      payload: result.data.contactsToFind,
    });
  } catch (error) {
    dispatch({ type: GET_CONTACTS_FAIL, payload: error.response.data });
  }
};
export const addContact = (newContact) => async (dispatch) => {
  try {
    await axios.post("/api/contact", newContact);

    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: ADD_CONTACT_FAIL, payload: error.response.data });
  }
};
export const deleteContact = (contactId) => async (dispatch) => {
  try {
    await axios.delete(`/api/contact/${contactId}`);
    dispatch({ type: DELETE_CONTACT_SUCESS });
    dispatch(getContacts());
  } catch (error) {
    dispatch({ type: DELETE_CONTACT_FAIL, payload: error.response.data });
  }
};
export const getContact = (contactId) => async (dispatch) => {
  dispatch({ type: GET_CONTACT_LOAD });
  try {
    let result = await axios.get(`/api/contact/${contactId}`);
    dispatch({ type: GET_CONTACT_SUCESS, payload: result.data.contactToFind });
  } catch (error) {
    dispatch({ type: GET_CONTACT_FAIL, payload: error.response.data });
  }
};

export const toggleTrue = () => {
  return { type: TOGGLE_TRUE };
};
export const toggleFalse = () => {
  return { type: TOGGLE_FALSE };
};

export const EditContact = (contactId, newContact) => async (dispatch) => {
  try {
    
    await axios.put(`/api/contact/${contactId}`, newContact);
    dispatch({ type: EDIT_CONTACT_SUCESS });
    dispatch(getContacts());
    window.location.replace("/");
  } catch (error) {
    dispatch({ type: EDIT_CONTACT_FAIL, payload: error.response.data });
  }
};
