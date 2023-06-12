import Checkbox from '../checkbox';
import styles from './styles.module.scss'


interface IProps {
   inputname: string;
   label: string;
   data: Array<Number | String> | Array<String>;
   field: any;
   handleChange: (e: any) => void;
}

export function Specific({ inputname, label, data, field, handleChange }: IProps) {
  
   return (
      <div>
         <input
            type="radio"
            id={inputname}
            value="specific"
            name={inputname}
            checked={field.input === 'specific'}
            onChange={(e) => handleChange(e)}
         />
         <label htmlFor="contactChoice1">Specific {label}(s):</label>
         <div className={styles.options} style={{ display: field.input === 'specific' ? 'grid' : 'none' }}>
            {data.map((num) => (
               <Checkbox inputname={inputname} num={num} key={num.toString()} />
            ))}
         </div>
      </div>
   );
}
