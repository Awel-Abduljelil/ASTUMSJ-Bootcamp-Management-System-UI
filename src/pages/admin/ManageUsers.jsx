import { useState } from 'react'
import { Plus, Pencil, Trash2, Eye } from 'lucide-react'
import DashboardLayout from '../../components/layout/DashboardLayout'
import { adminNav } from '../../lib/nav'
import DataTable from '../../components/ui/DataTable'
import StatusBadge from '../../components/ui/Badge'
import { Avatar } from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import Modal from '../../components/ui/Modal'
import { SearchInput, Select, TextInput } from '../../components/ui/Input'

const users = [
  { id: 1, name: 'Betelhem Tesfaye', email: 'betelhem.t@astu.edu.et', role: 'Student', batch: 'Batch 4', status: 'Active' },
  { id: 2, name: 'Selam Alemayehu', email: 'selam.a@astu.edu.et', role: 'Mentor', batch: 'Batch 4', status: 'Active' },
  { id: 3, name: 'Nathnael Girma', email: 'nathnael.g@astu.edu.et', role: 'Student', batch: 'Batch 1', status: 'Active' },
  { id: 4, name: 'Yohannes Bekele', email: 'yohannes.b@astu.edu.et', role: 'Student', batch: 'Batch 3', status: 'Inactive' },
  { id: 5, name: 'Admin User', email: 'admin@astu.edu.et', role: 'Admin', batch: '—', status: 'Active' },
]

export default function ManageUsers() {
  const [modalOpen, setModalOpen] = useState(false)
  const [editingUser, setEditingUser] = useState(null)

  const columns = [
    {
      key: 'user',
      header: 'User',
      render: (row) => (
        <div className="flex items-center gap-3">
          <Avatar name={row.name} size="sm" />
          <span className="font-medium">{row.name}</span>
        </div>
      ),
    },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role' },
    { key: 'batch', header: 'Batch' },
    { key: 'status', header: 'Status', render: (row) => <StatusBadge status={row.status} /> },
    {
      key: 'actions',
      header: 'Actions',
      render: (row) => (
        <div className="flex gap-1" onClick={(e) => e.stopPropagation()}>
          <Button variant="icon" size="sm" icon={Eye} iconOnly aria-label="View" />
          <Button variant="icon" size="sm" icon={Pencil} iconOnly aria-label="Edit" onClick={() => { setEditingUser(row); setModalOpen(true) }} />
          <Button variant="icon" size="sm" icon={Trash2} iconOnly aria-label="Delete" className="hover:text-absent" />
        </div>
      ),
    },
  ]

  return (
    <DashboardLayout sections={adminNav} pageTitle="Users" userName="Admin User" userRole="Administrator">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-h3 text-text-primary dark:text-dark-text">Manage Users</h2>
          <p className="mt-1 text-small text-text-secondary dark:text-dark-text-secondary">{users.length} users total</p>
        </div>
        <Button icon={Plus} onClick={() => { setEditingUser(null); setModalOpen(true) }}>Add User</Button>
      </div>

      <div className="mb-4 flex flex-col gap-3 sm:flex-row">
        <SearchInput placeholder="Search users..." className="sm:w-72" />
        <Select id="role-filter" defaultValue="" className="sm:w-44">
          <option value="">All Roles</option>
          <option value="student">Student</option>
          <option value="mentor">Mentor</option>
          <option value="admin">Admin</option>
        </Select>
        <Select id="batch-filter" defaultValue="" className="sm:w-44">
          <option value="">All Batches</option>
          <option value="batch-1">Batch 1</option>
          <option value="batch-4">Batch 4</option>
        </Select>
      </div>

      <DataTable columns={columns} rows={users} page={1} totalPages={1} onRowClick={(row) => { setEditingUser(row); setModalOpen(true) }} />

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editingUser ? 'Edit User' : 'Add User'}
        footer={
          <>
            <Button variant="outline" onClick={() => setModalOpen(false)}>Cancel</Button>
            <Button onClick={() => setModalOpen(false)}>{editingUser ? 'Save Changes' : 'Create User'}</Button>
          </>
        }
      >
        <div className="space-y-4">
          <TextInput id="modal-name" label="Full Name" defaultValue={editingUser?.name} required />
          <TextInput id="modal-email" label="Email" type="email" defaultValue={editingUser?.email} required />
          <Select id="modal-role" label="Role" defaultValue={editingUser?.role?.toLowerCase() || 'student'} required>
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
            <option value="admin">Admin</option>
          </Select>
          <Select id="modal-batch" label="Batch" defaultValue="">
            <option value="">No batch</option>
            <option value="batch-1">Batch 1 — Frontend</option>
            <option value="batch-4">Batch 4 — Cybersecurity</option>
          </Select>
        </div>
      </Modal>
    </DashboardLayout>
  )
}
