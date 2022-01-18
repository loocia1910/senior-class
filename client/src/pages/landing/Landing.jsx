import Section1 from '../../components/landing/section1/Section1'
import Section2 from '../../components/landing/section2/Section2'
import Section3 from '../../components/landing/section3/Section3'
import Section4 from '../../components/landing/section4/Section4'
import Section5 from '../../components/landing/section5/Section5'
import Section6 from '../../components/landing/section6/Section6'
import styles from './Landing.module.css';

export default function Landing () {
   
   return (
    <div className={styles.wrapper}>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
    </div>
   );
}
