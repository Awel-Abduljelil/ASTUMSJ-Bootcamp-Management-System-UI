import { Plus } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { adminNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'
import Button from '../../components/ui/Button'

const badges = [
  { emoji: '🔥', name: 'Streak Master', description: 'Maintained a 7-day attendance streak', awarded: 34 },
  { emoji: '⭐', name: 'Top Performer', description: 'Scored 90%+ average across all assignments', awarded: 18 },
  { emoji: '🏆', name: 'Batch Champion', description: 'Ranked #1 in their batch leaderboard', awarded: 6 },
  { emoji: '🚀', name: 'Fast Starter', description: 'Completed onboarding topics in week one', awarded: 52 },
  { emoji: '🤝', name: 'Team Player', description: 'Actively helped peers in community channels', awarded: 21 },
  { emoji: '🎯', name: 'Perfect Submission', description: 'Scored 100% on an assignment', awarded: 12 },
]

export default function AdminBadges() {
  return (
    <DashboardLayout sections={adminNav} pageTitle="Badges" userName="Admin User" userRole="Administrator">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-h3 text-text-primary dark:text-dark-text">Achievement Badges</h2>
        <Button icon={Plus}>Create Badge</Button>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {badges.map((b) => (
          <Card key={b.name} className="text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-bg text-3xl dark:bg-brand/10">
              {b.emoji}
            </div>
            <h3 className="mt-3 text-h4 text-text-primary dark:text-dark-text">{b.name}</h3>
            <p className="mt-1 text-small text-text-secondary dark:text-dark-text-secondary">{b.description}</p>
            <p className="mt-3 text-caption text-text-muted">Awarded to {b.awarded} students</p>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
