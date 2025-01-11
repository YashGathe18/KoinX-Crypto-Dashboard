import { HTMLAttributes } from "react"

interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Avatar({ children, className, ...props }: AvatarProps) {
  return (
    <div className={`relative rounded-full ${className}`} {...props}>
      {children}
    </div>
  )
}

export function AvatarImage({ src, alt, className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  return <img src={src} alt={alt} className={`rounded-full object-cover w-full h-full ${className}`} {...props} />
}

export function AvatarFallback({ children, className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`flex h-full w-full items-center justify-center rounded-full bg-gray-100 ${className}`} {...props}>
      {children}
    </div>
  )
} 