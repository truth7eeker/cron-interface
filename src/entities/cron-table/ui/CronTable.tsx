import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store/store';
import styles from './styles.module.scss';

export function CronTable() {
   const { list } = useSelector((state: RootState) => state.cron);

   return (
      <div className={styles.wrapper} style={{display: list.length ? 'grid' : 'none'}}>
         <h2>History</h2>
         <div className={styles.list}>
            {list.map((item, index) => (
               <div className={styles.list__item}>
                  <div className={styles.index}>{index + 1}</div>
                  <div className={styles.item}>{item}</div>
               </div>
            ))}
         </div>
      </div>
   );
}
