import React, { useState } from 'react';
import { motion } from 'framer-motion'

const FloatingTagInput = ({styles, label, inputKey, handleChange, form}) => {
    const [labelFocused, setLabelFocused] = useState(false)
    return (
        <span className={styles.inputContainer}>
            <motion.label
                initial={{ y: 32 }}
                animate={{ y: (form[inputKey] || labelFocused) ? 10 : 32 }}
            >{label}</motion.label>
            <textarea
                rows="6"
                cols="54"
                onFocus={e => setLabelFocused(true)}
                onBlur={e => setLabelFocused(false)}
                name={inputKey}
                onChange={handleChange}
                value={form[inputKey]}
            />
        </span>
    );
}
 
export default FloatingTagInput;