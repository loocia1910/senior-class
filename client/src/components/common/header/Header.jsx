import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { BsPlayBtn } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { signOutThunk } from '../../../reducers/api/userApi'
import ContactModal from '../modal/ContactModal';
import { CustomLink } from '../customLink/CustomLink';
import styles from './Header.module.css';


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [ style, setStlye ]  = useState({display: 'none'});
    const [ isOpen, setIsOpen ] = useState(false);
    const isOpenHandler = () => {
        setIsOpen(!isOpen);
    }
    const userInfo = useSelector((state) => state.user);
    const { nickname, is_login, profile_url } = userInfo;

    const onClickSignOut = async (e) => {
        try {
            setStlye({display: 'none'});
            await dispatch(signOutThunk({ navigate })).unwrap();
        } catch (err) {
            throw err;
        }
    };

    // 검색 기능
    const [ searchValue, setSearch ] = useState('');
    const onChangeSearch = (e) => {
        const searchValue = e.target.value;
        setSearch(searchValue);
    };
    const onKeyEnter = (e) => {
        // 엔터를 쳐도 검색이 된다.
        if(e.which === 13 || e.keyCode === 13) {
            navigate(`product/search/${searchValue}`);
        }
    };
    const onClickSearch = () => {
        navigate(`product/search/${searchValue}`);
    };

    return (
        <div className={styles.wrapper}>
            <header>
                <div className={styles.developer}>
                    <span>개발자 : 김양현</span>
                    <span onClick={isOpenHandler}>담당 개발자에게 연락하기</span>
                </div>
                <div className={`${styles.flexCenterAlign} ${styles.logoRow}`}>
                    <div className={styles.logoBox}>
                        <Link to="/"><h1 className={styles.logo}>Senior Class</h1></Link>
                    </div>
                    <div className={`${styles.searchFormBox} ${styles.relative}`}>
                        <div >
                            <input 
                               className={styles.searchForm}
                               type="search"
                               placeholder="어떤 취미를 찾고 계신가요?"
                               value={searchValue || ''}
                               onChange={onChangeSearch}
                               onKeyDown={onKeyEnter}
                            />
                            <button className={styles.searchBtn} onClick={onClickSearch}>
                                <BsSearch className={styles.searchIcon}/>
                            </button>
                        </div>
                    </div>
                    <ul className={`${styles.userIconBox} ${styles.flex}`}>
                        <li
                            className={`${styles.userIconGnb} ${styles.relative}`}
                            onMouseEnter={ e => {
                                e.preventDefault()
                                setStlye({ display: 'block' , zIndex: 99} )
                            }}
                            onMouseLeave={ e => {
                                e.preventDefault()
                                setStlye({display: 'none'})
                            }}
                        >
                            <AiOutlineUser className={`${styles.myIcon} ${styles.userIcon}`}/>
                            <ul style={style} >
                                <li><Link to={is_login ? '/mypage': '/signin'}>마이페이지</Link></li>
                                <li><Link to={is_login ? '/mypage/auth_modify': '/signin'}>회원정보</Link></li>
                            { is_login ? <li className={styles.logoutBtn} onClick={onClickSignOut}>로그아웃</li> : null }
                            </ul>
                        </li>
                        <li><Link to={is_login ? 'mypage/myclass': '/signin'}><BsPlayBtn className={styles.myIcon}/></Link></li>{/* 내 강의 */}
                        <li><Link to={is_login ? '/mypage': '/signin'}><AiOutlineHeart className={styles.myIcon}/></Link></li>{/* 강의 찜 */}
                    </ul>
                </div>
                <nav className={`${styles.relative} ${styles.nav}`}>
                    <ul className={`${styles.classMenuBox} ${styles.flex}`}>
                        <li className={styles.classMenu}><CustomLink to='class/online'>온라인 클래스</CustomLink></li>
                        <li className={styles.classMenu}><CustomLink to='class/offline'>오프라인 클래스</CustomLink></li>
                        <li className={styles.classMenu}><CustomLink to='class/latest'>신규 클래스</CustomLink></li>
                        <li className={styles.classMenu}><CustomLink to='class/free'>무료 클래스</CustomLink></li>
                        &nbsp;&nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;&nbsp;
                        <li className={styles.applyTeacher}><CustomLink to='teacher/apply'>강사지원하기</CustomLink></li>
                    </ul>
                    <div className={`${styles.joinBox} ${styles.absolute}`}>
                        { 
                           !is_login ? 
                            <div>
                                <span><Link className={styles.joinLink} to='signin'>로그인</Link></span>
                                <span><Link className={styles.joinLink} to='signup'>회원가입</Link></span>
                            </div>
                            :
                           <div className={styles.joinUser}>
                               <p><strong>{nickname}</strong>님</p>
                               <div className={styles.userImgBox}>
                                   <div className={styles.userImg}><img src={profile_url ? profile_url: '/img/user/default.jpg'} alt='프로필 사진'/></div>
                               </div>
                            </div>
                        }
                    </div>
                </nav>
            </header>
            {isOpen ? <ContactModal isOpenHandler={isOpenHandler} isOpen={isOpen}/>: null}
        </div>
    )
}

export default Header;