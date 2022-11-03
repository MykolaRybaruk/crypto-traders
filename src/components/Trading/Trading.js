import React from "react";
import styles from "./Trading.module.css";

function Trading() {
  return (
    <section className={styles.tradingWrapper}>
      <h1>Crypto Trading</h1>

      <div className={styles.slogan}>
        <h2 className={styles.sloganBox}>
          <span className={styles.firstWord}>Engineers</span> Meets{" "}
          <span className={styles.lastWord}>
            Traders <span className={styles.underlines}>__</span>
          </span>
        </h2>
      </div>

      <div className={styles.textAfterSlogan}>
        Advanced crypto algorithmic trading and efficient cross-chain execution,
        at scale.
      </div>

      <div className={styles.learnMoreButton}>
        Learn More
        <div className={styles.buttonArrow}>
          <img
            className={styles.arrow}
            src="/img/arrowDown.svg"
            alt="Arrow Down"
          />
        </div>
      </div>

      <div className={styles.bgScheme}></div>
    </section>
  );
}

export default Trading;
