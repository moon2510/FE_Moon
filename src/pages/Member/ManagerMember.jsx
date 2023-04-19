import { FormOutlined, DeleteOutlined } from '@ant-design/icons'
import ContentLayout from '@root/layouts/ContentLayout'
import { Table, Col, Row, Button, Space, Modal } from 'antd'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export const ColStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-right: 10px;
`

export default function ManagerMember() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectUser, setSelectUser] = useState(null)
  const navigate = useNavigate()

  const success = () => {
    Modal.success({
      content: 'Create Staff Successfully',
      onOk: () => {
        navigate('/manager/members')
      },
    })
  }

  const showModalDelete = (userId) => {
    setIsModalOpen(true)
    setSelectUser(userId)
  }

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/manager/deleteStaff/${selectUser}`,
        { headers: { Authorization: token } }
      )
      setIsModalOpen(false)
      success()
      fetchDataMember()
    } catch (error) {
      console.log(error)
    }
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'name',
      render: (text, record) => (
        <Link
          style={{ color: '#73A9AD', fontWeight: 500 }}
          to={`detail/${record._id}`}
        >
          {text}
        </Link>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Action',
      key: 'action',
      render: (staff, record) => (
        <Space>
          <Link to={`detail/${record._id}`}>
            <Button type='primary'>
              <FormOutlined />
            </Button>
          </Link>

          <Button
            danger
            type='primary'
            onClick={() => showModalDelete(record._id)}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ]

  const token = localStorage.getItem('refresh_token')
  const [staff, setStaff] = useState('')
  const fetchDataMember = async () => {
    try {
      const result = await axios.get(
        `http://localhost:5000/api/manager/getStaff`,
        { headers: { Authorization: token } }
      )
      setStaff(result.data)
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchDataMember()
  }, [])

  return (
    <>
      <ContentLayout>
        <Row>
          <Col span={24}>
            <ColStyled>
              <Link to={'/createmember'}>
                <Button type='primary'>+ New Member</Button>
              </Link>
            </ColStyled>
          </Col>
        </Row>
        <Modal
          open={isModalOpen}
          title='Delete'
          onCancel={handleCancel}
          onOk={handleDelete}
        >
          <p>Are You Sure? {}</p>
        </Modal>
        <Col>
          <Table columns={columns} dataSource={staff} />;
        </Col>
      </ContentLayout>
    </>
  )
}
