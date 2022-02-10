import styles from './WrongResult.module.css';

const WrongResult = ({  msg }) => {
    return(
        <div className={styles.contanier}>
            <div className={styles.wrapper}>
                <img src='/img/nodata.gif' alt={msg} />
                <h3>{msg}</h3>
            </div>
        </div>
    )
}

export default WrongResult;