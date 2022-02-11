import styles from './MyClassList.module.css';

const MyClassList = () => {


    return (
        <div className={styles.wrapper}>
            <h2>나의 클래스</h2>
            <p className={styles.noData}>등록된 클래스가 없습니다.</p>
        </div>
    )
}

export default MyClassList;