import { Breadcrumb } from 'antd'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumbs = () => {
  const location = useLocation()
  const pathSegments = location.pathname
    .split('/')
    .filter((segment) => '' !== segment)

  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item key='home'>
        <Link to='/dashboard'>Home</Link>
      </Breadcrumb.Item>
      {pathSegments.map((segment, index) => (
        <Breadcrumb.Item key={index}>
          {segment.replace('-', ' ')}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  )
}
export default Breadcrumbs
