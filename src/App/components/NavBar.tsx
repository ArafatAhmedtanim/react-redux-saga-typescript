import React from 'react';
import { Link } from 'react-router-dom';

import { NavLinkType } from './../types';

const NavLink = ({ href, text }: NavLinkType) => (
    <li className="nav-item">
        <Link className="nav-link" to={href}>{text}</Link>
    </li>
);


interface Props {
    links: NavLinkType[]
}
const NavBar = (props: Props) => (
    <ul className="nav nav-tabs bg-primary">
        {props.links.map(({ href, text }: { href: string, text: string }, i: number) => (
            <NavLink key={i} href={href} text={text} />
        ))}
    </ul>
);

export default NavBar;
