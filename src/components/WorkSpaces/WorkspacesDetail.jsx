import { PlusOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import {
  Form,
  Input,
  Typography,
  Switch,
  Row,
  Table,
  Button,
  Space,
} from 'antd'
import React from 'react'

const WorkspaceDetails = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`)
  }

  const dataSource = [
    {
      key: 1,
      name: 'Khoa Nguyen',
      email: 'khoa@stunited.vn',
      actions: ['Reset Password', 'Remove'],
    },
    {
      key: 2,
      name: 'Nam Nguyen',
      email: 'nam@stunited.vn',
      actions: ['Reset Password', 'Remove'],
    },
  ]

  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Email', dataIndex: 'email', key: 'email' },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, record) => (
        <Space size='middle'>
          <Button icon={<EditOutlined />} type='primary'>
            {record.actions[0]}
          </Button>
          <Button
            className='hover-button'
            icon={<DeleteOutlined />}
            style={{ backgroundColor: 'red', borderColor: 'red' }}
            type='primary'
          >
            <span style={{ color: 'white' }}>{record.actions[1]}</span>
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <div className='form-wrapper'>
      <div>
        <Typography.Title
          level={1}
          style={{ fontSize: '16px', marginLeft: '29px' }}
        >
          Basic Information
        </Typography.Title>
      </div>
      <Form>
        <Form.Item label='Name' style={{ marginLeft: '29px' }}>
          <Input style={{ width: '250px' }} />
        </Form.Item>
        <Form.Item label='Status' style={{ marginLeft: '29px' }}>
          <Switch
            defaultChecked
            style={{ backgroundColor: '#009678', border: 'none' }}
            onChange={onChange}
          />
        </Form.Item>
      </Form>
      <Row align='middle'>
        <Typography.Title
          level={1}
          style={{ fontSize: '14px', marginLeft: '29px' }}
        >
          Managers
        </Typography.Title>
        <Button
          icon={<PlusOutlined />}
          style={{ margin: '10px 0', marginLeft: '1100px' }}
          type='primary'
        >
          New Managers
        </Button>
      </Row>

      <div style={{ marginLeft: '29px', marginTop: '20px' }}>
        <Table columns={columns} dataSource={dataSource} />
      </div>
    </div>
  )
}

export default WorkspaceDetails
