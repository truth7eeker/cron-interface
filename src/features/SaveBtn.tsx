import { useDispatch, useSelector } from 'react-redux';
import { setMode } from './models/reducers';
import { parseCron } from '../entities';
import { RootState } from '../app/store/store';

export function SaveBtn() {
   const {current} = useSelector((state:RootState) => state.cron)
   const dispatch = useDispatch();
   const handleSave = () => {
      dispatch(parseCron(current));
      dispatch(setMode('save'))
   };
   return <button onClick={handleSave}>Save</button>;
}
