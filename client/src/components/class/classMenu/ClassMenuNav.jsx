import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom' 
import styles from './ClassMenuNav.module.css';

const ClassMenuNav = () => {
    const params = useParams();
    const { type } = params;
    const regions =  ['서울', '경기도', '충청도', '강원도', '전라도', '경상도'];
    const categorys = [ '커리어', '운동&건강', '음료&요리', '미술', '공예', '음악', '사진&영상', '재테크', '외국어' ];


    const [ menus, setMenus ] = useState([])
    
    useEffect(() => {
        if(type === 'offline') {
            setMenus(regions);
        } else {
            setMenus(categorys);
        }
    }, [type])

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <nav>
                    <ul>
                        {!!menus && menus.map((category, idx) => (
                            <Link key={idx} to={`/class/${type}/${category}`} >
                                <li
                                  className={styles.NavMenu}
                                >
                                    {category}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}
  

export default ClassMenuNav;