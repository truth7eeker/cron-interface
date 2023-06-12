import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSpecific } from '../../../../entities';

interface IProps {
   inputname: string;
   num: Number | String;
}

function Checkbox({ inputname, num }: IProps) {
   const [isChecked, setIsChecked] = useState(false);
 
   const dispatch = useDispatch()

   const handleCheckbox = (e: any) => {
      const {  name, value, checked } = e.target;
      setIsChecked(!isChecked)
      dispatch(addSpecific({ name, value, checked }));
   };

   return (
      <div style={{ display: num === '' ? 'none' : 'inline' }}>
         <input
            type="checkbox"
            id="checkbox"
            name={inputname}
            value={num.toString()}
            onChange={(e) => handleCheckbox(e)}
            checked={isChecked}
         />
         <label htmlFor="checkbox">{num.toString()}</label>
      </div>
   );
}

export default Checkbox;
