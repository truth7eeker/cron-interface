import { Option } from '../../option';

interface IProps {
   inputname: string;
   label: string;
   data: Array<Number | String> | Array<String>;
   field: any;
   handleChange: (e: any) => void;
   handleSelect: (e: any, type: string, rangePoint: string) => void;
}

export function Periodic({ inputname, label, data, handleChange, field, handleSelect }: IProps) {
   return (
      <div>
         <input
            type="radio"
            id="periodic"
            value="periodic"
            name={inputname}
            checked={field.input === 'periodic'}
            onChange={(e) => handleChange(e)}
         />
         <label htmlFor="periodic"></label>
         <label htmlFor="minute-period">
            Every
            <select
               id="minute-period"
               style={{ margin: '0 5px' }}
               name={inputname}
               value={field.periodic}
               onChange={e => handleSelect(e, 'periodic', '')}
               >
               {data.map((num: Number | String) => (
                  <Option num={num} key={num.toString()} data={data} />
               ))}
            </select>
            {inputname === 'dayOfWeek' || inputname === 'month' ? '' : label}
         </label>
      </div>
   );
}
