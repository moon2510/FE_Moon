import image from '@root/assets/Login.jpg'
import { Checkbox, Form, Input, Button, notification } from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthStyled } from './Auth.styled'
const Auth = () => {
  const navigate = useNavigate()
  const token = localStorage.getItem('refresh_token')

  const handleSubmitForm = async (e) => {
    try {
      const body = {
        email: e.email,
        password: e.password,
      }
      const results = await axios.post(
        'http://localhost:5000/api/admin/login',
        body
      )
      // eslint-disable-next-line yoda
      if (results.status === 200) {
        localStorage.setItem('refresh_token', results.data.refresh_token)
        notification.success({ message: results.data.msg })
        navigate('/dashboard')
      }
    } catch (err) {
      console.log(err)
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
    toast.error('Login failed')
  }
  if (token) return <></>
  return (
    <AuthStyled className='login-page'>
      <div className='login-box'>
        <div className='illustration-wrapper'>
          <img alt='Login image' src={image} />
        </div>
        <Form
          initialValues={{ remember: true }}
          name='login-form'
          onFinish={handleSubmitForm}
          onFinishFailed={onFinishFailed}
        >
          <p className='form-title'>Welcome back</p>
          <p>Login to the Dashboard</p>
          <Form.Item
            name='email'
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input placeholder='email' />
          </Form.Item>

          <Form.Item
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder='Password' />
          </Form.Item>

          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              className='login-form-button'
              htmlType='submit'
              type='primary'
            >
              LOGIN
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              className='login-form-button'
              htmlType='submit'
              style={{ background: '#e63946' }}
              type='primary'
            >
              LOGIN WITH GOOGLE
            </Button>
          </Form.Item>
        </Form>
      </div>
    </AuthStyled>
  )
}
export default Auth
