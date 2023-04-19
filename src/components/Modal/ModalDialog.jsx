import { Button, Modal } from 'antd'
import { useState } from 'react'
const ModalDialog = () => {
  const [open, setOpen] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Are you sure ?')
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
  return (
    <>
      <Button type='primary' onClick={showModal}></Button>
      <Modal
        confirmLoading={confirmLoading}
        open={open}
        title='Approve modal'
        onCancel={handleCancel}
        onOk={handleOk}
      >
        <p>{modalText}</p>
      </Modal>
    </>
  )
}
export default ModalDialog
