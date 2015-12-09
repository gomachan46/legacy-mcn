import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'lib/middlewares/loggerMiddleware'
import reducers, { initialStates } from '../reducers'

export default props => {
    const { name } = props;
    const { profileState, musicListState, musicState, loginState } = initialStates;

    const initialState = {
        profile: profileState,
        musicList: musicListState,
        music: musicState,
        login: loginState
    };

    const reducer = combineReducers(reducers);
    const composedStore = compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );
    const storeCreator = composedStore(createStore);
    return storeCreator(reducer, initialState);
}
