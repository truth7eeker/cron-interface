import { createSlice } from '@reduxjs/toolkit';

export interface IState {
   minute: {
      input: string;
      periodic: string;
      every: string;
      specific: Array<any>;
      range: { from: string; to: string };
   };
   hour: {
      input: string;
      periodic: string;
      every: string;
      specific: Array<any>;
      range: { from: string; to: string };
   };
   dayOfMonth: {
      input: string;
      periodic: string;
      every: string;
      specific: Array<any>;
      range: { from: string; to: string };
   };
   dayOfWeek: {
      input: string;
      periodic: string;
      every: string;
      specific: Array<string>;
      range: { from: string; to: string };
   };
   month: {
      input: string;
      periodic: string;
      every: string;
      specific: Array<any>;
      range: { from: ''; to: '' };
   };
}

const initialState: IState = {
   minute: {
      input: '',
      periodic: '',
      every: '',
      specific: [],
      range: { from: '', to: '' },
   },
   hour: {
      input: '',
      periodic: '',
      every: '',
      specific: [],
      range: { from: '', to: '' },
   },
   dayOfMonth: {
      input: '',
      periodic: '',
      every: '',
      specific: [],
      range: { from: '', to: '' },
   },
   month: {
      input: '',
      periodic: '',
      every: '',
      specific: [],
      range: { from: '', to: '' },
   },
   dayOfWeek: {
      input: '',
      periodic: '',
      every: '',
      specific: [],
      range: { from: '', to: '' },
   },
};

const fieldsetSlice = createSlice({
   name: 'fieldset',
   initialState,
   reducers: {
      setField(state, { payload }) {
         const { value, name } = payload;
         const targetField = state[name as keyof typeof state];
         targetField.input = value;

         // reset unselected values
         if (value === 'every') {
            targetField.every = '*';
            targetField.periodic = '';
            targetField.range = { from: '', to: '' };
            targetField.specific = [];
         } else if (value === 'periodic') {
            targetField.range = { from: '', to: '' };
            targetField.every = '';
            targetField.specific = [];
         } else if (value === 'range') {
            targetField.periodic = '';
            targetField.every = '';
            targetField.specific = [];
         } else if (value === 'specific') {
            targetField.periodic = '';
            targetField.every = '';
            targetField.range = { from: '', to: '' };
         }
      },
      addFieldValues(state, { payload }) {
         const { value, name, type, rangePoint } = payload;
         const targetField = state[name as keyof typeof state];

         if (targetField.input === 'range') {
            targetField.range[rangePoint as keyof typeof targetField.range] = value;
         } else if (type === 'periodic') {
            targetField.periodic = value;
         }
      },
      addSpecific(state, { payload }) {
         const { name, value, checked } = payload;
         const targetField = state[name as keyof typeof state];
         if (!checked) {
            targetField.specific.map((item) => {
               if (item === value) {
                  const target = targetField.specific.indexOf(item);
                  targetField.specific.splice(target, 1);
               }
            });
         } else {
            targetField.specific.push(value);
         }
      },
      parseCron(state, { payload }) {
         const cronInput = payload.split(' ').filter((value:string) => value !== '');
         const times = ['minute', 'hour', 'dayOfMonth', 'month', 'dayOfWeek'];
         times.forEach((val: string, index: number) =>
            cronInput.map((item: string, i: number) => {
               const isSameIndex = index === i
               if (item === '*' && isSameIndex) {
                  state[val as keyof typeof state].input = 'every';
                  state[val as keyof typeof state].every = item;
               } else if (item.includes('/') && isSameIndex) {
                  state[val as keyof typeof state].input = 'periodic';
                  state[val as keyof typeof state].periodic = item.split('/')[1];
               } else if (item.includes('-') && isSameIndex) {
                  const [first, second] = item.split('-');
                  state[val as keyof typeof state].input = 'range';
                  state[val as keyof typeof state].range = { from: first, to: second };
               } else if (item.includes(',') && isSameIndex) {
                  const res = item.split(',') 
                  const noDublicates = [...new Set(res)]
                  state[val as keyof typeof state].input = 'specific';
                  state[val as keyof typeof state].specific = noDublicates
               } else if (item.length < 3 && item.length > 0 && isSameIndex) {
                  state[val as keyof typeof state].input = 'specific';
                  state[val as keyof typeof state].specific.push(item);
               }
            }),
         );
      },
   },
});

export const { setField, addFieldValues, addSpecific, parseCron } = fieldsetSlice.actions;

export default fieldsetSlice.reducer;
