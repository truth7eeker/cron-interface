import { Option } from '../../option';

interface IProps {
   inputname: string;
   label: string;
   data: Array<Number | String> | Array<String>;
   field: any;
   handleChange: (e: any) => void;
   handleSelect: (e: any, type: string, rangePoint: string) => void;
}

export function Range({ inputname, label, data, field, handleChange, handleSelect }: IProps) {

   return (
      <div>
         <input
            type="radio"
            id={inputname}
            value="range"
            name={inputname}
            checked={field.input === 'range'}
            onChange={(e) => handleChange(e)}
         />
         <label htmlFor="contactChoice1">
            From {inputname === 'dayOfWeek' || inputname === 'month' ? '' : label}
            <select
               id="minute-range"
               style={{ margin: '0 5px' }}
               name={inputname}
               value={field.range.from}
               onChange={(e) => handleSelect(e, 'range', 'from')}>
               {data.map((num: Number | String) => (
                  <Option num={num} key={num.toString()} data={data} />
               ))}
            </select>
            to {inputname === 'dayOfWeek' || inputname === 'month' ? '' : label}
            <select
               id="minute-range"
               style={{ margin: '0 5px' }}
               name={inputname}
               value={field.range.to}
               onChange={(e) => handleSelect(e, 'range', 'to')}>
               {data.map((num: Number | String) => (
                  <Option num={num} key={num.toString()} data={data} />
               ))}
            </select>
         </label>
      </div>
   );
}
