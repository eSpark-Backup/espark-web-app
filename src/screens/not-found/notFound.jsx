import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.css'
import { FaLongArrowAltRight } from 'react-icons/fa';


function NotFound() {
    return (
    <>
    <div className={styles.notFoundWrapper} >
        <h1>404 Page Not Found</h1>
        <p className={styles.btnWrapper}>The page you are lookig for might be has been removed <br/> had its name changed or is temporary unavailable</p>
        <div className={styles.btnWrapper}>
          <Link to={'/'}>
            <a className='btn btn-secondary'>GO TO HOMEPAGE<FaLongArrowAltRight  className={styles.arrowSize}/></a>
          </Link> 
        </div>
    </div>
    </>
  )
}

export default NotFound