import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RootStore from "./stores";


const root = new RootStore();

ReactDOM.render(
  <Provider { ...root }>
    {/* Provider 에 props 로 넣어줍니다. */}
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
