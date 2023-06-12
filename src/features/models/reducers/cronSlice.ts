import { createSlice } from '@reduxjs/toolkit';

interface IState {
   currentField: string,
   current: string;
   list: Array<any>;
}

const initialState: IState = {
   currentField: 'minute',
   current: '',
   list: [],
};

const cronSlice = createSlice({
   name: 'cron',
   initialState,
   reducers: {
      addCurrent(state, { payload }) {
         const { fieldset } = payload;
         let result = '';
         const fields: Array<any> = [];

         Object.keys(fieldset).map((field) => {
            // ex. minute / hour / dayOfWeek etc
            const type = field;
            // ex. every / periodic / range etc
            const input = fieldset[field].input;
            // ex. every 2, from 5 to 9, etc
            const value = fieldset[field][input];
            fields.push({ type, input, value });
         });

         const isRangeRmpty = fields.some(field => field.input === 'range' && (!field.value.from || !field.value.to))

         if (isRangeRmpty) {
            return;
         }

         fields.map((field) => {
            const isDayOfMonth = Object.keys(fieldset.dayOfMonth).some(
               (key) => key !== 'input' && key !== '',
            );

            // handle "?" between dayOfWeek and dayOfMonth
            if (isDayOfMonth && field.type === 'dayOfWeek') {
               field.value = '?';
            }


            if (!field.value || (!field.value.length && field.input === 'specific')) {
               result += '*    ';
            } else if (field.value === '?') {
               result += '?    ';
            } else if (field.input === 'every') {
               result += `${field.value}    `;
            } else if (field.input === 'periodic') {
               result += `*/${field.value}    `;
            } else if (field.input === 'range') {
               result += `${field.value.from}-${field.value.to}    `;
            } else if (field.input === 'specific') {
               result += field.value.join(',') + '    ';
            }
         });

         state.current = result.trim();
      },
      addToList(state) {
         if (!state.current) return;
         state.list.push(state.current);
         state.current = '';
      },
      switchField(state, {payload}) {
         state.currentField = payload.id
      }
   },
});

export const { addCurrent, addToList, switchField } = cronSlice.actions;

export default cronSlice.reducer;
