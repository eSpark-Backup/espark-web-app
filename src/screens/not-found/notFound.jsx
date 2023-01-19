import React from "react";
import styles from "./style.module.css";
import Button from "../../components/button/button";

function NotFound() {
  return (
    <>
      <div className={styles.notFoundWrapper}>
        <h1>404 Page Not Found</h1>
        <p className={styles.btnWrapper}>
          The page you requested cannot be displayed right now.It may be
          temporarily unavailable, the link you clicked on may <br />
          be broken or expired, or you may not have permission to view this
          page.
        </p>
        <div className={styles.btnWrapper}>
          <Button title="Back to home" link="/" design={1} />
        </div>
      </div>
    </>
  );
}

export default NotFound;
