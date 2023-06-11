import { useDispatch } from 'react-redux';
import { addToList } from './models/reducers';

export function SaveBtn() {
   const dispatch = useDispatch();
   const handleSave = () => {
      dispatch(addToList());
   };
   return <button onClick={handleSave}>Save</button>;
}
