import Footer from "../../Defaults/Footer/Footer";
import Navigation from "../../Defaults/Navigation/Navigation";

import styles from './Register.module.css';
function Register() {
    return(
        <>
        <Navigation/>
        <div className={styles.container}>
      <div className={styles.backgroundContainer}>
        <div className={styles.overlay} />
        <img className={styles.logo} src="https://via.placeholder.com/160x38" alt="Logo" />
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <h2 className={styles.title}>Create Your Account</h2>
            <p className={styles.subtitle}>Welcome to Infinity POS</p>
          </div>
          <form className={styles.formFields}>
            <div className={styles.formField}>
              <label htmlFor="fullname" className={styles.label}>Full Name</label>
              <input id="fullname" type="text" className={styles.inputBox} placeholder="Enter Your Full Name" />
            </div>
            <div className={styles.formField}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input id="email" type="email" className={styles.inputBox} placeholder="Enter Your Email" />
            </div>
            <div className={styles.formField}>
              <label htmlFor="location" className={styles.label}>Location</label>
              <input id="location" type="text" className={styles.inputBox} placeholder="Enter Your Location" />
            </div>
            <div className={styles.formField}>
              <label htmlFor="businessCategory" className={styles.label}>Business Category</label>
              <input id="businessCategory" type="text" className={styles.inputBox} placeholder="Select Business Category" />
            </div>
            <div className={`${styles.formField} ${styles.descriptionBox}`}>
              <label htmlFor="description" className={styles.label}>Description</label>
              <textarea id="description" className={styles.inputBox} placeholder="Description"></textarea>
            </div>
            <div className={styles.terms}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms" className={styles.termsLabel}>I Agree to our <span className={styles.underline}>Terms and Conditions</span></label>
            </div>
            <button type="submit" className={styles.signUpButton}>Sign Up</button>
            <div className={styles.signIn}>
              <span>Already have an account?</span><span className={styles.signInLink}> Sign in</span>
            </div>
          </form>
        </div>
        <div className={styles.blurCircle} />
        <div className={styles.footer}>
          <p className={styles.footerText}>Welcome to Restaurant Management portal. <br/>Login into your account or contact administrator for support & assistance.</p>
          <div className={styles.footerRights}>
            <div>© 2024 Restaurant Portal, Inc. All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
        <Footer/>
        </>
    )
}
export default Register;