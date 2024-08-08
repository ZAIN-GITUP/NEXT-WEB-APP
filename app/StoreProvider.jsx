 "use client"
import { Provider } from 'react-redux';
import { store } from './lib/store'; // Adjust the path if necessary

const StoreProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default StoreProvider;
