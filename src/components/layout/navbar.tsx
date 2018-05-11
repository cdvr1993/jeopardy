import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { Navbar, NavItem } from "react-materialize";
import { Game } from 'types';

interface NavLink {
  path: string,
  name: string
}

interface TopNavBarProps {
  currentPlayer: number
}

export const _TopNavBar = (props: TopNavBarProps & RouteComponentProps<{}>) => {
  const links: Array<NavLink> = [
    { path: '/', name: 'Home' }
  ];

  let brand = '';

  if (props.currentPlayer != null) brand = `Team #${props.currentPlayer}`;

  return (
    <Navbar className="green darken-4" brand={brand} left>
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

const mapStateToProps = (state: any): TopNavBarProps => {
  return { currentPlayer: (state.GameReducer as Game).currentPlayer };
};

export const TopNavBar = connect(mapStateToProps)(withRouter(_TopNavBar));
