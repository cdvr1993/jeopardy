import * as React from 'react';
import { RouteComponentProps, withRouter } from 'react-router';
import { Navbar, NavItem } from "react-materialize";

interface NavLink {
  path: string,
  name: string
}

export const _TopNavBar = (props: RouteComponentProps<{}>) => {
  const links: Array<NavLink> = [
    { path: '/', name: 'Home' }
  ];

  return (
    <Navbar brand='' left>
      {links.map(link => (
        <NavItem
          key={link.path}
          href={`${link.path}`}
          className={link.path === props.location.pathname ? 'active' : ''}
        >
          {link.name}
        </NavItem>
      ))}
    </Navbar>
  );
}

export const TopNavBar = withRouter(_TopNavBar);