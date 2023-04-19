import {
  TwitterCircleFilled,
  PoweroffOutlined,
  UserOutlined,
  ExportOutlined,
  CaretDownOutlined,
} from '@ant-design/icons'
import { Layout, Space, Avatar, Button, Typography, Dropdown } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './layout.module.scss'
const { Header } = Layout
const { Text } = Typography

export const userHeaderPopup = (loggoutSystem) => (
  <div className={styles['user_information']}>
    <div>
      <Link style={{ color: '#565656', paddingLeft: 10 }} to='/infor'>
        <UserOutlined
          style={{ fontSize: '1rem', marginRight: 10, color: ' #565656' }}
        />
        Profile
      </Link>
    </div>

    <div onClick={loggoutSystem}>
      <a style={{ color: '#565656', paddingLeft: 10 }}>
        <div>
          <ExportOutlined
            style={{ fontSize: '1rem', marginRight: 10, color: '#565656' }}
          />
          Logout
        </div>
      </a>
    </div>
  </div>
)

const HeaderLayout = () => {
  const token = localStorage.getItem('refresh_token')
  const navigate = useNavigate()
  const logoutSystem = () => {
    localStorage.removeItem('refresh_token')
    navigate('/login')
  }

  return (
    <Header
      style={{
        padding: 0,
        background: '#001529',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '50px',
      }}
    >
      {token && (
        <>
          <div style={{ marginLeft: '20px' }}>
            <Button icon={<PoweroffOutlined />} type='primary'>
              Log Off
            </Button>
          </div>
          <div>
            <Dropdown
              overlay={userHeaderPopup(logoutSystem)}
              overlayStyle={{ position: 'fixed' }}
              trigger='click'
            >
              <Space style={{ cursor: 'pointer' }}>
                <Avatar
                  icon={<TwitterCircleFilled />}
                  size='large'
                  style={{ background: '#ffffff', color: '#000000' }}
                />
                <Text style={{ color: '#ffffff', userSelect: 'none' }}>
                  Thỏ Con Xinh Xắn
                </Text>
                <CaretDownOutlined style={{ color: 'white' }} />
              </Space>
            </Dropdown>
          </div>
        </>
      )}
    </Header>
  )
}

export default HeaderLayout
