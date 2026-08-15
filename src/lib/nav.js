import {
  LayoutDashboard, Users, Layers, Megaphone, BarChart3, Calendar,
  BookOpen, Trophy, Award, GraduationCap as Alumni,
  ClipboardCheck, TrendingUp, FileText, Inbox, CheckSquare,
  AlertTriangle, StickyNote,
  CalendarCheck, Percent, ListChecks, GraduationCap, Bell, User,
} from 'lucide-react'

export const adminNav = [
  { items: [{ label: 'Dashboard', to: '/admin', icon: LayoutDashboard }] },
  {
    label: 'Management',
    items: [
      { label: 'Users', to: '/admin/users', icon: Users },
      { label: 'Batches', to: '/admin/batches', icon: Layers },
    ],
  },
  {
    label: 'Bootcamp',
    items: [
      { label: 'Announcements', to: '/admin/announcements', icon: Megaphone },
      { label: 'Reports & Analytics', to: '/admin/reports', icon: BarChart3 },
      { label: 'Calendar', to: '/admin/calendar', icon: Calendar },
    ],
  },
  {
    label: 'Extras',
    items: [
      { label: 'Resources', to: '/admin/resources', icon: BookOpen },
      { label: 'Leaderboard', to: '/admin/leaderboard', icon: Trophy },
      { label: 'Badges', to: '/admin/badges', icon: Award },
      { label: 'Alumni', to: '/admin/alumni', icon: Alumni },
    ],
  },
]

export const mentorNav = [
  { items: [{ label: 'Dashboard', to: '/mentor', icon: LayoutDashboard }] },
  {
    label: 'My Bootcamp',
    items: [
      { label: 'My Students', to: '/mentor/students', icon: Users },
      { label: 'Attendance', to: '/mentor/attendance', icon: ClipboardCheck },
      { label: 'Progress', to: '/mentor/progress', icon: TrendingUp },
    ],
  },
  {
    label: 'Assignments',
    items: [
      { label: 'Assignments', to: '/mentor/assignments', icon: FileText },
      { label: 'Submissions', to: '/mentor/submissions', icon: Inbox },
      { label: 'Grading', to: '/mentor/grading', icon: CheckSquare },
    ],
  },
  {
    label: 'Insights',
    items: [
      { label: 'At-Risk Students', to: '/mentor/at-risk', icon: AlertTriangle },
      { label: 'Announcements', to: '/mentor/announcements', icon: Megaphone },
    ],
  },
  {
    label: 'Extras',
    items: [
      { label: 'Mentor Notes', to: '/mentor/notes', icon: StickyNote },
      { label: 'Resources', to: '/mentor/resources', icon: BookOpen },
      { label: 'Calendar', to: '/mentor/calendar', icon: Calendar },
    ],
  },
]

export const studentNav = [
  { items: [{ label: 'Dashboard', to: '/student', icon: LayoutDashboard }] },
  {
    label: 'My Learning',
    items: [
      { label: 'My Attendance', to: '/student/attendance', icon: CalendarCheck },
      { label: 'My Progress', to: '/student/progress', icon: Percent },
      { label: 'My Assignments', to: '/student/assignments', icon: ListChecks },
      { label: 'My Grades', to: '/student/grades', icon: GraduationCap },
    ],
  },
  {
    label: 'Community',
    items: [
      { label: 'Announcements', to: '/student/announcements', icon: Megaphone },
      { label: 'Notifications', to: '/student/notifications', icon: Bell },
      { label: 'Resources', to: '/student/resources', icon: BookOpen },
      { label: 'Calendar', to: '/student/calendar', icon: Calendar },
    ],
  },
  {
    label: 'Extras',
    items: [
      { label: 'Leaderboard', to: '/student/leaderboard', icon: Trophy },
      { label: 'My Badges', to: '/student/badges', icon: Award },
      { label: 'My Profile', to: '/student/profile', icon: User },
    ],
  },
]
