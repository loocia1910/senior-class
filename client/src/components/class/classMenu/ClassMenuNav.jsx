import { Link, useParams } from 'react-router-dom' 
import { categorys } from '../../../components/landing/section2/data';
import styles from './ClassMenuNav.module.css';

const ClassMenuNav = () => {
    const params = useParams();

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <nav>
                    <ul>
                        {categorys.map((el, idx) => (
                            <Link key={idx} to={`/class/${params.type}/${el.name}`} >
                                <li
                                  className={styles.NavMenu}
                                >
                                    {el.name}
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