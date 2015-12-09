import Immutable from 'immutable';
import * as types from '../constants/ActionTypes';

export const initialState = Immutable.fromJS({
    "name" : "ＧＭＣ",
    "expire" : "2015-12-23 04:00:00.0",
    "level" : 30,
    "point" : 435200,
    "totalPoint" : 546000,
    "playCount" : 206,
    "rating" : 1367,
    "highestRating" : 1367,
    "image" : "https://chunithm-net.com/mobile/img/b54f90f93b76d243.png",
    "trophy" : "全機種制覇",
    "characterLevel" : 13
});

export default function profile(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
