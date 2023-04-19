import { UserOutlined } from '@ant-design/icons'
import { Table, Row, Col, Button, Space } from 'antd'
import React from 'react'

const dataSource = [
  {
    key: '1',
    name: 'ST Software',
    state: 'Active',
    managers: (
      <Space>
        <UserOutlined />
        <UserOutlined />
      </Space>
    ),
  },
  {
    key: '2',
    name: 'Devplus',
    state: 'Inactive',
    managers: (
      <Space>
        <UserOutlined />
      </Space>
    ),
  },
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
  },
  {
    title: 'Managers',
    dataIndex: 'managers',
    key: 'managers',
  },
]

export default function Workspaces() {
  return (
    <div style={{ marginLeft: '50px' }}>
      <Row justify='end'>
        <Col>
          <Button type='primary'>+ New work spaces</Button>
        </Col>
      </Row>
      <Row justify='center'>
        <Col lg={18} md={24} sm={24} xl={18} xs={24}>
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            size='small'
          />
        </Col>
      </Row>
    </div>
  )
}
