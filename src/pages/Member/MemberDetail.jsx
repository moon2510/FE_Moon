import { Button, Form, Input, Modal } from 'antd'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
}

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  //   required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
}
/* eslint-enable no-template-curly-in-string */

export default function MemberDetail() {
  const { id } = useParams()
  const [form] = Form.useForm()

  const navigate = useNavigate()
  const token = localStorage.getItem('refresh_token')
  const success = () => {
    Modal.success({
      content: 'Update Staff Successfully',
      onOk: () => {
        navigate('/manager/members')
      },
    })
  }

  const getStaffDetail = async () => {
    try {
      const getStaff = await axios.get(
        `http://localhost:5000/api/manager/getOneStaff/${id}`,
        { headers: { Authorization: token } }
      )
      if (200 !== getStaff.status) return
      form.setFieldsValue({
        fullName: getStaff.data.fullName,
        email: getStaff.data.email,
        slackId: getStaff.data.slackId,
      })
      console.log('fhjgbdjfbdf', getStaff.data)
    } catch (error) {
      console.log(error)
    }
  }

  const submitUpdateMember = async (e) => {
    try {
      const body = {
        fullName: e.fullName,
        email: e.email,
        slackId: e.slackId,
      }
      await axios.patch(
        `http://localhost:5000/api/manager/updateStaff/${id}`,
        body,
        { headers: { Authorization: token } }
      )
      success()
      return
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (id) {
      getStaffDetail()
    }
  }, [id])
  return (
    <Form
      form={form}
      {...layout}
      name='nest-messages'
      style={{
        maxWidth: 600,
        padding: '15px 10px 60px',
      }}
      validateMessages={validateMessages}
      onFinish={submitUpdateMember}
    >
      <Form.Item
        label='Full Name'
        name='fullName'

        // rules={[
        //   {
        //     required: true,
        //   },
        // ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Email'
        name='email'
        rules={[
          {
            type: 'email',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label='Slack ID' name='slackId'>
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button htmlType='submit' type='primary'>
          Edit
        </Button>
      </Form.Item>
    </Form>
  )
}
