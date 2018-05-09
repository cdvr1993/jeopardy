import * as React from 'react';
import { Col, Row } from "react-materialize";
import { TopNavBar } from "components/layout/navbar";

export interface AppLayoutProps {
  children: React.ReactNode
}

export const AppLayout = (props: AppLayoutProps, some: any) => (
  <div>
    <TopNavBar />
    <Row>
      <Col s={12} >
        {props.children}
      </Col>
    </Row>
  </div>
);
