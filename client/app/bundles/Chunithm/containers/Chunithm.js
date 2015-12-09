import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import Profile from '../components/Profile';
import MusicList from '../components/MusicList';
import * as LoginActions from '../actions/login';
import * as ProfileActions from '../actions/profile';
import * as MusicListActions from '../actions/musicList';
import Immutable from 'immutable';

class Chunithm extends Component {
    render() {
        const { login, loginActions, profile, profileActions, musicList, musicListActions } = this.props
        return (
            <div>
                <Login {...{login, loginActions}} />
                <Profile {...profile, profileActions}} />
                <MusicList {...musicList, musicListActions}} />
            </div>
        )
    }
}

Chunithm.propTypes = {
    loginActions: PropTypes.object.isRequired,
    profileActions: PropTypes.object.isRequired,
    musicListActions: PropTypes.object.isRequired,
    login: PropTypes.instanceOf(Immutable.map).isRequired,
    profile: PropTypes.instanceOf(Immutable.map).isRequired,
    musicList: PropTypes.instanceOf(Immutable.map).isRequired
};

function mapStateToProps(state) {
    return {
        login: state.login,
        profile: state.profile,
        musicList: state.musicList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginActions: bindActionCreators(LoginActions, dispatch),
        profileActions: bindActionCreators(ProfileActions, dispatch),
        musicListActions: bindActionCreators(MusicListActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chunithm)
