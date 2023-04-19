import {
  CheckSquareFilled,
  CloseSquareFilled,
  EditFilled,
} from '@ant-design/icons'
import ContentLayout from '@root/layouts/ContentLayout'
import { Row, Table } from 'antd'
const columns = [
  {
    title: 'Request for day',
    dataIndex: 'request_day',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => 0 === record.request_day.indexOf(value),
    sorter: (a, b) => a.request_day.length - b.request_day.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: 'Requester',
    dataIndex: 'requester',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => 0 === record.requester.indexOf(value),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => 0 === record.status.indexOf(value),
  },
  {
    title: 'Request date',
    dataIndex: 'request_date',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => 0 === record.request_date.indexOf(value),
  },
  {
    title: 'Actions',
    dataIndex: 'actions',
    width: 150,
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => 0 === record.actions.indexOf(value),
  },
]
const data = [
  {
    key: '1',
    request_day: '2022-10-14',
    quantity: 0.5,
    requester: 'Khoa Nguyen',
    status: 'Requested',
    request_date: 'An hour ago',
    actions: (
      <Row justify='space-around'>
        <CheckSquareFilled style={{ fontSize: '20px' }} />
        <CloseSquareFilled style={{ fontSize: '20px' }} />
        <EditFilled style={{ fontSize: '20px' }} />
      </Row>
    ),
  },
  {
    key: '2',
    request_day: '2022-10-16-2022-10-18',
    quantity: 2,
    requester: 'Quang Nguyen',
    status: 'Request Change',
    request_date: 'Two days ago',
    actions: (
      <Row justify='space-around'>
        <CheckSquareFilled style={{ fontSize: '20px' }} />
        <CloseSquareFilled style={{ fontSize: '20px' }} />
        <EditFilled style={{ fontSize: '20px' }} />
      </Row>
    ),
  },
  {
    key: '3',
    request_day: '2022-10-16-2022-10-18',
    quantity: 2,
    requester: 'Quang Nguyen',
    status: 'Request Change',
    request_date: 'Two days ago',
    actions: (
      <Row justify='space-around'>
        <CheckSquareFilled style={{ fontSize: '20px' }} />
        <CloseSquareFilled style={{ fontSize: '20px' }} />
        <EditFilled style={{ fontSize: '20px' }} />
      </Row>
    ),
  },
]
const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra)
}
const FormReviewRequest = () => (
  <>
    <ContentLayout>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </ContentLayout>
  </>
)
export default FormReviewRequest
