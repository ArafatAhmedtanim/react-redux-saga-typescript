import React, { Component, useEffect } from 'react'
import UserNameInput from './components/UserNameInputForm'

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from '../App/store';

import * as Name from './store/ducks/currUser/actions';

interface DispatchProps {
    currUserRequest(username: string): void
}

type Props = {
    currUser: string,
    history: any
}
type PropsWithDispatch = Props & DispatchProps

const mapStateToProps = (state: ApplicationState) => ({ currUser: state.name.data })
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(Name, dispatch);

class UserName extends Component<PropsWithDispatch>{
    handleSubmit = (username: string) => this.props.currUserRequest(username)
    componentWillReceiveProps = (nextProps: Props) =>
        nextProps.currUser !== this.props.currUser ?
            this.props.history.push('/github/repos')
            : null;

    render = () => <div className="main">
        <UserNameInput handleSubmit={this.handleSubmit} />
    </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(UserName);