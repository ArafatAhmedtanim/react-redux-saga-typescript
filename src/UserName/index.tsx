import React, { Component } from 'react'
import UserNameInput from './components/UserNameInput'

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { User } from './types';
import { ApplicationState } from '../App/store';

import * as RepositoriesActions from './store/ducks/repositories/actions';
class UserName extends Component {
    render() {
        return <UserNameInput />
    }
}

export default UserName