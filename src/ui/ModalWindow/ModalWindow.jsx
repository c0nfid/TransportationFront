import React, {useState} from 'react';
import {AnimatePresence, motion} from "framer-motion";
import classes from "./ModalWindow.module.css";
const ModalWindow = ({isVisible, setIsVisible, children}) => {

    const states = {
        hidden: {opacity: 0},
        visible: {opacity: 1}
    }


    return (
        <AnimatePresence mode={"wait"}>
            {isVisible &&
                (<motion.div
                    variants={states}
                    transition={{duration: 0.5, type: "spring"}}
                    initial={"hidden"}
                    animate={"visible"}
                    exit={"hidden"}
                    className={classes.backDrop} onClick={() => setIsVisible(false)}>
                    <motion.div
                        initial={{opacity: 0, scale: 0.9, translateY: 400}}
                        animate={{opacity: 1, scale: 1, translateY: 0}}
                        exit={{opacity: 0, scale: 0.9, translateY: 500}}
                        className={classes.content} onClick={(e) => e.stopPropagation()}>
                        {children}
                    </motion.div>
                </motion.div>)}
        </AnimatePresence>
    );
};

export default ModalWindow;