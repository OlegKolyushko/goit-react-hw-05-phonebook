import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

function Filter({value, handlerFilter}) {
    return (
        <div className={styles.container}>
            <label className={styles.label}>
            Search contacts by name
            <input className={styles.input} type="text" value={value} onChange={e => handlerFilter(e.target.value)} ></input>
            </label>
        </div>
    )

};
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    handlerFilter: PropTypes.func.isRequired,
}

export default Filter;