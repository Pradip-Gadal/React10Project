import React from 'react'
import styles from './form.module.css'

const Form = (props) => {
  return (
    <div className={styles.formField}>
        <label htmlFor={props.name}>{props.display}</label>
        <input type={props.type} name={props.display} />
    </div>
  )
}

export default Form;
