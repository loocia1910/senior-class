import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { BsPlayBtn } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import styles from './Header.module.css';

export default function Header () {
    const [ style, setStlye ]  = useState({display: 'none'});

    return (
        <header>
            <div className={styles.developer}>
                <span>개발자 : 김양현</span>
                <span>담당 개발자에게 연락하기</span>
            </div>
            <div className={`${styles.flexCenterAlign} ${styles.logoRow}`}>
                <div className={styles.logoBox}>
                    <h1><Link to="/">시니어 클래스</Link></h1>
                </div>
                <div className={styles.searchFormBox}>
                    <form >
                        <input className={styles.searchForm} type="search" placeholder="어떤 취미를 찾고 계신가요?"/>
                        <button className={styles.searchBtn}>
                            <BsSearch className={styles.searchIcon}/>
                        </button>
                    </form>
                </div>
                <ul
                className={`${styles.userIconBox} ${styles.flex}`}>
                    <li 
                        className={styles.userIconGnb}
                        onMouseEnter={ e => {
                            setStlye({ display: 'block', position: 'absolute', zIndex: 10000 } )
                        }}
                        onMouseLeave={ e => {
                            setStlye({display: 'none'})
                        }}
                    >
                        <AiOutlineUser className={`${styles.myIcon} ${styles.userIcon}`}/>
                        <ul 
                        style={style}
                        >
                            <li>
                              마이페이지
                            </li>
                            <li>
                            회원정보
                            </li>
                        </ul>
                    </li>
                    <li><BsPlayBtn className={styles.myIcon}/></li>{/* 내 강의 */}
                    <li><AiOutlineHeart className={styles.myIcon}/></li>{/* 강의 찜 */}
                </ul>
            </div>
            <nav>
                <ul className={styles.classMenuBox}>
                    <li className={styles.classMenu}>온라인 클래스</li>
                    <li className={styles.classMenu}>오프라인 클래스</li>
                    <li className={styles.classMenu}>신규 클래스</li>
                    <li className={styles.classMenu}>무료 클래스</li>&nbsp;&nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;
                    <li className={styles.applyTeacher}>강사지원하기</li>
                </ul>
                <div className={styles.joinBox}>
                    <span>로그인</span>
                    <span>회원가입</span>
                </div>
            </nav>
        </header>
    )
}