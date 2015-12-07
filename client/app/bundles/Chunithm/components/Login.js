import React, { PropTypes, Component } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import _ from 'lodash';

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        _.bindAll(this, 'changeSegaId');
        _.bindAll(this, 'changePassword');
    }
    changeSegaId(e) {
        this.props.changeSegaId(e.target.value);
    }
    changePassword(e) {
        this.props.changePassword(e.target.value);
    }
    render() {
        return (
            <div>
                <TextField hintText="segaId" refs="segaId" defaultValue={this.props.segaId} onChange={this.changeSegaId} />
                <TextField hintText="Password Field" floatingLabelText="Password" type="password" defaultValue={this.props.password} onChange={this.changePassword} />
                <RaisedButton label="Log in" primary={true} onClick={() => this.props.login()} />
            </div>
        )
    }
}

Login.propTypes = {
    segaId: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    login: PropTypes.func.isRequired,
    changeSegaId: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired
};

export default Login;
