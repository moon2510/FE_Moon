import { Select, Space, Avatar } from 'antd'

const { Option } = Select

const MultipleSelect = ({ options, onChange }) => (
  <Select
    mode='multiple'
    optionLabelProp='label'
    placeholder='Select staff'
    style={{
      width: '100%',
    }}
    onChange={onChange}
  >
    {options &&
      options.map((option) => (
        <Option key={option.name} value={option.name}>
          <Space>
            <Avatar icon={option.avatar} size='small' />
            {option.name}
          </Space>
        </Option>
      ))}
  </Select>
)

export default MultipleSelect
