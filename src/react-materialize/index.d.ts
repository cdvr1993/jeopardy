declare module 'react-materialize' {
  import * as React from 'react';

  export interface NavbarProps {
    brand: string
    left: boolean
  }
  class Navbar extends React.Component<NavbarProps> {}

  export interface NavItemProps {
    href: string,
    className: string
  }
  class NavItem extends React.Component<NavItemProps> {}

  export interface RowProps {}
  class Row extends React.Component<RowProps> {}

  export interface ColProps {
    s: number
  }
  class Col extends React.Component<ColProps> {}
}