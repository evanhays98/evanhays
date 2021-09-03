import { motion } from 'framer-motion';
import React from 'react';
import MainContainer from "../components/MainContainer";
import {ForamtionTwo, FormationOne, Formationthree, homeObjOne, homeObjThree, homeObjTwo} from "../Data/Data";

const FormationPage = () => {
    return (
        <motion.div className="experiencepage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
            <h1 className='grostitre'>Mes Formations</h1>
            <MainContainer {...FormationOne}/>
            <MainContainer {...ForamtionTwo}/>
            <MainContainer {...Formationthree}/>
        </motion.div>
    );
};

export default FormationPage;