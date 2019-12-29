import Github from '../Github';
import UserName from '../UserName';

import { RouteType } from './types'

const routes: RouteType[] = [
    {
        name: 'github.userName',
        path: '/github/userName',
        component: UserName,
        exact: true
    }, {
        name: 'github.repos',
        path: '/github/repos',
        component: Github,
        exact: true
    }
];

function routePath(name: string, args: any = null) {
    let route = routes.find(route => route.name === name);

    if (route === undefined) return '';
    if (args === null) return route.path;

    return Object.keys(args).reduce(
        (path, arg) => path.replace(':' + arg, args[arg]),
        route.path
    );
}

export default routes;

export { routePath };