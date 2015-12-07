import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'lib/middlewares/loggerMiddleware'
import reducers, { initialStates } from '../reducers'

export default props => {
    const { name } = props;
    const { state } = initialStates;

    const initialState = {
        store: state.merge({
            name: name
        })
    };

    const reducer = combineReducers(reducers);
    const composedStore = compose(
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    );
    const storeCreator = composedStore(createStore);
    return storeCreator(reducer, initialState);
}
