import React, { useState, useEffect, useContext } from 'react';
import styles from '../styles/ContactModal.module.css'
import FloatingTagInput from './FloatingTagInput'
import FloatingTagTextArea from './FloatingTagTextArea'
import ContactInfo from './ContactInfo.jsx'
import { motion } from 'framer-motion'
import { ContactContext } from '../contexts/ContactContext.js'

console.log(useContext)
console.log('*********************')

const backDropVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.2 }
    }
}

const modalVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.2, ease: 'easeInOut' }
    }
  }

const loaderVariants = {
    rotate: {
        x: [-10, 10],
        y: [7, -7],
        transition: {
          x: {
            yoyo: Infinity,
            duration: 0.25
          },
          y: {
            yoyo: Infinity,
            duration: 0.125,
            ease: "easeOut"
          }
        }
    },
}

const ContactModal = ({ setShowContactModal }) => {
    const { form, setForm, sendMessage } = useContext(ContactContext)
    const [sending, setSending] = useState(false)
    const [feedback, setFeedback] = useState('')

    const handleChange = e => {
        const newForm = {...form}
        newForm[e.target.name] = e.target.value
        setForm(newForm)
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSending(true)
        sendMessage()
        .then(res => {
            setFeedback('Sucesso! Retornarei seu contato o mais cedo possível')
            setSending(false)
        })
        .catch(err => {
            setFeedback('Falha! Por favor, tente outra via de contato')
            setSending(false)
        })
    }

    useEffect(() => {
        document.querySelector('body').style.overflow = 'hidden'
        return () => {document.querySelector('body').style.overflow = 'unset'}
    }, [])

    return (
        <motion.div
            className={styles.backDrop}
            variants={backDropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
        >
            <motion.div
                className={styles.modal}
                variants={modalVariants}
                initial="hidden"
                animate="visible"
            >
                <button
                    className={styles.closeBtn}
                    onClick={e => setShowContactModal(false)}
                >X</button>
                <form onSubmit={handleSubmit}>
                    <FloatingTagInput
                        styles={styles}
                        label="Nome:"
                        inputKey="name"
                        handleChange={handleChange}
                        form={form}
                    />
                    <FloatingTagInput
                        styles={styles}
                        label="Email:"
                        inputKey="email"
                        handleChange={handleChange}
                        form={form}
                    />
                    <FloatingTagInput
                        styles={styles}
                        label="Telefone:"
                        inputKey="phone"
                        handleChange={handleChange}
                        form={form}
                    />
                    <FloatingTagTextArea
                        styles={styles}
                        label="Mensagem:"
                        inputKey="message"
                        handleChange={handleChange}
                        form={form}
                    />
                    {sending ? (
                    <span className={styles.loader}><motion.div
                        variants={loaderVariants}
                        animate="rotate"
                    ></motion.div></span>
                    ) : (<button>Enviar</button>)
                    }
                    {feedback && <div className={styles.feedbackContainer}>{feedback}</div>}
                </form>
                <ContactInfo />
            </motion.div>
        </motion.div>
    )
}
 
export default ContactModal;