import ContentLayout from '@root/layouts/ContentLayout'
import { Col, Row, Button, Table } from 'antd'
import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ColStyled } from './Manager.styled'

export default function ListGroup() {
  const dataSource = [
    {
      key: '1',
      name: 'HR',
      member: 'Hung',
      master: 'Nguyen',
    },
    {
      key: '2',
      name: 'KSA',
      member: 'Kien',
      master: 'Quoc',
    },
  ]

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <Link to={'detail'}>{text}</Link>,
    },
    {
      title: 'Member(s)',
      dataIndex: 'member',
      key: 'member',
      render: (dataIndex) => (
        <>
          <AiOutlineUser style={{ marginLeft: '5px' }} />
          <>{dataIndex.charAt(0)}</>
        </>
      ),
    },
    {
      title: 'Master(s)',
      dataIndex: 'master',
      key: 'master',
      render: (dataIndex) => (
        <>
          <AiOutlineUser style={{ marginLeft: '5px' }} />
          <>{dataIndex.charAt(0)}</>
        </>
      ),
    },
  ]
  return (
    <>
      <ContentLayout>
        <Row>
          <Col span={24}>
            <ColStyled>
              <Button type='primary'>+ New Group</Button>
            </ColStyled>
          </Col>
        </Row>
        <Col span={6}>
          <Table columns={columns} dataSource={dataSource} />;
        </Col>
      </ContentLayout>
    </>
  )
}
