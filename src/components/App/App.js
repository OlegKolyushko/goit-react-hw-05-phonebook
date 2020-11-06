import React, { Component } from "react";
import { v4 as uuidv4 } from 'uuid';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import {CSSTransition} from 'react-transition-group';
import styles from './App.module.css';
import Alert from '../Alert/Alert';
import alertStyles from '../Alert/Alert.module.css';


export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    inList: false,
  };
  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if(savedContacts) {
      this.setState({
        contacts: JSON.parse(savedContacts),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  addContact = (name, number) => {
    const { contacts } = this.state;
    const include = contacts.find(contact => contact.name === name);
    if (include) {
      this.setState({inList: true});
      setTimeout(() => {
        this.setState({inList: false});
      }, 2500);
      return
    }
      const contact = {
        id: uuidv4(),
        name,
        number,
      };
      this.setState(prevState => {
          return { 
              contacts: [...prevState.contacts, contact]
          };
      });
     
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));

  }

  handlerFilter = filter => {
    this.setState({ filter });
  };

  filteredContact = () => {
    const {contacts, filter} = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
      );
  };

  render() {
      const { contacts, filter, inList } = this.state;
      // const filteredContact = this.filteredContact;
    return (
      <>
      <CSSTransition in={true} appear={true} timeout={500} classNames={styles}>
         <h1 className={styles.title}>Phonebook</h1>
      </CSSTransition>
      <CSSTransition in={inList} timeout={250} classNames={alertStyles} unmountOnExit>
        <Alert  />
      </CSSTransition>
      <section className={styles.container}>
       <ContactForm onAddContact={this.addContact}></ContactForm>
       </section>
       {contacts.length > 0 && (
           <>
           <br></br>
           <Filter value={filter} handlerFilter={this.handlerFilter}></Filter>
           <ContactList contacts={this.filteredContact()} deleteContact={this.deleteContact}></ContactList>
           </>
       )}
      </>
    );
  }
}
