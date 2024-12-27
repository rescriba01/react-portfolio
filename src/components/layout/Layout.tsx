import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="app-layout">
      {/* Header will go here */}
      <main>
        {children}
      </main>
      {/* Footer will go here */}
    </div>
  )
} 