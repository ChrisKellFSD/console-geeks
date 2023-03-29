import React from 'react'
import NoResults404 from "../assets/404.png"
import styles from "../../src/styles/NotFound.module.css";
import Asset from "../components/Asset";

const NotFound = () => {
  return (
    <div className={styles.NoResult}>
        <Asset
        src={NoResults404}
        message="Sorry, the page you are looking for doesn't exist!" 
        />
    </div>
  )
}

export default NotFound