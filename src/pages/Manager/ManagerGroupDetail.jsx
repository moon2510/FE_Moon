import { UserOutlined } from '@ant-design/icons'
import MultipleSelect from '@root/components/MultipleSelect/MultipleSelect'
import ContentLayout from '@root/layouts/ContentLayout'
import { Col, Row, Input, Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import { ColStyled, FieldLeft, FieldRight, SubTitle } from './Manager.styled'
const { TextArea } = Input

const options = [
  {
    avatar: <UserOutlined />,
    name: 'a',
  },

  {
    avatar: <UserOutlined />,
    name: 'b',
  },

  {
    avatar: <UserOutlined />,
    name: 'c',
  },
]

export default function ManagerGroupDetail() {
  const handleChange = (value) => {
    console.log({ message: `selected ${value}` })
  }
  return (
    <>
      <ContentLayout>
        <Row>
          <Col span={6}>
            <SubTitle>Basic Information</SubTitle>
          </Col>
          <Col span={18}>
            <ColStyled>
              <Link to={'/createmember'}>
                <Button type='primary'>+ New Member</Button>
              </Link>
            </ColStyled>
          </Col>
        </Row>
        <Row>
          <Col span={2}>
            <FieldLeft>Name</FieldLeft>
          </Col>
          <Col span={4}>
            <FieldRight>
              <TextArea disabled={true} rows={1} style={{ resize: 'none' }} />
            </FieldRight>
          </Col>
        </Row>
        <Row>
          <Col span={2}>
            <FieldLeft>Masters</FieldLeft>
          </Col>
          <Col span={12}>
            <FieldRight>
              <MultipleSelect options={options} onChange={handleChange} />
            </FieldRight>
          </Col>
        </Row>
        <Row>
          <Col span={2}>
            <FieldLeft>Members</FieldLeft>
          </Col>
          <Col span={12}>
            <FieldRight>
              <MultipleSelect options={options} onChange={handleChange} />
            </FieldRight>
          </Col>
        </Row>
        <Row>
          <Col span={22} style={{ marginTop: '25px' }}>
            <ColStyled>
              <Button danger style={{ marginRight: '10px' }} type='primary'>
                Cancel
              </Button>
              <Button type='primary'>Send</Button>
            </ColStyled>
          </Col>
        </Row>
      </ContentLayout>
    </>
  )
}
