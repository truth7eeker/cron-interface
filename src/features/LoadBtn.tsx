import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store/store';
import { addCurrent, setMode } from './models/reducers';


export function LoadBtn() {
   const { fieldset } = useSelector((state: RootState) => state);
   const dispatch = useDispatch();
   const handleLoad = () => {
      dispatch(addCurrent({fieldset}));
      dispatch(setMode('load'))
   };
   return <button onClick={handleLoad}>Load</button>;
}
