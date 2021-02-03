import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styles from '../styles/SkillListsContainer.module.css'
import SkillList from './SkillList.jsx'

const SkillListsContainer = () => {
    const { backend, frontend, others } = useStaticQuery(graphql`
    {
        backend:allStrapiSkills(filter: {category: {eq: "backEnd"}}, sort: {fields: priority}) {
            skillList:nodes {
                id
                skill
                icon {
                    url
                    name
                }
            }
        }
        frontend:allStrapiSkills(filter: {category: {eq: "frontEnd"}}, sort: {fields: priority}) {
            skillList:nodes {
                id
                skill
                icon {
                    url
                    name
                }
            }
        }
        others:allStrapiSkills(filter: {category: {eq: "outros"}}, sort: {fields: priority}) {
            skillList:nodes {
                id
                skill
                icon {
                    url
                    name
                }
            }
        }
    }
    `)


    return (
    <div className={styles.SkillListsContainer}>
        <h2>Trabalhamos com as mais modernas tecnologias:</h2>
        <div className={styles.genericFlexContainer}>
            <SkillList title="Back-end:" content={backend}/>
            <SkillList title="Front-end:" content={frontend}/>
            <SkillList title="DevOps/Outros:" content={others}/>
        </div>
    </div>
)}
 
export default SkillListsContainer;