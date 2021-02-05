import React from 'react';
import styles from '../styles/SkillList.module.css'

const SkillList = ({ title, content: { skillList } }) => (
    <div className={styles.skillListContainer}>
        <h3>{title}</h3>
        <ul>{
        skillList.map(s => {
            const image = {...s.icon[0]}
            return (
                <li key={s.id}>
                    <img src={(process.env.GATSBY_STRAPI_URL || 'http://localhost:1337') + image.url} alt={''} />
                    <span>{s.skill}</span>
                </li>
            )
        })
        }</ul>
    </div>
)
 
export default SkillList;