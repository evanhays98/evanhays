import { motion } from 'framer-motion';
import React from 'react';
import MainContainer from "../components/MainContainer";
import {ProjetOne, ProjetThree, ProjetTwo} from "../Data/Data";

const ProjetPage = () => {
    return (
        <motion.div className="experiencepage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
            <h1 className='grostitre'>Mes Projets</h1>
            <MainContainer {...ProjetThree}/>
            <MainContainer {...ProjetTwo}/>
            <MainContainer {...ProjetOne}/>

        </motion.div>
    );
};

export default ProjetPage;