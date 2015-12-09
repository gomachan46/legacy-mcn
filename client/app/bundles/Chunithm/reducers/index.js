import profile, { initialState as profileState } from './profile';
import musicList, { initialState as musicListState } from './musicList';
import music, { initialState as musicState } from './music';
import login, { initialState as loginState } from './login';

export default {
    login: login,
    music: music,
    musicList: musicList,
    profile: profile
};

export const initialStates = {
    profileState,
    musicListState,
    musicState,
    loginState
};
