import { createSlice } from '@reduxjs/toolkit';

export interface IState {
   minute: {
      input: string;
      periodic: string;
      every: string;
      specific: Array<string>;
      range: { from: string; to: string };
   };
   hour: {
      input: string;
      periodic: string;
      every: string;
      specific: Array<string>;
      range: { from: string; to: string };
   };
   dayOfMonth: {
      input: string;
      periodic: string;
      every: string;
      specific: Array<string>;
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
      every: string ;
      specific: Array<string>;
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
         const { name, value } = payload;
         const targetField = state[name as keyof typeof state];
         targetField.specific.push(value);
      },
      addDefaults(state, {payload}) {
         Object.keys(state).map(key => {
            const field = state[key as keyof typeof state]
            const isPeriodic = field.input === 'periodic' && !field.periodic
            const isRange = field.input === 'range' && !field.range.from && !field.range.to
            
         })
      }
   },
});

export const { setField, addFieldValues, addSpecific, addDefaults } = fieldsetSlice.actions;

export default fieldsetSlice.reducer;
