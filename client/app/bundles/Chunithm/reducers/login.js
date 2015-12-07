import Immutable from 'immutable';
import * as types from '../constants/ActionTypes';
import request from 'superagent';

export const initialState = Immutable.fromJS({
    segaId: 'segaId',
    password: 'password'
});

export default function login(state = initialState, action) {
    switch (action.type) {
        case types.LOG_IN:
            request
                .post('http://localhost:3000/sega/session')
                .send({ segaId: state.get('segaId'), password: state.get('password') })
                .end(function(err, res) {
                    console.log(res);
                    console.log(err);
                });
            return state;
        case types.CHANGE_SEGA_ID:
            return state.set('segaId', action.segaId);
        case types.CHANGE_PASSWORD:
            return state.set('password', action.password);
        default:
            return state;
    }
}
