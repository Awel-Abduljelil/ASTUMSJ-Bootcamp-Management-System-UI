import DashboardLayout from '../../components/layout/DashboardLayout'
import { adminNav } from '../../lib/nav'
import { Card, Avatar } from '../../components/ui/Card'
import { SearchInput, Select } from '../../components/ui/Input'
import Button from '../../components/ui/Button'

const alumni = [
  { name: 'Hana Girma', batch: 'Batch 2 — 2025', track: 'Frontend Development', role: 'Frontend Engineer @ Chapa', bio: 'Now building payment UIs full-time after completing the bootcamp last summer.' },
  { name: 'Kalkidan Worku', batch: 'Batch 1 — 2025', track: 'Backend Development', role: 'Backend Engineer @ Kifiya', bio: 'Focused on fintech APIs and infrastructure since graduating.' },
  { name: 'Robel Tadesse', batch: 'Batch 3 — 2025', track: 'Cybersecurity', role: 'SOC Analyst @ EthioTelecom', bio: 'Landed a security role within two months of finishing the program.' },
]

export default function Alumni() {
  return (
    <DashboardLayout sections={adminNav} pageTitle="Alumni" userName="Admin User" userRole="Administrator">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row">
        <SearchInput placeholder="Search alumni..." className="sm:w-72" />
        <Select id="track-filter" defaultValue="" className="sm:w-48">
          <option value="">All Tracks</option>
          <option value="frontend">Frontend Development</option>
          <option value="backend">Backend Development</option>
          <option value="cybersecurity">Cybersecurity</option>
        </Select>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {alumni.map((a) => (
          <Card key={a.name} className="text-center">
            <Avatar name={a.name} size="lg" />
            <h3 className="mt-3 text-h4 text-text-primary dark:text-dark-text">{a.name}</h3>
            <p className="text-small text-brand">{a.role}</p>
            <p className="mt-1 text-caption text-text-muted">{a.batch} · {a.track}</p>
            <p className="mt-3 text-small text-text-secondary dark:text-dark-text-secondary">{a.bio}</p>
            <Button variant="outline" size="sm" className="mt-4 w-full">View Profile</Button>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  )
}
