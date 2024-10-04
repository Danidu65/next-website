import React from 'react'

import styles from './Rates.module.css'

// for Data
import { RateData } from '@/static/RateData'

// For Components
import { Content } from '../Content/Content'
import { Box } from './Box'

export const Rates = () => {
    return (
        <div className={styles.GamingUniverse}>
            <Content
                h6Text='Our Rates'
                
            />

            <div className={styles.Row}>
                {
                    RateData.map((I) => (
                        <Box
                            key={I.id}
                            h6Text={I.Header}
                            pText={I.Desc}
                            Imgurl={I.ImgUrl}
                        />
                    ))
                }
            </div>

        </div>
    )
}
