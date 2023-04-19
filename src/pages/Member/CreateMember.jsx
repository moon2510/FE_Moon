import ContentLayout from '@root/layouts/ContentLayout'
import { Card, Row, Col, Form, Input, Button, Space, Modal } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateMember = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('refresh_token')
  const success = () => {
    Modal.success({
      content: 'Create Staff Successfully',
      onOk: () => {
        navigate('/manager/members')
      },
    })
  }
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  }

  const submitCreateMember = async (e) => {
    try {
      console.log(e)
      const body = {
        fullName: e.fullName,
        email: e.email,
        slackId: e.slackId,
      }
      const results = await axios.post(
        'http://localhost:5000/api/manager/createStaff',
        body,
        { headers: { Authorization: token } }
      )
      console.log('staff', results)

      return
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <ContentLayout>
        <div className='site-card-border-less-wrapper'>
          <Card
            bordered={true}
            className='card-boxshadow'
            style={{
              width: '100%',
            }}
            title='Create Member'
          >
            <Row>
              <Col span={8}>
                <Form
                  initialValues={{ password: 'password' }}
                  layout={'vertical'}
                  validateMessages={validateMessages}
                  onFinish={submitCreateMember}
                >
                  <Form.Item
                    name={['password']}
                    style={{ display: 'none' }}
                  ></Form.Item>

                  <Form.Item
                    label='Full Name'
                    name='fullName'
                    rules={[
                      {
                        required: true,
                        message: 'Please type full name!',
                      },
                    ]}
                  >
                    <Input placeholder={'Full Name'} />
                  </Form.Item>

                  <Form.Item
                    label='Email'
                    name='email'
                    rules={[
                      {
                        required: true,
                        type: 'email',
                      },
                    ]}
                  >
                    <Input placeholder={'Email'} />
                  </Form.Item>
                  <Form.Item
                    label='Slack ID'
                    name='slackId'
                    rules={[
                      {
                        required: true,
                        message: 'Please type slack id!',
                      },
                    ]}
                  >
                    <Input placeholder={'Slack Id'} type='string' />
                  </Form.Item>
                  <Form.Item>
                    <Space direction='horizontal' size={15}>
                      <Button
                        htmlType='submit'
                        type='primary'
                        onClick={success}
                      >
                        Submit
                      </Button>
                      <Button danger type='primary'>
                        Cancel
                      </Button>
                    </Space>
                  </Form.Item>
                </Form>
              </Col>
            </Row>
          </Card>
        </div>
      </ContentLayout>
    </>
  )
}
export default CreateMember
