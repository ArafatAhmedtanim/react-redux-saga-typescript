export type RouteType = {
    name: string,
    path: string,
    component: React.ComponentType;
    exact: boolean
}

export type NavLinkType = { text: string, href: string }