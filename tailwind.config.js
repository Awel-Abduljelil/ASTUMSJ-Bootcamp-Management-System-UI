/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Primary
        navy: '#0F172A',
        brand: {
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
        },
        'brand-bg': '#EFF6FF',
        'brand-soft': '#DBEAFE',

        // Neutrals (light mode)
        app: '#F8FAFC',
        surface: '#FFFFFF',
        border: '#E2E8F0',
        text: {
          primary: '#0F172A',
          secondary: '#64748B',
          muted: '#94A3B8',
          sidebar: '#CBD5E1',
        },

        // Dark mode neutrals
        dark: {
          bg: '#020617',
          surface: '#0F172A',
          elevated: '#1E293B',
          border: '#334155',
          text: '#F8FAFC',
          'text-secondary': '#CBD5E1',
        },

        // Attendance
        present: '#16A34A',
        absent: '#DC2626',
        late: '#F59E0B',
        excused: '#6366F1',

        // Progress
        completed: '#16A34A',
        'in-progress': '#2563EB',
        'needs-improvement': '#DC2626',
        'not-started': '#94A3B8',

        // Assignment
        pending: '#F59E0B',
        submitted: '#2563EB',
        graded: '#16A34A',
        resubmit: '#DC2626',
        overdue: '#DC2626',
      },
      fontSize: {
        display: ['40px', { lineHeight: '1.15', fontWeight: '700' }],
        h1: ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['24px', { lineHeight: '1.25', fontWeight: '600' }],
        h3: ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        h4: ['18px', { lineHeight: '1.35', fontWeight: '600' }],
        'body-lg': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        body: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        small: ['13px', { lineHeight: '1.4', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '1.3', fontWeight: '500' }],
        btn: ['14px', { lineHeight: '1.2', fontWeight: '600' }],
      },
      spacing: {
        4.5: '18px',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '24px',
      },
      boxShadow: {
        card: '0 1px 2px 0 rgba(15, 23, 42, 0.04), 0 1px 3px 0 rgba(15, 23, 42, 0.06)',
        'card-hover': '0 4px 12px 0 rgba(15, 23, 42, 0.08)',
        modal: '0 20px 40px -8px rgba(15, 23, 42, 0.25)',
      },
      width: {
        sidebar: '260px',
      },
      height: {
        topbar: '72px',
      },
    },
  },
  plugins: [],
}
