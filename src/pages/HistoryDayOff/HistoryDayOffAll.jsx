import ContentLayout from '@root/layouts/ContentLayout'
import { Table } from 'antd'
const columns = [
  {
    title: 'Day From',
    dataIndex: 'logofffrom',
  },
  {
    title: 'Day To',
    dataIndex: 'logoffto',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: 'Requester',
    dataIndex: 'user',
  },
  {
    title: 'Request date',
    dataIndex: 'request_date',
    onFilter: (value, record) => 0 === record.request_date.indexOf(value),
  },
]
const data = [
  {
    key: '1',
    logofffrom: '2022-10-14',
    logoffto: '2022-10-15',
    quantity: 2,
    user: 'Khoa Nguyen',
    request_date: 'An hour ago',
  },
  {
    key: '2',
    logofffrom: '2022-10-14',
    logoffto: '2022-10-15',
    quantity: 2,
    user: 'Khoa Nguyen',
    request_date: 'An hour ago',
  },
  {
    key: '3',
    logofffrom: '2022-10-14',
    logoffto: '2022-10-15',
    quantity: 2,
    user: 'Khoa Nguyen',
    request_date: 'An hour ago',
  },
  {
    key: '4',
    logofffrom: '2022-10-14',
    logoffto: '2022-10-15',
    quantity: 2,
    user: 'Khoa Nguyen',
    request_date: 'An hour ago',
  },
  {
    key: '5',
    logofffrom: '2022-10-14',
    logoffto: '2022-10-15',
    quantity: 2,
    user: 'Khoa Nguyen',
    request_date: 'An hour ago',
  },
]
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra)
}
const HistoryDayOffAll = () => (
  <>
    <ContentLayout>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </ContentLayout>
  </>
)
export default HistoryDayOffAll
