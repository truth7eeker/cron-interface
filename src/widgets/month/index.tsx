import { Fieldset } from '../../entities';

const allowedValues: Array<String> = ['','JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'NOV', 'DEC'];


export function Month() {
   const monthProps = {
      inputname: 'month',
      label: 'month',
      data: allowedValues,
      selectedVal: allowedValues[0],
      fieldName: 'Month',
   };

   return (
      <div>
         <Fieldset {...monthProps} />
      </div>
   );
}
