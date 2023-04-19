import { TwitterCircleFilled, PoweroffOutlined } from '@ant-design/icons'
import Breadcrumbs from '@root/components/BreadCrumb/BreadCrumb'
import {
  Layout,
  Menu,
  Space,
  Typography,
  Avatar,
  Button,
  ConfigProvider,
} from 'antd'
import {} from 'antd'
import { useState } from 'react'
import React from 'react'
import styled from 'styled-components'

import { navigations } from './navigations'

const { Text } = Typography
const { Header, Content, Footer, Sider } = Layout

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  margin: 16px;

  span {
    font-weight: bold;
    font-size: 16px;
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const MainLayouts = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <ConfigProvider
      styles={{ margin: '0 auto' }}
      theme={{
        token: {
          colorPrimary: '#73A9AD',
        },
      }}
    >
      <Layout
        style={{
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
        }}
      >
        <Sider
          collapsible
          breakpoint='lg'
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <LogoStyled>
            {collapsed ? <span>Team</span> : <span>ShootingStars</span>}
          </LogoStyled>
          <Menu
            defaultSelectedKeys={['1']}
            items={navigations}
            mode='inline'
            theme='dark'
          />
        </Sider>
        <Layout className='site-layout'>
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
            <div style={{ marginLeft: '20px' }}>
              <Button icon={<PoweroffOutlined />} type='primary'>
                Log Off
              </Button>
            </div>
            <Space>
              <Avatar
                icon={<TwitterCircleFilled />}
                size='large'
                style={{ background: '#ffffff', color: '#000000' }}
              />
              <Text style={{ color: '#ffffff', userSelect: 'none' }}>
                Thỏ Con Xinh Xắn
              </Text>
              <Button danger size='small'>
                Logout
              </Button>
            </Space>
          </Header>
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumbs />
            {children}
          </Content>
          <Footer
            style={{
              textAlign: 'center',
              height: '50px',
              padding: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
            }}
          >
            ©2023 Created by Shooting Stars
          </Footer>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}

export default MainLayouts
