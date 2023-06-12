import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store/store';
import { addCurrent } from './models/reducers';
import { isEmpty } from './lib';

export function LoadBtn() {
   const { fieldset } = useSelector((state: RootState) => state);
   const dispatch = useDispatch();
   const handleLoad = () => {
      // if(isEmpty(fieldset)) {
      //   return
      // }
      dispatch(addCurrent({fieldset}));
   };
   return <button onClick={handleLoad}>Load</button>;
}
