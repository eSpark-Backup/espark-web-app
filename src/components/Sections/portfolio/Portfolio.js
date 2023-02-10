import React from 'react'
import { portFolios } from '../../../helper/portFolio';
import styles from './style.module.css';

const Portfolio = () => {
  return (
    <div className="container pt-5 mt-5">
        <div className={styles.headingWithPra}>
          <h2>OUR PORTFOLIO</h2>
          <p>
            Empowering decentralization, one project at a time
          </p>
        </div>
      <div className="row  pt-5 mt-3">
        {portFolios.map((item) => {
          return (
            <div className="col-sm-6 col-md-4 col-lg-3 my-2">
              <div className={styles.wrapper}>
                <div className={styles.imagesWrapper}>
                  <img src={item.img}  className={styles.images} alt={'image'}/>
                  <div className={styles.titleWrapper}>
                    <h3 className={styles.titleText}>{item.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Portfolio