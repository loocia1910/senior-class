import { useState, useRef, useEffect } from 'react';
import { Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {  Outlet, useOutletContext } from 'react-router';
import styles from './ClassList.module.css';

export const ClassListWrap = () => {
    const [ category, setCatgory] = useState(''); // 클래스 리스트에서 클릭하면 해당 category 명이 바뀜
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                클래스 리스트 전체
                {/* 클래스 리스트 Nav */}
                <Outlet context={[category]}/>
            </div>
        </div>
    )
}

export const ClassList = ({ arg }) => {
    const [ category ] = useOutletContext();
    return (
        <div className={styles.listContainer}>
            <span>{category} 카테고리</span>
            <h2>{arg} 클래스</h2>
        </div>
    )
}

