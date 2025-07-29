import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="Contact" className={styles["contact-container"]}>
        <h2 id="contact-title">Contact Me!</h2>
        <div className={styles["contact-elements"]}>
        <a className={styles["button-icons"]} href="https://github.com/MichaeltheGrt1">
            <i className="bi bi-github"></i>
        </a>
        <a className={styles["button-icons"]} href="https://www.linkedin.com/in/michael-kaulfuss-693387327">
            <i className="bi bi-linkedin"></i>
        </a>
        <a className={styles["button-icons"]} href="mailto:mlk00029@mix.wvu.edu">
            <i className="bi bi-envelope"></i>
        </a>
        </div>
    </section>
  );
}

export default Contact;
