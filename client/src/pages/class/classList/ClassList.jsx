import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ClassCard from '../../../components/class/classCard/ClassCard';
import ClassMenuNav from '../../../components/class/classMenu/ClassMenuNav';
import styles from './ClassList.module.css';

export const ClassListWrap = () => {

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <section >
                    <ClassMenuNav />
                </section>
                <section >
                    <Outlet />
                </section>
            </div>
        </div>
    )
}

export const ClassList = () => {
    const { onlineClass, offlineClass, freeClass, latestClass } = useSelector((state) => state.class)
    const params = useParams();
    const { type, category } = params;
    const [ _type, setType ] = useState(type); // 해더 메뉴 클릭에 따라 type 변경
    const [ typeList, setTypeList ] = useState([]);
    const [ categoryList, setCategoryList ] = useState([]);
    const [ isFilterClicked, setFilterClicked ] = useState(false);
    const [ filterClassList, setFilterClassList ] = useState([]);
    
    const categoryClass = async (category) => {
      let filter =  await typeList.filter(el => el.category === category);
      await setCategoryList(filter);
    }

    const regionClass = async (region) => {
      let filter =  await typeList.filter(el => el.region === region);
      await setCategoryList(filter);
    }

    const filterClass = async (list, targetId) => {
      let filteredClass;
      let classes = list.slice();

      // 가격 오름차순
      if(targetId === 'priceASC') {
        filteredClass = classes.sort((a, b) => a.price - b.price);
      } 
      
      // 가격 내림차순
      else if ( targetId === 'priceDESC') {
        filteredClass = classes.sort((a, b) => b.price - a.price);
      }

      setFilterClassList(filteredClass);
    };

    // type에 따른 분류
    useEffect(() => {
      console.log('type', type)
      console.log('typeList', typeList)
      console.log('filterClassList', filterClassList);

      setFilterClicked(false);

      if(type === 'online') {
        setType('온라인');
        setTypeList(onlineClass);
      } else if (type === 'offline') {
        setType('오프라인');
        setTypeList(offlineClass);
      } else if (type === 'latest') {
        setType('신규');
        setTypeList(latestClass);
      } else if (type === 'free'){
        setType('무료')
        setTypeList(freeClass);
      }
      
    }, [type])

    
    // category에 따른 분류
    useEffect(() => {
      setFilterClicked(false);
      console.log('category', category)
      console.log('categoryList', categoryList)
      console.log('filterClassList', filterClassList);


      if(!category) return;
      if(type === 'offline') return;
      console.log('category??', category)
      
      if(category === '미술') {
         categoryClass('art');
      } else if(category === '커리어') {
        categoryClass('career');
      } else if(category === '운동&건강') {
        categoryClass('health');
      } else if(category === '음료&요리') {
        categoryClass('food');
      } else if(category === '공예') {
        categoryClass('craft');
      } else if(category === '음악') {
        categoryClass('music');
      } else if(category === '사진&영상') {
        categoryClass('picture');
      } else if(category === '재테크') {
        categoryClass('profits');
      } else if(category === '외국어') {
        categoryClass('foreign');
      }

    }, [category])

    // region에 따른 분류
    useEffect(() => {
      setFilterClicked(false);

      if(type !== 'offline') return;
      regionClass(category);
    }, [category])


    // filter 태그에 따른 분류
    const onClickFilter = async (e) => {
      const tagId = e.target.id
      setFilterClicked(true);


      // category가 없는 경우
      if(category === undefined) {
        await filterClass(typeList, tagId);
      } else {
        // category가 있는 경우
        await filterClass(categoryList, tagId);
      }
      console.log('filterClassList', filterClassList)
    };



    return (
        <div className={styles.listContainer}>
            <span>{_type} 클래스</span>
            <h2>{category || '전체보기'}</h2>
            <div>
              <span onClick={(e) => onClickFilter(e)} id='priceASC' className={styles.filterBtn}>#가격 낮은순</span>
              <span onClick={(e) => onClickFilter(e)} id='priceDESC' className={styles.filterBtn}>#가격 높은순</span>
              {/* <span onClick={(e) => onClickFilter(e)} id='reviewDESC' className={styles.filterBtn}>#리뷰 많은순</span> */}
            </div>
            <div className={styles.classCardBox}>
                { 
                isFilterClicked // filter 태그가 클릭되면
                ?
                filterClassList.map((c,idx) => // filter 리스트를 출력
                <div key={idx} className={styles.card}>
                    <ClassCard
                        classId={c.id}
                        teacherName={c.User.name}
                        cName={c.name}
                        price={c.price}
                        discount={c.discount}
                        region={c.region}
                        img={c.img_url}
                    />
                </div>)
                :
                category === undefined // 특정 카테고리가 없으면
                ?
                typeList.map((c,idx) => // 전체 type리스트를 출력
                <div key={idx} className={styles.card}>
                    <ClassCard
                        classId={c.id}
                        teacherName={c.User.name}
                        cName={c.name}
                        price={c.price}
                        discount={c.discount}
                        region={c.region}
                        img={c.img_url}
                    />
                </div>)
                :
                categoryList.length > 0 // 특정 카테고리가 있으면
                ?
                categoryList.map((c, idx) => // 특정 카테고리에 해당하는 리스트 출력
                  <div key={idx} className={styles.card}>
                    <ClassCard
                        classId={c.id}
                        teacherName={c.User.name}
                        cName={c.name}
                        price={c.price}
                        discount={c.discount}
                        region={c.region}
                        img={c.img_url}
                    />
                  </div>)
                :
                <p>데이터가 없습니다.</p> /* ??? 노데이터 컴포넌트 넣기*/
              }
           </div>
        </div>
    )
}
