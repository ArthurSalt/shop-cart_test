import React from 'react';
import { Link } from 'react-router-dom';

import logoPng from '../../../assets/img/t_shirt_logo.png';

import styles from './Logo.module.scss'

const Logo: React.FC = () => {
   return (
      <Link to="/" className={styles.logo}>
         <div className={styles.logo_icon}>
            <img className={styles.logo_img} src={logoPng} alt="logo_img" />
         </div>
         <div className={styles.logo_text}>
            <h4>ALL T-SHIRTS</h4>
            <p>Best T-shirts all in one place</p>
         </div>
      </Link>
   );
}

export default Logo;