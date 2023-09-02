import { FC } from "react";
import { Link } from "react-router-dom";
import styles from './ScreenHeader.module.css';


interface ScreenHeaderProps{
    pathname : string;
}

const ScreenHeader : FC<ScreenHeaderProps> = ({
    pathname = ''
}) => {
    return (
        
        <header className={styles.headerContainer}>
            <ul className={styles.ul}> 
             <div className = {styles.image}>
                 <Link to = "/" className = {styles.scLink}></Link>
             </div>
              <li className={`${styles.li} ${pathname === '/' && styles.current}`}>
                <Link to = "/" className = {`${styles.scLink}
                ${pathname === '/' && styles.current} `}>
                홈
                </Link>
            </li>
            <li className={`${styles.li} ${pathname.includes('/movie') && styles.current}`}>
                <Link to = "/movie" className = {`${styles.scLink}
                ${pathname.includes('/movie') && styles.current} `}>
                영화
                </Link>
            </li>
            </ul>
        </header>
    );
};
export default ScreenHeader;