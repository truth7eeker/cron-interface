import { RootState } from '../../../../app/store/store';
import { Every, Periodic, Range, Specific } from '../../../../shared';
import { useDispatch, useSelector } from 'react-redux';
import { addFieldValues, setField } from '../../models';
import styles from './styles.module.scss'

interface IProps {
   inputname: string;
   label: string;
   data: Array<Number | String> | Array<String>;
   fieldName: string;
   selectedVal: String | Number
}

export function Fieldset(data: IProps) {
   const { fieldset, cron } = useSelector((state: RootState) => state);
   const dispatch = useDispatch();

   // make controlled input
   const field = fieldset[data.inputname as keyof typeof fieldset];

   const handleChange = (e: any) => {
      const { value, name } = e.target;
      dispatch(setField({ name, value }));
      
   };

   const handleSelect = (e: any, type: string, rangePoint?: string) => {
      const { value, name } = e.target;
      dispatch(addFieldValues({ value, name, type, rangePoint }));
   };

   const updatedData = { ...data, field, handleChange, handleSelect };

   return (
      <div style={{display: cron.currentField === data.inputname ? 'flex': 'none'}} className={styles.wrapper}>
         <fieldset>
            <legend>{data.fieldName}</legend>
            <Every {...updatedData} />
            <Periodic {...updatedData} />
            <Range {...updatedData} />
            <Specific {...updatedData} />
         </fieldset>
      </div>
   );
}
