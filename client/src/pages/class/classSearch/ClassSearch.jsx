import { useState, useEffect, useMemo } from 'react';
import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import WrongResult from '../../wrongResult/WrongResult';
import ClassCard from '../../../components/class/classCard/ClassCard';
import styles from './ClassSearch.module.css';

const ClassSearch = () => {
  const param = useParams();
  const { onlineClass, offlineClass, freeClass, latestClass } = useSelector((state) => state.class);
  const allClass = useMemo(() => [ ...onlineClass, ...offlineClass, ...freeClass, ...latestClass ], 
                           [ onlineClass, offlineClass, freeClass, latestClass ]);
  const { searchValue } = param;
  const [ searchParam ] = useState([ 'name' ]);
  const [ filteredList, setFilteredList ] = useState([]);


  useEffect(() => {
    const filteredClass = allClass.filter((c) => {
        return searchParam.some((key) => 
            c[key].indexOf(searchValue) > -1 || // 수업명
            c['User'][key].indexOf(searchValue) > -1 // 강사명
        );
    });
    setFilteredList(filteredClass);
  }, [ allClass, searchValue, searchParam]);

  return (
      <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.resultTxt}>
              <span><strong>"{searchValue}"</strong> 검색결과 </span>
              <span>(총 {filteredList.length}건)</span>
            </div>
            <div className={styles.classCardBox}>
              {
              filteredList.length === 0 
              ?
              <WrongResult  msg='찾을 수 없는 검색결과 입니다.'/>
              :

              !!filteredList && filteredList.map((c, idx) => 
                  <div  key={idx} className={styles.classCard}>
                    <ClassCard
                        classId={c.id}
                        teacherName={c.User.name}
                        cName={c.name}
                        price={c.price}
                        discount={c.discount}
                        region={c.region}
                        img={c.img_url}
                    />
                  </div>
               )}
              </div>
          </div>
      </div>
  )
};

export default ClassSearch;