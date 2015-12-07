import * as types from '../constants/ActionTypes'

export function login() {
    return {
        type: types.LOG_IN
    }
}

export function changeSegaId(segaId) {
    return {
        type: types.CHANGE_SEGA_ID,
        segaId: segaId
    }
}

export function changePassword(password) {
    return {
        type: types.CHANGE_PASSWORD,
        password: password
    }
}
