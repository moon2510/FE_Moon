import {
  ArrowRightOutlined,
  CheckOutlined,
  CloseOutlined,
  UndoOutlined,
} from '@ant-design/icons'
import { Row, Col, Typography } from 'antd'
import React from 'react'

const { Title } = Typography

export default function DayoffDetail() {
  return (
    <>
      <Row>
        <Col span={12}>
          <Title level={3} style={{ marginBottom: '20px' }}>
            Basic Information
          </Title>
          <Row>
            <Col span={3}>
              <Title level={5}>From</Title>
            </Col>
            <Col span={5}>
              <Title level={5}>2022-10-22</Title>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <Title level={5}>To</Title>
            </Col>
            <Col span={5}>
              <Title level={5}>2022-10-25</Title>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <Title level={5}>Quantity</Title>
            </Col>
            <Col span={5}>
              <Title level={5}>4</Title>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <Title level={5}>Reason</Title>
            </Col>
            <Col span={5}>
              <Title level={5}>Personal Issue</Title>
            </Col>
          </Row>
          <Row>
            <Col span={3}>
              <Title level={5}>Status</Title>
            </Col>
            <Col span={5}>
              <Title level={5}>Approved</Title>
            </Col>
          </Row>
          <Row style={{ marginTop: '25px' }}>
            <Col span={3}>
              <Title level={5}>Actions</Title>
            </Col>
          </Row>
          <Row>
            <Col
              span={1}
              style={{
                backgroundColor: '#6558F5',
                height: '25px',
                textAlign: 'center',
                borderRadius: '3px',
              }}
            >
              <UndoOutlined
                style={{ color: 'white', fontSize: '20px', marginTop: '2px' }}
              />
            </Col>
            <Col
              span={1}
              style={{
                backgroundColor: '#6558F5',
                height: '25px',
                textAlign: 'center',
                borderRadius: '3px',
                marginLeft: '10px',
              }}
            >
              <CheckOutlined
                style={{ color: 'white', fontSize: '20px', marginTop: '2px' }}
              />
            </Col>
            <Col
              span={1}
              style={{
                backgroundColor: '#6558F5',
                height: '25px',
                textAlign: 'center',
                borderRadius: '3px',
                marginLeft: '10px',
              }}
            >
              <CloseOutlined
                style={{ color: 'white', fontSize: '20px', marginTop: '2px' }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={12}>
          <Title level={3} style={{ marginBottom: '20px' }}>
            Histories
          </Title>

          {/* Request */}
          <Title level={5} style={{ color: '#6558F5' }}>
            Request
          </Title>
          <Row>
            <Col span={12}>
              <Row style={{ margin: '5px 0px' }}>Khoa Nguyen requested</Row>
              <Row>From: {'2022-10-22'}</Row>
              <Row>To: {'2022-10-23'}</Row>
              <Row>Quantity: {'2'}</Row>
              <Row>Reason: {'Personal Issue'}</Row>
            </Col>
          </Row>

          {/* Approved */}
          <Title level={5} style={{ color: '#6558F5' }}>
            Approved
          </Title>
          <Row style={{ margin: '5px 0px' }}>Hoang Pham approved</Row>

          {/* Request change */}
          <Title level={5} style={{ color: '#6558F5' }}>
            Request change
          </Title>
          <Row style={{ margin: '5px 0px' }}>
            Vinh Bui requested for change <br /> Need more detail
          </Row>

          {/* Update Request */}
          <Title level={5} style={{ color: '#6558F5' }}>
            Request
          </Title>
          <Row style={{ margin: '5px 0px' }}>Khoa Nguyen updated request</Row>
          <Row>
            <Col span={10}>
              <Row>From: {'2022-10-22'}</Row>
              <Row>To: {'2022-10-23'}</Row>
              <Row>Quantity: {'2'}</Row>
              <Row>Reason: {'Personal Issue'}</Row>
            </Col>
            <Col span={4} style={{ textAlign: 'center', margin: 'auto' }}>
              <ArrowRightOutlined />
            </Col>
            <Col span={10}>
              <Row>From: {'2022-10-22'}</Row>
              <Row>To: {'2022-10-25'}</Row>
              <Row>Quantity: {'4'}</Row>
              <Row>Reason: {'Wedding'}</Row>
            </Col>
          </Row>

          {/* Approved */}
          <Title level={5} style={{ color: '#6558F5' }}>
            Approved
          </Title>
          <Row style={{ margin: '5px 0px' }}>Hoang Pham approved</Row>
        </Col>
      </Row>
    </>
  )
}
