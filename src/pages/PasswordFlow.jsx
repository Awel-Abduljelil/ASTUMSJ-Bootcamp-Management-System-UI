import { GraduationCap, ArrowLeft, MailCheck } from 'lucide-react'
import { useState } from 'react'
import Button from '../components/ui/Button'
import { TextInput, PasswordInput } from '../components/ui/Input'

function AuthShell({ children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-app px-6 dark:bg-dark-bg">
      <div className="w-full max-w-sm">
        <div className="mb-8 flex justify-center">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand">
            <GraduationCap className="h-6 w-6 text-white" />
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

export function ForgotPassword() {
  const [sent, setSent] = useState(false)

  if (sent) {
    return (
      <AuthShell>
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-present/10 text-present">
            <MailCheck className="h-6 w-6" />
          </div>
          <h1 className="text-h3 text-text-primary dark:text-dark-text">Check your email</h1>
          <p className="mt-2 text-body text-text-secondary dark:text-dark-text-secondary">
            We sent a password reset link to your inbox.
          </p>
          <a href="/login" className="mt-6 inline-flex items-center gap-1.5 text-small font-medium text-brand hover:text-brand-hover">
            <ArrowLeft className="h-4 w-4" /> Back to Login
          </a>
        </div>
      </AuthShell>
    )
  }

  return (
    <AuthShell>
      <h1 className="text-h2 text-text-primary dark:text-dark-text">Forgot password?</h1>
      <p className="mt-1.5 text-body text-text-secondary dark:text-dark-text-secondary">
        Enter your email and we'll send you a reset link.
      </p>
      <form
        className="mt-8 space-y-5"
        onSubmit={(e) => { e.preventDefault(); setSent(true) }}
      >
        <TextInput id="email" label="Email" type="email" placeholder="you@astu.edu.et" required />
        <Button type="submit" className="w-full" size="lg">Send Reset Link</Button>
      </form>
      <a href="/login" className="mt-6 flex items-center justify-center gap-1.5 text-small font-medium text-brand hover:text-brand-hover">
        <ArrowLeft className="h-4 w-4" /> Back to Login
      </a>
    </AuthShell>
  )
}

export function ResetPassword() {
  return (
    <AuthShell>
      <h1 className="text-h2 text-text-primary dark:text-dark-text">Reset your password</h1>
      <p className="mt-1.5 text-body text-text-secondary dark:text-dark-text-secondary">
        Choose a new password for your account.
      </p>
      <form className="mt-8 space-y-5">
        <PasswordInput id="password" label="New Password" placeholder="••••••••" required />
        <PasswordInput id="confirm" label="Confirm Password" placeholder="••••••••" required />
        <Button type="submit" className="w-full" size="lg">Reset Password</Button>
      </form>
    </AuthShell>
  )
}
