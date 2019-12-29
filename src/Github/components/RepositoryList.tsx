import React, { Component } from 'react';
import { Repository } from './../types';

import RepositoryItem from './RepositoryItem';

interface Props {
    repositories: Repository[]
}

class RepositoryList extends Component<Props> {
    render() {
        const { repositories } = this.props

        return (
            <ul>
                {repositories.map(
                    repository =>
                        <RepositoryItem
                            key={repository.id}
                            repository={repository}
                        />
                )}
            </ul>
        );
    }
}

export default RepositoryList
