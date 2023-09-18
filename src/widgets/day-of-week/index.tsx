import { Fieldset } from '../../entities';

const allowedValues: Array<String> = ['', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

export function DayOfWeek() {
   const daysOfWeekProps = {
      inputname: 'dayOfWeek',
      label: 'day',
      data: allowedValues,
      selectedVal: allowedValues[0],
      fieldName: 'Day of week',
   };
   return (
      <div>
         <Fieldset {...daysOfWeekProps} />
      </div>
   );
}
