import React from 'react'
import styles from './styles.module.css'
const Title=({Text})=> {
  return (
        <div className= {styles.Title}>
            {Text}
        </div>
    );
  }
export default Title;