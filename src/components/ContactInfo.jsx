import React from 'react';
import { graphql, useStaticQuery } from 'gatsby'
import styles from '../styles/ContactInfo.module.css'

const parseToNumber = num => (num.split('').filter(n => parseInt(n))).join('')

const ContactInfo = () => {
    const { data: { number, email } } = useStaticQuery(graphql`
        {
            data:strapiContact {
                number
                email
            }
        }
    `)

    return (
        <>
        <div className={styles.orSeparator}>
            <span>OU</span>
            <hr/>
        </div>
        <div className={styles.ContactInfoContainer}>
            <span><a target="_blank" rel="noopener noreferrer" href={`https://api.whatsapp.com/send?phone=${parseToNumber(number)}&text=Ol%C3%A1`}>{number}</a></span>
            <span>{email}</span>
        </div>
        </>
    )
}
 
export default ContactInfo;