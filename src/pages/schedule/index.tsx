import styles from './styles.module.scss';
import { DayOfMonth, DayOfWeek, Hours, Minutes, Month, SwitchBtns } from '../../widgets';
import { LoadBtn, SaveBtn } from '../../features';
import { Result } from '../../entities';

export function Schedule() {
   return (
      <div className={styles.wrapper}>
         <h1>Cron Schedule</h1>
         <SwitchBtns />
         <div className={styles.schedule}>
            <Minutes />
            <Hours />
            <DayOfMonth />
            <Month />
            <DayOfWeek />
         </div>
         <div className={styles.btns}>
            <LoadBtn />
            <SaveBtn />
         </div>
         <Result />

      </div>
   );
}
