import { GraduationCap, Code2, ShieldCheck, Rocket } from 'lucide-react'
import Button from '../components/ui/Button'
import { TextInput, PasswordInput, Select } from '../components/ui/Input'

export default function Register() {
  return (
    <div className="flex min-h-screen">
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-navy p-12 text-white lg:flex">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.35),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(99,102,241,0.25),transparent_45%)]" />
        <div className="relative flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-brand">
            <GraduationCap className="h-5 w-5 text-white" />
          </div>
          <span className="text-body font-semibold">ASTU MSJ Bootcamp</span>
        </div>
        <div className="relative max-w-md">
          <h2 className="text-h1 leading-tight">Join the next cohort.</h2>
          <p className="mt-4 text-body-lg text-text-sidebar">
            Create your account to get access to your batch, mentors, and assignments.
          </p>
        </div>
        <div className="relative flex gap-8 text-small text-text-sidebar">
          <div className="flex items-center gap-2"><Code2 className="h-4 w-4 text-brand" /> Real Projects</div>
          <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> Expert Mentorship</div>
          <div className="flex items-center gap-2"><Rocket className="h-4 w-4 text-brand" /> Career Ready</div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center bg-app px-6 py-12 dark:bg-dark-bg lg:w-1/2">
        <div className="mx-auto w-full max-w-sm">
          <h1 className="text-h2 text-text-primary dark:text-dark-text">Create your account</h1>
          <p className="mt-1.5 text-body text-text-secondary dark:text-dark-text-secondary">
            Register to join the ASTU MSJ Summer Bootcamp.
          </p>

          <form className="mt-8 space-y-5">
            <TextInput id="name" label="Full Name" placeholder="Your full name" required />
            <TextInput id="email" label="Email" type="email" placeholder="you@astu.edu.et" required />
            <PasswordInput id="password" label="Password" placeholder="••••••••" required />
            <PasswordInput id="confirm" label="Confirm Password" placeholder="••••••••" required />
            <Select id="role" label="Role" defaultValue="student" required>
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
            </Select>

            <Button type="submit" className="w-full" size="lg">Create Account</Button>
          </form>

          <p className="mt-6 text-center text-small text-text-secondary dark:text-dark-text-secondary">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-brand hover:text-brand-hover">Log In</a>
          </p>
        </div>
      </div>
    </div>
  )
}
