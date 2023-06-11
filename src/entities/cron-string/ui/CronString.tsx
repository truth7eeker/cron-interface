import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store/store';
import styles from './styles.module.scss'

export function CronString() {
   const { current } = useSelector((state: RootState) => state.cron);
   return (
      <div className={styles.wrapper} style={{ display: current ? 'block' : 'none' }}>
         <h2>Result</h2>
         <div className={styles.result}>{current && current}</div>
      </div>
   );
}
