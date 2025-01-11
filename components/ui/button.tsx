import { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'default'
  size?: 'icon' | 'default'
  children: ReactNode
}

export default function Button({ 
  variant = 'default', 
  size = 'default', 
  children, 
  className,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={className}
      {...props}
    >
      {children}
    </button>
  )
}

