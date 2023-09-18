import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSpecific } from '../../../../entities';
import { RootState } from '../../../../app/store/store';
import { setMode } from '../../../../features/models/reducers';

interface IProps {
   inputname: string;
   num: Number | String;
   specific: Array<Number | any>;
}

function Checkbox({ inputname, num, specific}: IProps) {
   const dispatch = useDispatch();

   const handleCheckbox = (e: any) => {
      const { name, value, checked } = e.target;
      dispatch(setMode('load'));
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
            checked={specific.some(val => val == num)}
         />
         <label htmlFor="checkbox">{num.toString()}</label>
      </div>
   );
}

export default Checkbox;
