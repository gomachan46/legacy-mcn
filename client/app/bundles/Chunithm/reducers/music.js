import Immutable from 'immutable';
import * as types from '../constants/ActionTypes';

export const initialState = Immutable.fromJS({});

export default function musicList(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
