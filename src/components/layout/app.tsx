import * as React from 'react';
import { Col, Row } from "react-materialize";
import { TopNavBar } from "components/layout/navbar";
import { ServiceManager, withServices } from 'services';
import { IGameService } from 'services/game-service';

export interface AppLayoutProps {
  children: React.ReactNode
}

interface AppLayoutPropsDecorated extends AppLayoutProps {
  gameService: IGameService
}

const _AppLayout = (props: AppLayoutPropsDecorated) => {
  return (
    <div>
      <TopNavBar />
      <Row>
        <Col s={12} >
          {props.children}
        </Col>
      </Row>
    </div>
  );
};

export const AppLayout = withServices<(props: AppLayoutProps) => JSX.Element>((manager: ServiceManager) => {
  return (props: AppLayoutProps) => {
    const newProps: AppLayoutPropsDecorated = {
      children: props.children,
      gameService: manager.gameService
    };

    return <_AppLayout {...newProps} />;
  };
});
