import React from 'react';
import styles from '../styles/Home.module.css'
import ContactButton from './ContactButton.jsx'

const Home = () => (
    <div id="home" className={styles.homeContainer}>
        <h1 className={styles.mainDisclaimer}>Olá, somos a agência <strong>Pedro Migacz</strong><br/>e nós desenvolvemos sites</h1>
        <ContactButton />
    </div>
)
 
export default Home;