import { useState } from 'react';
import { AiOutlineBook } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineHome } from 'react-icons/ai';
import ContactModal from '../modal/ContactModal';
import styles from './Footer.module.css';

const Footer = () => {
    const [ isOpen, setIsOpen ] = useState(false);

    const isOpenHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className={styles.wrapper}>
            <p>개발자 : 김양현</p>
            <p>제작기간 : 2021.12.06 ~ 2022.02.11</p>
            <ul className={styles.iconBox}>
                <li><a title='Notion 스터디 로그' href='https://www.notion.so/fbc0ba9fe41d4c5ba6fa9a6f74c4c975?v=bb7bd567fec4462d958f9cb8f36d3375' rel="noopener noreferrer" target="_blank"><AiOutlineBook className={styles.icon} /></a></li>
                <li><a title='깃허브' href='https://github.com/loocia1910/senior-class' rel="noopener noreferrer" target="_blank"><AiOutlineGithub className={styles.icon} /></a></li>
                <li><a title='블로그' href='https://velog.io/@loocia1910' rel="noopener noreferrer" target="_blank"><AiOutlineHome className={styles.icon} /></a></li> 
            </ul>
            <button className={styles.btn} onClick={isOpenHandler} type='button'>담당 개발자에게 연락하기</button>
            {isOpen ? < ContactModal isOpenHandler={isOpenHandler} isOpen={isOpen}/> : null}
        </div>
    )
}

export default Footer;