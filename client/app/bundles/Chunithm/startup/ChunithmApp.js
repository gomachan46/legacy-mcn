import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Chunithm from '../containers/Chunithm'
import createStore from '../store/chunithmStore'
import injectTapEventPlugin from 'react-tap-event-plugin'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const ChunithmApp = props => {
    const store = createStore(props);

    return (
        <Provider store={store}>
            <Chunithm />
        </Provider>
    );
};

export default ChunithmApp;
