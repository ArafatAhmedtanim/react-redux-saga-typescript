import React, { Component } from 'react'
import RepositoryList from './components/RepositoryList'

import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from './types';
import { ApplicationState } from '../App/store';

import * as RepositoriesActions from './store/ducks/repositories/actions';


interface State {
    repositories: Repository[]
}

interface DispatchProps {
    loadRequest(): void
}

type Props = State & DispatchProps

const mapStateToProps = (state: ApplicationState) => ({
    repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

class Github extends Component<Props>{
    componentDidMount() {
        const { loadRequest } = this.props;
        loadRequest();
    }

    render() {
        return (<RepositoryList {...this.props} />)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Github);
