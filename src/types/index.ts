// Common types used across the application
export interface BaseProps {
  className?: string
  children?: React.ReactNode
}

export interface ButtonProps extends BaseProps {
  onClick?: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'outline'
} 