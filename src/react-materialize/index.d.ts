declare module 'react-materialize' {
  import * as React from 'react';

  interface BaseProps extends React.HTMLAttributes<HTMLElement> { }

  interface NavbarProps extends BaseProps {
    brand: string
    left: boolean
  }
  class Navbar extends React.Component<NavbarProps> {}

  interface NavItemProps extends BaseProps {
    href: string
  }
  class NavItem extends React.Component<NavItemProps> {}

  interface RowProps extends BaseProps {}
  class Row extends React.Component<RowProps> {}

  interface ColProps extends BaseProps {
    l?: number
    m?: number
    s?: number
  }
  class Col extends React.Component<ColProps> {}

  interface ButtonProps extends BaseProps {
    disabled?: boolean
    waves?: string
  }
  class Button extends React.Component<ButtonProps> {}
}