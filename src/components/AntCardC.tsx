import { Card, Col, Row } from 'antd';
import React from 'react';

const { Meta } = Card;

type CardType = {
    name:string,
    image:string|undefined,
    description:string
}
const AntCardC: React.FC<CardType> = ({name,image, description}:CardType) =>(
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
      <Meta
            title={name}
            description={description}
        />
    </Col>
  </Row>
  
);

export default AntCardC;