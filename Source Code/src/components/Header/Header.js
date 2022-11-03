import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>C</div>

        <nav className={styles.navigation}>
          <a className={styles.navItem} href="/index.html">
            Activities
          </a>
          <a className={styles.navItem} href="/index.html">
            Technology
          </a>
          <a className={styles.navItem} href="/index.html">
            R&D
          </a>
          <a className={styles.navItem} href="/index.html">
            Community
          </a>

          <div className={styles.careerButton}>
            <p>Career</p>
            <img
              className={styles.upRightArrow}
              src="/img/upRightArrow.svg"
              alt="Career Arrow"
            />
          </div>
        </nav>

        <div className={styles.burger}>
          <div className={styles.upLine}></div>
          <div className={styles.underLine}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
