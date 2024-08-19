import { Link } from 'react-router-dom';
import styles from './signin.module.css';

const SignIn = () => {
    return (
        <div className={styles.featureSection}>
            <img
                className={styles.featureSectionChild}
                alt="Coffee Shop"
                src="/src/assets/Authentication/coffeshop.png"
            />
            <div className={styles.frameParent}>
                <div className={styles.signInToYourAccountParent}>
                    <b className={styles.signInTo}>Sign In to Your Account</b>
                    <div className={styles.welcomeToInfinity}>
                        Welcome to Infinity POS
                    </div>
                </div>
                <form className={styles.textFieldParent}>
                    <input
                        type="email"
                        placeholder="Enter Your email"
                        className={styles.inputField}
                    />
                    <input
                        type="password"
                        placeholder="Enter Your password"
                        className={styles.inputField}
                    />
                    <button type="submit" className={styles.primary}>
                        Sign In
                    </button>
                </form>
                <div className={styles.newToInfinity}><Link to={'/Register'}>New to Infinity POS?</Link> </div>
            </div>
        </div>
    );
};

export default SignIn;
