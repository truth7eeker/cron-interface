export const isEmpty = (data: any) => {
   const fields = ['minute', 'hour', 'dayOfWeek', 'dayOfMonth', 'month'];

   // check if form is empty
   const isEmpty = fields.some((item: string) => !data[item as keyof typeof data].input);

   if (isEmpty) {
      return true
   } else {
      return false
   }

};
