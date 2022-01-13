import {
  ADD_CONTACT_FAIL,
  DELETE_CONTACT_FAIL,
  EDIT_CONTACT_FAIL,
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOAD,
  GET_CONTACTS_SUCESS,
  GET_CONTACT_FAIL,
  GET_CONTACT_LOAD,
  GET_CONTACT_SUCESS,
  TOGGLE_FALSE,
  TOGGLE_TRUE,
} from "../ActionTypes/ActionTypes";

const initState = {
  contactsToFind: [],
  load: false,
  errors: null,
  contactToFind: {},
  edit: false,
};
const contactReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CONTACTS_LOAD:
      return { ...state, load: true };
    case GET_CONTACTS_SUCESS:
      return { ...state, load: false, contactsToFind: payload };
    case GET_CONTACTS_FAIL:
      return { ...state, load: false, errors: payload };
    case ADD_CONTACT_FAIL:
      return { ...state, load: false, errors: payload };
    case DELETE_CONTACT_FAIL:
      return { ...state, load: false, errors: payload };
    case GET_CONTACT_LOAD:
      return { ...state, load: true };
    case GET_CONTACT_SUCESS:
      return { ...state, load: false, contactToFind: payload };
    case GET_CONTACT_FAIL:
      return { ...state, load: false, errors: payload };
    case TOGGLE_TRUE:
      return { ...state, edit: true };
    case TOGGLE_FALSE:
      return { ...state, edit: false };
    case EDIT_CONTACT_FAIL:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
export default contactReducer;
