import React from 'react'

import styles from './contactTeam.module.css'

interface BusinessGrowsProps {
    ImgUrl: string,
    ImgAlt?: string,
    h4Text: string,
}

export const ContactTeam = (
    {
        ImgUrl,
        ImgAlt,
        h4Text,
    }: BusinessGrowsProps
) => {
    return (
        <div className={styles.BusinessGrowsBg}>
        <div>
            <div>
                <img src={ImgUrl} alt={ImgAlt} />
            </div>
            <div className={styles.Overlay}></div>
        </div>
        <div className={styles.Content}>
            <h6>{h4Text}</h6>
        </div>

    </div>
    )
}
