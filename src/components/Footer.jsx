import React from 'react';
import styles from '../styles/Footer.module.css'

const Footer = () => (
    <div className={styles.footerContainer}>
        <span>Made with k3 by <a href="https://www.pedromigacz.com">Pedro Migacz</a></span>
        <span>Copyright © 2020 - 2021 PedroMigacz. Todos os direitos reservados</span>
    </div>
)
 
export default Footer;