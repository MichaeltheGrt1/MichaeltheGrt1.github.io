import React, { useEffect } from "react";
import styles from "./Banner.module.css";

function Banner(){
    return(
        <section id="Home" className={styles["banner-section"]}>
            <img src="/assets/banner.jpg" alt="Banner Image" className={styles["banner-img"]} />
            <div className={styles["banner-content"]}>
                <h1 className={styles["my-name"]}>Michael Kaulfuss</h1>
                <div className={styles["profile-wrapper"]}>
                    <img src="/assets/image0.jpg" alt="Profile Picture" className={styles["profile-pic"]} />
                </div>
                <p className={styles["banner-subtext"]}><i>Computer Science and Cybersecurity Student at WVU</i></p>
            </div>
        </section>
    );
}
export default Banner;