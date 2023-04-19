import MainLayouts from '@root/layouts/MainLayout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Auth from './Auth/Auth'
import ModalDialog from './components/Modal/ModalDialog'
import ModalRequest from './components/Modal/ModalRequest'
import Workspaces from './components/WorkSpaces/Workspaces'
import WorkspaceDetails from './components/WorkSpaces/WorkspacesDetail'

import DayoffDetail from './pages/Account/DayoffDetail'
import FormReviewRequest from './pages/Account/Request/FormReviewRequest'
import Dashboard from './pages/Dashboard/Dashboard'
import HistoryDayOffAll from './pages/HistoryDayOff/HistoryDayOffAll'
import ListGroup from './pages/Manager/ListGroup'
import ManagerGroupDetail from './pages/Manager/ManagerGroupDetail'
import Notification from './pages/Manager/Notification'
import CreateMember from './pages/Member/CreateMember'
import ManagerMember from './pages/Member/ManagerMember'
import MemberDetail from './pages/Member/MemberDetail'
import CreateRequest from './pages/User/CreateRequest'

export default function App() {
  const token = localStorage.getItem('refresh_token')

  return (
    <BrowserRouter>
      <ToastContainer
        closeOnClick
        draggable
        pauseOnFocusLoss
        pauseOnHover
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        position='top-center'
        rtl={false}
        theme='light'
      />
      <MainLayouts>
        <Routes>
          {!token && <Route exact element={<Auth />} path='/login' />}
          <Route exact element={<Dashboard />} path='/dashboard' />
          <Route
            exact
            element={<CreateRequest />}
            path='staff/create-request'
          />
          <Route element={<CreateMember />} path='createmember' />
          <Route exact element={<Notification />} path='manager/notification' />
          <Route
            exact
            element={<ManagerGroupDetail />}
            path={`manager/groups/detail`}
          />
          <Route
            exact
            element={<WorkspaceDetails />}
            path='/workspacesDetail'
          />

          <Route
            exact
            element={<FormReviewRequest />}
            path='/account/list-request'
          />
          <Route element={<ListGroup />} path='manager/groups' />
          <Route exact element={<ManagerMember />} path='manager/members' />
          <Route
            exact
            element={<MemberDetail />}
            path='manager/members/detail/:id'
          />
          <Route
            exact
            element={<DayoffDetail />}
            path='/account/dayoff/detail'
          />
          <Route exact element={<Workspaces />} path='/workspaces' />
          <Route exact element={<ModalDialog />} path='/modal' />
          <Route exact element={<ModalRequest />} path='/modalrequest' />
          <Route
            exact
            element={<HistoryDayOffAll />}
            path='account/history-day-off'
          />
        </Routes>
      </MainLayouts>
    </BrowserRouter>
  )
}
