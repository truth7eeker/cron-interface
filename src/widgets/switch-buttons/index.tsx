import { useDispatch } from "react-redux";
import { switchField } from "../../features/models/reducers";
import styles from './styles.module.scss'

const fields = [
   { id: 'minute', displayText: 'Minute' },
   { id: 'hour', displayText: 'Hour' },
   { id: 'dayOfMonth', displayText: 'Day of month' },
   { id: 'month', displayText: 'Month' },
   { id: 'dayOfWeek', displayText: 'Day Of Week' },
];

export function SwitchBtns() {
   const dispatch = useDispatch()
   const handleClick = (id:string) => {
      dispatch(switchField({id}))
   }
   return <div className={styles.wrapper}>
      {fields.map(field => <button key={field.id} onClick={() => handleClick(field.id)}>{field.displayText}</button>)}
   </div>;
}
