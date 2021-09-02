import { motion } from 'framer-motion';
import React from 'react';

const CompetencePage = () => {
    return (
        <motion.div className="competencepage"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>

        </motion.div>
    );
};

export default CompetencePage;