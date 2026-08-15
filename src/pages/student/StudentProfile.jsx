import DashboardLayout from '../../components/layout/DashboardLayout'
import { studentNav } from '../../lib/nav'
import { Card, Avatar } from '../../components/ui/Card'
import { TextInput, PasswordInput } from '../../components/ui/Input'
import Button from '../../components/ui/Button'

export default function StudentProfile() {
  return (
    <DashboardLayout sections={studentNav} pageTitle="My Profile" userName="Betelhem Tesfaye" userRole="Student">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="flex flex-col items-center text-center lg:col-span-1">
          <Avatar name="Betelhem Tesfaye" size="lg" />
          <h3 className="mt-4 text-h4 text-text-primary dark:text-dark-text">Betelhem Tesfaye</h3>
          <p className="text-small text-text-secondary dark:text-dark-text-secondary">Batch 4 — Cybersecurity</p>
          <Button variant="outline" size="sm" className="mt-4">Change Photo</Button>
        </Card>

        <div className="space-y-6 lg:col-span-2">
          <Card>
            <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Personal Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <TextInput id="p-name" label="Full Name" defaultValue="Betelhem Tesfaye" />
              <TextInput id="p-email" label="Email" type="email" defaultValue="betelhem.t@astu.edu.et" />
              <TextInput id="p-batch" label="Batch" defaultValue="Batch 4" disabled />
              <TextInput id="p-track" label="Track" defaultValue="Cybersecurity" disabled />
            </div>
            <Button className="mt-5">Save Changes</Button>
          </Card>

          <Card>
            <h3 className="mb-4 text-h4 text-text-primary dark:text-dark-text">Change Password</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <PasswordInput id="p-current" label="Current Password" className="sm:col-span-2" />
              <PasswordInput id="p-new" label="New Password" />
              <PasswordInput id="p-confirm" label="Confirm New Password" />
            </div>
            <Button variant="outline" className="mt-5">Update Password</Button>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
