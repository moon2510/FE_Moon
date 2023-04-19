import { Button, Modal, Input } from 'antd'
import { useState } from 'react'

const ModalRequest = () => {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Are you sure ?')
  const [inputValue, setInputValue] = useState('')

  const showModal = () => {
    setOpen(true)
  }
  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)
    setTimeout(() => {
      setOpen(false)
      setConfirmLoading(false)
    }, 2000)
  }
  const handleCancel = () => {
    console.log('Clicked cancel button')
    setOpen(false)
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <>
      <Button type='primary' onClick={showModal}></Button>
      <Modal
        confirmLoading={confirmLoading}
        title='Approve '
        visible={open}
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <p>{modalText}</p>
        <Input
          placeholder='Enter your input'
          style={{ width: '100%', height: '50px', fontSize: '1.2rem' }}
          value={inputValue}
          onChange={handleInputChange}
        />
      </Modal>
    </>
  )
}

export default ModalRequest
