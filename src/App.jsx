import { Routes, Route, Navigate } from 'react-router-dom'
import PublicLanding from './pages/PublicLanding'
import Login from './pages/Login'
import Register from './pages/Register'
import { ForgotPassword, ResetPassword } from './pages/PasswordFlow'
import Settings from './pages/Settings'

import AdminDashboard from './pages/admin/AdminDashboard'
import ManageUsers from './pages/admin/ManageUsers'
import ManageBatches from './pages/admin/ManageBatches'
import AdminAnnouncements from './pages/shared/AnnouncementsManage'
import AdminReports from './pages/admin/AdminReports'
import AdminBadges from './pages/admin/AdminBadges'
import Alumni from './pages/admin/Alumni'

import MentorDashboard from './pages/mentor/MentorDashboard'
import MyStudents from './pages/mentor/MyStudents'
import MentorAttendance from './pages/mentor/MentorAttendance'
import ProgressManagement from './pages/mentor/ProgressManagement'
import MentorAssignments from './pages/mentor/MentorAssignments'
import Submissions from './pages/mentor/Submissions'
import GradeSubmission from './pages/mentor/GradeSubmission'
import AtRiskStudents from './pages/mentor/AtRiskStudents'
import MentorNotes from './pages/mentor/MentorNotes'

import StudentDashboard from './pages/student/StudentDashboard'
import StudentAttendance from './pages/student/StudentAttendance'
import StudentProgress from './pages/student/StudentProgress'
import StudentAssignments from './pages/student/StudentAssignments'
import StudentGrades from './pages/student/StudentGrades'
import StudentAnnouncements from './pages/student/StudentAnnouncements'
import StudentProfile from './pages/student/StudentProfile'
import StudentBadges from './pages/student/StudentBadges'
import StudentNotifications from './pages/student/StudentNotifications'

import ResourceLibrary from './pages/shared/ResourceLibrary'
import Leaderboard from './pages/shared/Leaderboard'
import CalendarPage from './pages/shared/CalendarPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PublicLanding />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Admin */}
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<ManageUsers />} />
      <Route path="/admin/batches" element={<ManageBatches />} />
      <Route path="/admin/announcements" element={<AdminAnnouncements role="Admin" />} />
      <Route path="/admin/reports" element={<AdminReports />} />
      <Route path="/admin/resources" element={<ResourceLibrary role="Admin" />} />
      <Route path="/admin/leaderboard" element={<Leaderboard role="Admin" />} />
      <Route path="/admin/badges" element={<AdminBadges />} />
      <Route path="/admin/alumni" element={<Alumni />} />
      <Route path="/admin/calendar" element={<CalendarPage role="Admin" />} />
      <Route path="/admin/settings" element={<Settings role="Admin" />} />

      {/* Mentor */}
      <Route path="/mentor" element={<MentorDashboard />} />
      <Route path="/mentor/students" element={<MyStudents />} />
      <Route path="/mentor/attendance" element={<MentorAttendance />} />
      <Route path="/mentor/progress" element={<ProgressManagement />} />
      <Route path="/mentor/assignments" element={<MentorAssignments />} />
      <Route path="/mentor/submissions" element={<Submissions />} />
      <Route path="/mentor/grading" element={<GradeSubmission />} />
      <Route path="/mentor/at-risk" element={<AtRiskStudents />} />
      <Route path="/mentor/announcements" element={<AdminAnnouncements role="Mentor" />} />
      <Route path="/mentor/notes" element={<MentorNotes />} />
      <Route path="/mentor/resources" element={<ResourceLibrary role="Mentor" />} />
      <Route path="/mentor/calendar" element={<CalendarPage role="Mentor" />} />
      <Route path="/mentor/settings" element={<Settings role="Mentor" />} />

      {/* Student */}
      <Route path="/student" element={<StudentDashboard />} />
      <Route path="/student/attendance" element={<StudentAttendance />} />
      <Route path="/student/progress" element={<StudentProgress />} />
      <Route path="/student/assignments" element={<StudentAssignments />} />
      <Route path="/student/grades" element={<StudentGrades />} />
      <Route path="/student/announcements" element={<StudentAnnouncements />} />
      <Route path="/student/notifications" element={<StudentNotifications />} />
      <Route path="/student/resources" element={<ResourceLibrary role="Student" />} />
      <Route path="/student/calendar" element={<CalendarPage role="Student" />} />
      <Route path="/student/leaderboard" element={<Leaderboard role="Student" />} />
      <Route path="/student/badges" element={<StudentBadges />} />
      <Route path="/student/profile" element={<StudentProfile />} />
      <Route path="/student/settings" element={<Settings role="Student" />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
