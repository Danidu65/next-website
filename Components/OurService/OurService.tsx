import React from 'react'

import styles from './OurService.module.css'

export const OurService = () => {
    return (
        <div className={styles.Aboutus}>
            <div className={styles.Content}>
                <h6>Our Service</h6>
                <div className={styles.CustomContent}>
                    <div>
                        <img src="assets/hub/time-is-money 1.png" alt="" />
                        <h6>Money Advances</h6>
                        <h5>
                            As a valued registered customer, you have access to special money advance services designed to meet your short-term financial needs with convenience and ease.

                        </h5>
                    </div>
                    <div>
                    <img src="assets/hub/fertilizer (1) 1.jpg" alt="" />
                        <h6>Supply Fertilizes</h6>
                        <h5>
                            We supply these fertilize types , on customer’s request.

                            T200 (1 years-)
                            T750(1 years+)
                            T709(5 years+)

                            And conducting guide sessions.
                        </h5>
                    </div>
                    <div>
                    <img src="assets/hub/tea-bag (1) 1.png" alt="" />
                        <h6>Supply Tea Bags</h6>
                        <h5>
                            As a registered customer, you now have access to our exclusive Tea Packet Supply Service, designed to enhance your tea-drinking experience with convenience and quality.
                        </h5>
                    </div>
                    <div>
                    <img src="assets/hub/lorry (1) 1.png" alt="" />
                        <h6>Transports</h6>
                        <h5>
                            Efficient and reliable, our tea leaves transporting service ensures From your place , destination safely and on time.
                            We guarantee the freshness and integrity of your tea leaves.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}
