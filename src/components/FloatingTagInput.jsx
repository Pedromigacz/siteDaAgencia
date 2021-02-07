import React, { useState } from 'react';
import { motion } from 'framer-motion'

const FloatingTagInput = ({styles, label, inputKey, handleChange, form}) => {
    const [labelFocused, setLabelFocused] = useState(false)
    return (
        <span className={styles.inputContainer + ' ' + styles.formRow}>
            <motion.label
                initial={{ y: 32 }}
                animate={{ y: (form[inputKey] || labelFocused) ? 10 : 32 }}
            >{label}</motion.label>
            <input
                onFocus={e => setLabelFocused(true)}
                onBlur={e => setLabelFocused(false)}
                type="text"
                name={inputKey}
                onChange={handleChange}
                value={form[inputKey]}
            />
        </span>
    );
}
 
export default FloatingTagInput;