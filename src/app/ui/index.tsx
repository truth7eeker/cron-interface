import styles from './styles.module.scss'
import { Schedule } from '../../pages'
import { Provider } from 'react-redux';
import { store } from '../store/store';

export function App() {
  return (
     <Provider store={store}>
        <div className={styles.app}>
           <Schedule />
        </div>
     </Provider>
  );
}
