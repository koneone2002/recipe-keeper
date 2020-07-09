import React, { useReducer } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  GET_CONTACTS,
  ADD_CONTACT,
  DELETE_CONTACT,
  CLEAR_CONTACTS,
  SET_CURRENT,
  CLEAR_CURRENT,
  CONTACT_ERROR,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    // contacts: [
    //   {
    //     id: 1,
    //     name: 'Jill Johnson',
    //     email: 'jill@gmail.com',
    //     phone: '111-111-1111',
    //     type: 'personal'
    //   },
    //   {
    //     id: 2,
    //     name: 'Sara Watson',
    //     email: 'sara@gmail.com',
    //     phone: '222-222-2222',
    //     type: 'personal'
    //   },
    //   {
    //     id: 3,
    //     name: 'Harry White',
    //     email: 'harry@gmail.com',
    //     phone: '333-333-3333',
    //     type: 'professional'
    //   }
    // ],
    contacts: null,
    current: null,
    filtered: null,
    error: null
  };
  // const contactContext = useContext(ContactContext);

  const [state, dispatch] = useReducer(contactReducer, initialState);
  // Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');
      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Add Contact
  const addContact = async contact => {
    // contact.id = uuidv4();
    const config = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    try {
      const res = await axios.post('/api/contacts', contact, config);
      dispatch({
        type: ADD_CONTACT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Delete Contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  // Clear Contacts
  const clearContacts = () => {
    dispatch({ type: CLEAR_CONTACTS });
  };
  // Set Current Contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  // Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  // Update Contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  // Filter Contacts
  const filterContacts = text => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addContact,
        deleteContact,
        clearContacts,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
        getContacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
