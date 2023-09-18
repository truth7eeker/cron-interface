import { Fieldset } from '../../entities';

const allowedValues: Array<Number | String> = [''];

for (let i = 1; i <= 31; i++) {
   allowedValues.push(i);
}

export function DayOfMonth() {
   const dayOfMonthProps = {
      inputname: 'dayOfMonth',
      label: 'day',
      data: allowedValues,
      fieldName: 'Day of month',
      selectedVal: allowedValues[0],
   };
   return (
      <div>
         <Fieldset {...dayOfMonthProps} />
      </div>
   );
}
