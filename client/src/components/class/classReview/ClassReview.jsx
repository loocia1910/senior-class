import styles from './ClassReviewWrap.module.css';

const data = [
    {
        login_id: '김이름',
        user_profile: '이미지',
        contents: '와 이 수업 완전 좋아요~~!',
        createdAt: '2022.02.04'
    },
    {
        login_id: '김이름',
        user_profile: '이미지',
        contents: '와 이 수업 완전 좋아요~~!',
        createdAt: '2022.02.04'
    },
    {
        login_id: '김이름',
        user_profile: '이미지',
        contents: '와 이 수업 완전 좋아요~~!',
        createdAt: '2022.02.04'
    },
    {
        login_id: '김이름',
        user_profile: '이미지',
        contents: '와 이 수업 완전 좋아요~~!',
        createdAt: '2022.02.04'
    }
]

const ClassReviewWrap = () => {
    return (
        <section>
            {
                data.map((user, idx) => (
                    <ClassReview
                      key={idx} 
                      login_id={user.login_id}
                      profile={user.profile}
                      contents={user.contents}
                      createdAt={user.createdAt}
                    />
                ))
            }
        </section>
    )
}

const ClassReview = ({login_id, profile, contents, createdAt}) => {
    return (
        <div className={styles.container}>
            <div className={`${styles.flex} ${styles.wrapper}`}>
                 <div  className={styles.profile}>
                    {/* <img src={profile} alt={login_id + '프로필 이미지'} /> */}
                 </div> 
                 <div>
                     <p className={styles.login_id}>{login_id}</p>
                     <span className={styles.createdAt}>{createdAt}</span>
                     <p>{contents}</p>   
                 </div>
            </div>
        </div>
    )
}

export default ClassReviewWrap;