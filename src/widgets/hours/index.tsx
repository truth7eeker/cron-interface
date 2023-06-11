import { Fieldset } from '../../entities';

const allowedValues: Array<Number | String> = [''];

for (let i = 0; i < 24; i++) {
   allowedValues.push(i);
}

export function Hours() {
   const hourProps = {
      inputname: 'hour',
      label: 'hour',
      data: allowedValues,
      selectedVal: allowedValues[0],
      field: 'Hour',
   };
   return (
      <div>
         <Fieldset {...hourProps} />
      </div>
   );
}
