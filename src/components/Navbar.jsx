import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { graphql, useStaticQuery } from 'gatsby'
import NavMenu from './NavMenu.jsx'

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    const { logoAsset: { logo }, scrollAsset: { scrollDownIndicator } } = useStaticQuery(graphql`
        {
            logoAsset:strapiAssets(assetName: {eq: "logo"}) {
                logo:assetFile {
                    url
                }
            }
            scrollAsset:strapiAssets(assetName: {eq: "scrollDownIndicator"}) {
                scrollDownIndicator:assetFile {
                    url
                }
            }
        }
    `)

    useEffect(() => {window.addEventListener('scroll', () => {
        if(window.scrollY !== 0) setScrolled(true)
        else setScrolled(false)
    })}, [])

    return (
        <>
        <nav className={styles.navbar}>
            <Link to="home" spy={true} smooth={true} duration={300}><img
                src={(process.env.GATSBY_STRAPI_URL || 'http://localhost:1337') + logo[0].url}
                alt="PedroMigacz"
                className={styles.logo}
            /></Link>
            <NavMenu />
        </nav>
        <AnimatePresence>
            {!scrolled && <motion.div
                className={styles.scrollDownIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <span>deixa eu te mostrar</span>
                <img src={(process.env.GATSBY_STRAPI_URL || 'http://localhost:1337') + scrollDownIndicator[0].url} alt="scroll down indicator"/>
            </motion.div>}
        </AnimatePresence>
        </>
    );
}
 
export default Navbar;