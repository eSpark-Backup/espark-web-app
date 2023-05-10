import React from 'react'
import styles from "./style.module.css";
import { partnerLogs } from '../../helper/aboutus';
const OurPartner = () => {
  return (
    <div>
         <div className="container-fluid my-3 d-flex">
        <div className={styles.lines}></div>
        <div className={styles.aboutTextLorem}>
          <span className={styles.aboutLorem}>LoremIpsum</span>
        </div>
        <div className={styles.lines}></div>
      </div>
      <div className={` ${styles.partners}`}>
        <div className={`d-flex justify-content-between  ${styles.partne}`}>
            {
                partnerLogs.map((partnerLog) =>{
                    return (
                        <div>
                            <img src={partnerLog.images} className={styles.partnerImages} />
                        </div>

                    )
                })

            }
        </div>
      </div>
      <div className={`container my-4 d-flex ${styles.lineBottom}`}>
        <div className={styles.lines}></div>
        <div className={styles.aboutText}>
          <span className={styles.review}>Review</span>
        </div>
        <div className={styles.lines}></div>
      </div>
    </div>
  )
}

export default OurPartner