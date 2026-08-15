import { Lock } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { studentNav } from '../../lib/nav'
import { Card } from '../../components/ui/Card'

const earned = [
  { emoji: '🔥', name: 'Streak Master', description: '7-day attendance streak' },
  { emoji: '🚀', name: 'Fast Starter', description: 'Completed onboarding topics in week one' },
]
const inProgress = [
  { emoji: '⭐', name: 'Top Performer', description: 'Score 90%+ average — currently at 90%', progress: '90/90' },
]
const locked = [
  { emoji: '🏆', name: 'Batch Champion', description: 'Rank #1 in your batch leaderboard' },
  { emoji: '🎯', name: 'Perfect Submission', description: 'Score 100% on an assignment' },
  { emoji: '🤝', name: 'Team Player', description: 'Actively help peers in community channels' },
]

function BadgeGrid({ items, state }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((b) => (
        <Card key={b.name} className={`text-center ${state === 'locked' ? 'opacity-50' : ''}`}>
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-bg text-3xl dark:bg-brand/10">
            {state === 'locked' ? <Lock className="h-6 w-6 text-text-muted" /> : b.emoji}
          </div>
          <h3 className="mt-3 text-h4 text-text-primary dark:text-dark-text">{b.name}</h3>
          <p className="mt-1 text-small text-text-secondary dark:text-dark-text-secondary">{b.description}</p>
        </Card>
      ))}
    </div>
  )
}

export default function StudentBadges() {
  return (
    <DashboardLayout sections={studentNav} pageTitle="My Badges" userName="Betelhem Tesfaye" userRole="Student">
      <div className="space-y-8">
        <div>
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Earned ({earned.length})</h3>
          <BadgeGrid items={earned} state="earned" />
        </div>
        <div>
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">In Progress</h3>
          <BadgeGrid items={inProgress} state="in-progress" />
        </div>
        <div>
          <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Locked</h3>
          <BadgeGrid items={locked} state="locked" />
        </div>
      </div>
    </DashboardLayout>
  )
}
