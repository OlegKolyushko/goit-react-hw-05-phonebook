import React from "react";
import PropTypes from 'prop-types';
import ContactListItem from "../ContactListItem/ContactListItem";
import styles from './ContactList.module.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

function ContactList({ contacts, deleteContact }) {
  return (
    <TransitionGroup component="ul" >
      {contacts.map(({ id, name, number }) => (
        <CSSTransition key={id} timeout={250} classNames={styles}>
        <ContactListItem  name={name} number={number} deleteContact={() => deleteContact(id)}></ContactListItem>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(Object),
  deleteContact: PropTypes.func.isRequired,
}

export default ContactList;
