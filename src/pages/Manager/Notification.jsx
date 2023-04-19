import { UserOutlined } from '@ant-design/icons'
import MultipleSelect from '@root/components/MultipleSelect/MultipleSelect'
import ContentLayout from '@root/layouts/ContentLayout'
import { Col, Row, Switch, Button } from 'antd'
import React from 'react'
import { ColStyled, FieldLeft, FieldRight, SubTitle } from './Manager.styled'

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
  const onChange = (checked) => {
    console.log(`switch to ${checked}`)
  }

  const handleChange = (value) => {
    console.log({ message: `selected ${value}` })
  }

  return (
    <>
      <ContentLayout>
        <Row>
          <Col span={6}>
            <SubTitle>Slack</SubTitle>
          </Col>
          <Col span={18}>
            <ColStyled>
              <Button type='primary'>+ New Member</Button>
            </ColStyled>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <FieldLeft>Day off channel</FieldLeft>
          </Col>
          <Col span={14}>
            <FieldRight>
              <MultipleSelect options={options} onChange={handleChange} />
            </FieldRight>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <FieldLeft>HR channel</FieldLeft>
          </Col>
          <Col span={14}>
            <FieldRight>
              <MultipleSelect options={options} onChange={handleChange} />
            </FieldRight>
          </Col>
        </Row>
        <Row>
          <Col span={5}>
            <FieldLeft>Mapping user by email</FieldLeft>
          </Col>
          <Col span={14}>
            <FieldRight>
              <Switch defaultChecked onChange={onChange} />
            </FieldRight>
          </Col>
        </Row>
      </ContentLayout>
    </>
  )
}
