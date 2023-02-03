
import React from 'react';
import styles from './character.module.css'

import TableC from "../components/AntTable";


export const Localizations: React.FC = () => {

    return (
        <>
            <h1>Localizations</h1>

            <div className={styles.container}>

                    <TableC  ></TableC>
            
            </div>


        </>
    );
};

