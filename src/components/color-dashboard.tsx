import * as React from 'react';
import { Button, Col, Row } from 'react-materialize';

interface ColorDashboardProps {
  colors: Array<string>
}

export const ColorDashboard = (props: ColorDashboardProps) => (
  <div>
    <Row style={{ marginBottom: '5px' }}>
      <Col s={12}>
        <Col s={12}>
          <h5>Teams</h5>
        </Col>
      </Col>
    </Row>
    <Row>
      {props.colors.map((color: string, index: number) => (
        <Col s={2}>
          <Row style={{ marginBottom: 0 }}>
            <Col s={12}>
              <Button className={color} style={{width: "100%"}} />
            </Col>
          </Row>
          <Row>
            <Col s={12}>
              <label style={{ fontSize: 12 }}>Team #{index + 1}</label>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  </div>
);
