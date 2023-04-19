import {
  FileOutlined,
  PieChartOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
  BellOutlined,
  LineChartOutlined,
  SyncOutlined,
  CodepenOutlined,
  HistoryOutlined,
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

export const navigations = [
  {
    key: 1,
    label: 'Account',
    icon: <FileOutlined />,
    type: 'group',
    children: [
      {
        key: 2,
        label: <Link to='/dashboard'>Dashboard</Link>,
        icon: <LineChartOutlined />,
        path: 'dashboard',
      },
      {
        key: 3,
        label: <Link to='/account/list-request'>Requests</Link>,
        icon: <PieChartOutlined />,
        path: '/account/list-request',
      },
      {
        key: 4,
        label: <Link to='account/history-day-off'>History Day Off</Link>,
        icon: <HistoryOutlined />,
        path: 'history-day-off',
      },
    ],
  },
  {
    key: 5,
    label: 'Manager',
    icon: <PieChartOutlined />,
    type: 'group',
    children: [
      {
        key: 6,
        label: <Link to='manager/members'>Members</Link>,
        icon: <UserOutlined />,
        path: 'manager/members',
      },
      {
        key: 7,
        label: <Link to='manager/groups'>Groups</Link>,
        icon: <UsergroupAddOutlined />,
        path: 'manager/groups',
      },
      {
        key: 8,
        label: <Link to='manager/notification'>Notifications</Link>,
        icon: <BellOutlined />,
        path: 'manager/notification',
      },
      {
        key: 9,
        label: <Link to='sync'>Sync</Link>,
        icon: <SyncOutlined />,
        path: 'sync',
      },
    ],
  },
  {
    key: 10,
    label: 'Administrator',
    icon: <PieChartOutlined />,
    type: 'group',
    children: [
      {
        key: 11,
        label: <Link to='workspaces'>Workspaces</Link>,
        icon: <CodepenOutlined />,
        path: 'workspaces',
      },
    ],
  },
  {
    key: 12,
    label: 'Staff',
    icon: <PieChartOutlined />,
    type: 'group',
    children: [
      {
        key: 13,
        label: <Link to='staff/create-request'>Create Request</Link>,
        icon: <PlusCircleOutlined />,
        path: 'create-request',
      },
      {
        key: 14,
        label: <Link to='/staff/list-request'>List Day Off</Link>,
        icon: <UnorderedListOutlined />,
        path: 'list-request',
      },
    ],
  },
]
