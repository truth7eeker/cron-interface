import { Fieldset } from '../../entities';

const allowedValues: Array<Number | String> = [''];

for (let i = 0; i < 60; i++) {
   allowedValues.push(i);
}

export function Minutes() {
   const minutesProps = {
      inputname: 'minute',
      label: 'minute',
      data: allowedValues,
      selectedVal: allowedValues[0],
      field: 'Minute',
   };
 
   return (
      <div>
         <Fieldset {...minutesProps} />
      </div>
   );
}
