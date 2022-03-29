//import { useState } from 'react';
import './App.css';
import { motion } from 'framer-motion';

const variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
    },
};

const list = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

function App() {
    return (
        <div className="App">
            <div className="header">
                <nav>
                    <motion.ul
                        variants={variants}
                        initial="hidden"
                        animate="show"
                    >
                        <motion.li variants={list}>Home</motion.li>
                        <motion.li variants={list}>About Us</motion.li>
                        <motion.li variants={list}>Contact</motion.li>
                        <motion.li variants={list}>Gallery</motion.li>
                    </motion.ul>
                </nav>
            </div>
            <div className="main">
                <motion.div
                    viewport={{ once: true }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1 },
                    }}
                    initial={{ x: -1200 }}
                    animate={{
                        x: -400,
                        opacity: 0,
                    }}
                    className="cuadrado"
                >
                    <h1>Esto es increíble</h1>
                </motion.div>
            </div>
            <div className="footer">
                <motion.div
                    viewport={{ once: true }}
                    whileInView={{
                        x: 0,
                        opacity: 1,
                        transition: { duration: 1 },
                    }}
                    initial={{ x: 1200 }}
                    animate={{
                        x: 400,
                        opacity: 0,
                    }}
                    className="cuadrado"
                >
                    <motion.h1>Esto también</motion.h1>
                </motion.div>
            </div>
        </div>
    );
}

export default App;

{
    /* ; */
}
