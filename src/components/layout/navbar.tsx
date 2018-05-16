import * as React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router';
import { Navbar, NavItem } from "react-materialize";
import { fetchPlayersInfo } from 'actions';
import { Game, ReducerManager } from 'types';

interface NavLink {
  path: string,
  name: string
}

interface TopNavBarProps {
  currentPlayer: number
}

class _TopNavBar extends React.Component<TopNavBarProps & DispatchProp & RouteComponentProps<{}>> {
  componentDidMount() {
    fetchPlayersInfo(this.props.dispatch);
  }

  render(): React.ReactNode {
    const links: Array<NavLink> = [
      { path: '/', name: 'Home' }
    ];

    let brand = '';

    if (this.props.currentPlayer != null) brand = `Team #${this.props.currentPlayer}`;

    return (
      <Navbar className="green darken-4" brand={brand} left>
        {links.map(link => (
          <NavItem
            key={link.path}
            href={`${link.path}`}
            className={link.path === this.props.location.pathname ? 'active' : ''}
          >
            {link.name}
          </NavItem>
        ))}
      </Navbar>
    );
  }
}

const mapStateToProps = (state: ReducerManager): TopNavBarProps => {
  return { currentPlayer: state.PlayersInfoReducer.currentPlayer };
};

export const TopNavBar = connect(mapStateToProps)(withRouter(_TopNavBar));
