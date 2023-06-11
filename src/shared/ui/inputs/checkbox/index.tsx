import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store/store";

interface IProps {
   inputname: string;
   num: Number | String;
   handleCheckbox: (e: any) => void;
}

function Checkbox({ inputname, num, handleCheckbox }: IProps) {
   const {fieldset} = useSelector((state:RootState) => state)
   const list = fieldset[inputname as keyof typeof fieldset].specific
   return (
      <div style={{ display: num === '' ? 'none' : 'inline' }}>
         <input
            type="checkbox"
            id="checkbox"
            name={inputname}
            value={num.toString()}
            onChange={(e) => handleCheckbox(e)}
            checked={list.some((val:string) => val == num)}
         />
         <label htmlFor="checkbox">{num.toString()}</label>
      </div>
   );
}

export default Checkbox;
