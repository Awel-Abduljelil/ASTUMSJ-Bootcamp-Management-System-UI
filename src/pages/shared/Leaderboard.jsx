import { useState } from 'react'
import { Trophy } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { adminNav, mentorNav, studentNav } from '../../lib/nav'
import { Card, Avatar } from '../../components/ui/Card'
import { Select } from '../../components/ui/Input'
import { cn } from '../../lib/cn'

const navByRole = { Admin: adminNav, Mentor: mentorNav, Student: studentNav }
const nameByRole = { Admin: 'Admin User', Mentor: 'Selam Alemayehu', Student: 'Betelhem Tesfaye' }

const board = [
  { rank: 1, name: 'Selamawit Fikru', score: 985, attendance: '98%', progress: '96%' },
  { rank: 2, name: 'Betelhem Tesfaye', score: 940, attendance: '94%', progress: '90%' },
  { rank: 3, name: 'Dawit Kassa', score: 905, attendance: '90%', progress: '88%' },
  { rank: 4, name: 'Nathnael Girma', score: 870, attendance: '89%', progress: '84%' },
  { rank: 5, name: 'Mihret Alemu', score: 810, attendance: '77%', progress: '75%' },
  { rank: 6, name: 'Yohannes Bekele', score: 690, attendance: '58%', progress: '62%' },
]

const podiumStyle = {
  1: 'order-2 h-40 bg-gradient-to-b from-late/20 to-transparent',
  2: 'order-1 h-32 bg-gradient-to-b from-text-muted/20 to-transparent',
  3: 'order-3 h-28 bg-gradient-to-b from-brand/15 to-transparent',
}

export default function Leaderboard({ role = 'Student' }) {
  const [batch, setBatch] = useState('batch-4')
  const top3 = board.slice(0, 3)
  const rest = board.slice(3)

  return (
    <DashboardLayout sections={navByRole[role]} pageTitle="Leaderboard" userName={nameByRole[role]} userRole={role}>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-h3 text-text-primary dark:text-dark-text">Leaderboard</h2>
        <Select id="batch-select" defaultValue={batch} onChange={(e) => setBatch(e.target.value)} className="w-56">
          <option value="batch-4">Batch 4 — Cybersecurity</option>
          <option value="batch-1">Batch 1 — Frontend</option>
        </Select>
      </div>

      <div className="mb-8 flex items-end justify-center gap-4">
        {top3.map((s) => (
          <div key={s.rank} className={cn('flex w-40 flex-col items-center justify-end rounded-t-lg border border-b-0 border-border p-4 text-center dark:border-dark-border', podiumStyle[s.rank])}>
            <Avatar name={s.name} size={s.rank === 1 ? 'lg' : 'md'} />
            <p className="mt-2 truncate text-small font-semibold text-text-primary dark:text-dark-text">{s.name}</p>
            <p className="text-caption text-text-muted">{s.score} pts</p>
            <div className="mt-2 flex h-8 w-8 items-center justify-center rounded-full bg-surface text-caption font-bold text-text-primary shadow-card dark:bg-dark-surface dark:text-dark-text">
              {s.rank}
            </div>
          </div>
        ))}
      </div>

      <Card className="p-0">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border bg-app/60 text-caption font-semibold uppercase tracking-wide text-text-muted dark:border-dark-border dark:bg-dark-elevated/50">
              <th className="px-5 py-3.5">Rank</th>
              <th className="px-5 py-3.5">Student</th>
              <th className="px-5 py-3.5">Score</th>
              <th className="px-5 py-3.5">Attendance</th>
              <th className="px-5 py-3.5">Progress</th>
            </tr>
          </thead>
          <tbody>
            {rest.map((s) => (
              <tr key={s.rank} className="border-b border-border last:border-0 dark:border-dark-border">
                <td className="px-5 py-3.5 text-body font-semibold text-text-muted">#{s.rank}</td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-3">
                    <Avatar name={s.name} size="sm" />
                    <span className="font-medium text-text-primary dark:text-dark-text">{s.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3.5 text-text-primary dark:text-dark-text">{s.score}</td>
                <td className="px-5 py-3.5 text-text-secondary dark:text-dark-text-secondary">{s.attendance}</td>
                <td className="px-5 py-3.5 text-text-secondary dark:text-dark-text-secondary">{s.progress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </DashboardLayout>
  )
}
