import React from 'react'

import styles from './AboutUs.module.css'

export const Aboutus = () => {
    return (
        <div className={styles.Aboutus}>

            <div className={styles.AboutImgs}>
                <div className={styles.AboutImg1}>
                    <img src="assets/about2.jpg" alt="" />
                </div>
            </div>

            <div className={styles.Content}>
                <h6>The Natural Garden</h6>
                <h5>Quality Leaves , High Rates</h5>
                <p>
                There was once a King who had a great palace with wonderful gardens. In those gardens, thousands of creatures from hundreds of different species lived together. Their variety and colors turned the place into a kind of paradise that everyone could enjoy.

Among these creatures were butterflies that danced in the sunlight, bees that hummed as they collected nectar, and squirrels that scampered up and down the trees.
                </p>

                <div className={styles.CustomContent}>
                    <div>
                        <img src="assets/hub/High Rates.jpg" alt="" />
                        <h6>High Rates</h6>
                    </div>
                    <div>
                    <img src="assets/hub/fertilizer (1) 1.jpg" alt="" />
                        <h6>Supplies Ingredients</h6>
                    </div>
                    <div>
                    <img src="assets/hub/customer-care 1 (1).jpg" alt="" />
                        <h6>Customer Priority</h6>
                    </div>
                    <div>
                    <img src="assets/hub/farmer 1.jpg" alt="" />
                        <h6>Experienced Staff</h6>
                    </div>
                </div>

            </div>
        </div>
    )
}
