# ASTU MSJ Summer Bootcamp — Management System UI

A complete React + Tailwind frontend covering every screen from the design brief and the SRS
(sections 1–19 required, section 20 optional/bonus — all built).

## Run it

```bash
npm install
npm run dev
```

Visit `/` for the public landing page, `/login` to sign in, then explore `/admin`, `/mentor`, `/student`.

## Every screen, by area

**Public / Auth** — Landing page (`/`) with hero, about, tracks, mentors, FAQ, contact; Login; Register;
Forgot Password; Reset Password.

**Admin** (`/admin/*`) — Dashboard; Manage Users (table, filters, Add/Edit modal); Manage Batches
(cards → detail with Overview/Students/Mentors/Assignments/Attendance tabs); Announcements (list +
create form); Reports & Analytics; Resource Library; Leaderboard; Badges (management); Alumni; Calendar;
Settings.

**Mentor** (`/mentor/*`) — Dashboard; My Students (table → detail with tabs); Attendance marking
(present/absent/late/excused, Mark All Present); Progress Management (per-topic status + notes);
Assignments (Active/Past/Draft tabs, create form); Submissions (table); Grade Submission (split-screen:
repo/demo links + notes on the left, score/feedback/resubmit on the right); At-Risk Students (priority
sorted); Announcements; Mentor Notes (private, per-student); Resource Library; Calendar; Settings.

**Student** (`/student/*`) — Dashboard; My Attendance (circular %); My Progress (topic roadmap); My
Assignments (tabs → detail → submit form → success state); My Grades (average + per-assignment →
feedback detail); Announcements; Notifications (read/unread, mark all read); My Badges
(Earned/In Progress/Locked); Resource Library; Leaderboard (with podium); My Profile
(info + change password); Settings.

**Shared components** (`src/components/ui/`) — Button, form inputs (all states), StatusBadge (maps
every attendance/progress/assignment status word to its token color), Card/StatCard/ProgressBar/Avatar,
Sidebar (role-aware nav), Topbar, DataTable (with pagination + row click), Modal, Tabs.

Dark mode toggles from the sidebar on every dashboard screen.

## What's mock vs. real

This is a frontend-only UI — every screen renders and every interaction (attendance marking, grading,
submitting assignments, toggling settings, filtering tables) works with in-memory mock data. The SRS
also specifies a full Express/MongoDB/JWT backend (Users, Batches, Attendance, Progress, Assignments,
Submissions, Announcements collections, REST API, RBAC middleware) — none of that exists yet; wiring
this UI up to a real backend (via Axios, per the SRS) is the next step.

Also not yet done: pixel-tuned 390×844 mobile layouts (current screens are responsive via Tailwind
breakpoints but not hand-tuned per the exact mobile mockup spec) and a Student Timeline view.
# ASTUMSJ-Bootcamp-Management-System-UI
