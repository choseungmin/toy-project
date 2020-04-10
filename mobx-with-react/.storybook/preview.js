import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import App from '../src/App';
import registerServiceWorker from '../src/registerServiceWorker';
import RootStore from "../src/stores";
import { addDecorator } from '@storybook/react';

const root = new RootStore();

addDecorator(storyFn => (

    <Provider { ...root }>
        {/* Provider 에 props 로 넣어줍니다. */}
        <App>
            {storyFn()}
        </App>
    </Provider>
));

registerServiceWorker();
