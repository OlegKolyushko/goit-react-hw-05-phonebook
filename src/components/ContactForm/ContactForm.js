import React, { Component } from "react";
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';

export default class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  }
  state = {
    name: '',
    number: '',
  };

  handlerForm = (e) => {
    e.preventDefault();
    this.props.onAddContact(this.state.name, this.state.number);
    this.setState({name: ''});
    this.setState({number: ''});
  };
  handlerName = (e) => {
    this.setState({ name: e.target.value });
  };
  handlerNumber = (e) => {
      this.setState({ number: e.target.value });
  }

  render() {
      const {name, number} = this.state
    return (
      <form onSubmit={this.handlerForm}>
        <label className={styles.name}>Name
        <input className={styles.inputName} type="text" value={name} onChange={this.handlerName} placeholder='Enter your name'></input>
        </label>
        <label className={styles.number}>Number
        <input className={styles.inputNumber} type="tel"  value={number} onChange={this.handlerNumber} pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}" placeholder='123-12-12' ></input>
        </label>       
        <button className={styles.button} type="submit">Add contact</button>
      </form>
    );
  }
}

// pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
