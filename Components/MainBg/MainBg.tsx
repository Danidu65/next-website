import React from 'react'

import styles from './MainBg.module.css'

interface MainBgProps {
    ImgUrl: string,
    ImgAlt?: string,
    h4Text: string,
    h5Text: string,
    h6Text: string,
    h2Text: string,
}

export const MainBg = (
    {
        ImgUrl,
        ImgAlt,
        h4Text,
        h5Text,
        h6Text,
        h2Text
    }: MainBgProps
) => {
    return (
        <div className={styles.MainBg}>
            <div>
                <div>
                    <img src={ImgUrl} alt={ImgAlt} />
                </div>
                <div className={styles.Overlay}></div>
            </div>
            <div className={styles.Content}>
                <h6>{h4Text}</h6>
                <h6>{h5Text}</h6>
                <h5>{h6Text}</h5>
                <button className={styles.CButton}>{h2Text}</button>
            </div>

        </div>
    )
}
