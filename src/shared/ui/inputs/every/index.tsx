
interface IProps {
    inputname: string
    label: string,
    handleChange: (e:any) => void,
    field: any
}

export function Every({inputname, label, handleChange, field}: IProps) {
 
  return (
     <div>
        <input
           type="radio"
           id={inputname}
           value='every'
           name={inputname}
           checked={field.input === 'every'}
           onChange={(e) => handleChange(e)}
        />
        <label htmlFor={inputname}>Every {label}</label>
     </div>
  );
}
