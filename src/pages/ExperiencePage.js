import { motion } from 'framer-motion';
import React from 'react';
import MainContainer from "../components/MainContainer";
import {homeObjOne, homeObjThree, homeObjTwo} from "../Data/Data";

const ExperiencePage = () => {
    return (
        <motion.div className="experiencepage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
            <h1 className='grostitre'>Mes Experiences</h1>
            <MainContainer {...homeObjOne}/>
            <MainContainer {...homeObjTwo}/>
            <MainContainer {...homeObjThree}/>
        </motion.div>
    );
};

export default ExperiencePage;