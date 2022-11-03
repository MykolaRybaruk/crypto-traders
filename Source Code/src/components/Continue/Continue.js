import React from "react";
import styles from "./Continue.module.css";

function Continue() {
  return (
    <div className={styles.continue}>
      <img className={styles.mouse} src="/img/mouse.svg" alt="Mouse" />
      <h3>To be continue...</h3>
      <div className={styles.seeCode}>
        <a
          href="https://github.com/MykolaRybaruk/crypto-traders"
          target="_blank"
          rel="noreferrer"
        >
          See Code
        </a>
      </div>
    </div>
  );
}

export default Continue;
