import React, { createContext, useState } from 'react';
import axios from 'axios'

export const ContactContext = createContext()

const ContactContextProvider = props => {
  const [form, setForm] = useState({name: '', email: '', phone: '', message: ''})

  const sendMessage = async () => {
    const res = await axios({
      url: (process.env.GATSBY_STRAPI_URL || 'http://localhost:1337') + '/messages',
      method: 'POST',
      data: form
    })
    return res
  }

  return (
    <ContactContext.Provider value={{ form, setForm, sendMessage }}>
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactContextProvider;