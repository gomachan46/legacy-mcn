import profile from './profile';
import musicList from './musicList';
import music from './music';
import login from './login';

export default {
    login: login,
    music: music,
    musicList: musicList,
    profile: profile
};

export const initialStates = {
    login
};
