import * as types from '../constants/ActionTypes'

export function showDetail(musicId) {
    return {
        type: types.SHOW_DETAIL,
        musicId: musicId
    }
}