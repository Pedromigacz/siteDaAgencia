import React, { useEffect, useState } from 'react';
import styles from '../styles/ContactButton.module.css'
import { AnimateSharedLayout, motion, AnimatePresence } from 'framer-motion'
import ContactModal from './ContactModal.jsx'

const contactVariants = {
    initial: {
        borderRadius: 0,
        color: ["#f4f4f4", "#061D3A"],
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    },
    animate: {
        borderRadius: 30,
        color: ["#f4f4f4", "#061D3A"],
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

const ContactBtn = () => {
    const [scrolled, setScrolled] = useState(false)
    const [showContactModal, setShowContactModal] = useState(false)

    const handleScroll = () => {
        if(window.scrollY > 300) setScrolled(true)
        else setScrolled(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <>
        <AnimateSharedLayout type="crossfade">  
            <motion.button
                layout
                className={`${styles.button} ${scrolled ? styles.fixedButton : styles.staticButton}`}
                variants={contactVariants}
                initial={false}
                animate={scrolled ? "animate" : "initial"}
                onClick={e => setShowContactModal(true)}
            >{scrolled ? '@' : 'Entre em contato'}</motion.button>
        </AnimateSharedLayout>
        <AnimatePresence exitBeforeEnter>
            {showContactModal && <ContactModal setShowContactModal={setShowContactModal}/>}
        </AnimatePresence>
        </>
    );
}
 
export default ContactBtn;