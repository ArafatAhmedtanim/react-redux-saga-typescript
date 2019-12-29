import React from 'react';

import { Repository } from './../types';

interface OwnProps {
    repository: Repository
}

export default function RepositoryItem({ repository }: OwnProps) {
    return <li className="list-group-item">
        {/* <i className="material-icons">inbox</i> */}
        {repository.name}
    </li>;
}
