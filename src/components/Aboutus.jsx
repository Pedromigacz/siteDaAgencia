import React from 'react';
import styles from '../styles/AboutUs.module.css'

const AboutUs = () => {
    return (
        <div id="aboutus" className={styles.aboutUsContainer}>
            <h2>Especialistas na área de e-commerce, prestamos os seguintes serviços:</h2>
            <div className={styles.serviceCardContainer}>
                <div className={styles.serviceCard}><span>Desenvolvime de e-commerces</span></div>
                <div className={styles.serviceCard}><span>Desenvolvimento de sites institucionais</span></div>
                <div className={styles.serviceCard}><span>Marketing digital</span></div>
                <div className={styles.serviceCard}><span>Otimização de páginas</span></div>
                <div className={styles.serviceCard}><span>Otimização SEO</span></div>
                <div className={styles.serviceCard}><span>Assistência especializada</span></div>
            </div>
        </div>
    );
}
 
export default AboutUs;