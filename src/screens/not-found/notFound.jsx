import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import SEO from '../../utils/SEO';

function NotFound() {
  const location = window.location.href
 console.log(location, "locatioan")
  return (
    <>
     <SEO title="Not found" description="eSpark web app"/>
      <div className={styles.notFoundWrapper}>
        <h1>404 Page Not Found</h1>
        <p className={styles.btnWrapper}>
          The page you requested cannot be displayed right now.It may be
          temporarily unavailable, the link you clicked on may <br />
          be broken or expired, or you may not have permission to view this
          page.
        </p>
        <div className={styles.btnWrapper}>
          <Link to={"/"}>
            <a className="btn btn-secondary">
              Back to home
              <FaLongArrowAltRight className={styles.arrowSize} />
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
