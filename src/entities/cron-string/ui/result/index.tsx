import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../app/store/store';
import styles from './styles.module.scss';
import { addCurrent, saveCron } from '../../../../features/models/reducers';

export function Result() {
   const { current } = useSelector((state: RootState) => state.cron);
   const dispatch = useDispatch()
   const handleChange = (e:any) => {
      dispatch(saveCron(e.target.value))

   }
   return (
      <div className={styles.wrapper}>
         <label htmlFor="result"></label>
         <input id="result" className={styles.result} value={current} onChange={handleChange}/>
      </div>
   );
}
