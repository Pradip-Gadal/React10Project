import React from 'react'
import styles from './botton.module.css'

const Botton = (props) => {
  return (
    <button 
    className={props.isLong ? styles.extraLongBBtn : styles.primary_button}>
        {props.icon}
        {props.text}
    </button>
  )
}

export default Botton;
