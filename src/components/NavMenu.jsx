import React, { useState, useEffect } from 'react';
import styles from '../styles/NavMenu.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'

const menuVariants = {
    hidden: {
      opacity: 0,
      x: 900,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 }
    }
}

const BurguerNav = () => {
    const [open, setOpen] = useState(false)
    const [mobile, setMobile] = useState(false)

    useEffect(() => {
        if(window.innerWidth <= 900) setMobile(true)
        else setMobile(false)
    }, [])

    if(mobile) return(
        <>  
            <button
                aria-label="Menu button"
                className={styles.burguerMenu + ' ' + (open && styles.open)}
                onClick={e => {setOpen(!open)}}
            ><span className={styles.burguerBar}></span></button>
            <AnimatePresence>
                {open && <motion.div
                    className={styles.menuContainer}
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <ul>
                        <li><Link to="home" spy={true} smooth={true} duration={300}>Home</Link></li>
                        <li><Link to="aboutus" spy={true} smooth={true} duration={300}>Sobre nós</Link></li>
                        <li><Link to="tech" spy={true} smooth={true} duration={300}>Tecnologias</Link></li>
                    </ul>
                </motion.div>}
            </AnimatePresence>
        </>
    )
    else return (
        <ul>
            <li><Link to="home" spy={true} smooth={true} duration={300}>Home</Link></li>
            <li><Link to="aboutus" spy={true} smooth={true} duration={300}>Sobre nós</Link></li>
            <li><Link to="tech" spy={true} smooth={true} duration={300}>Tecnologias</Link></li>
        </ul>
    )
}
 
export default BurguerNav;