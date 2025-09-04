export function Card({ className = '', children }) {
  return (
    <div className={`bg-card rounded-xl shadow-sm border ${className}`}>
      {children}
    </div>
  )
}

export function CardMedia({ src, alt }) {
  return <img src={src} alt={alt} className="w-full h-40 object-cover rounded-t-xl" />
}

export function CardHeader({ title, subtitle, action }) {
  return (
    <div className="p-4 flex items-start justify-between gap-3">
      <div>
        <div className="font-semibold text-card-foreground">{title}</div>
        {subtitle && <div className="text-sm text-muted-foreground">{subtitle}</div>}
      </div>
      {action}
    </div>
  )
}

export function CardContent({ children }) {
  return <div className="p-4 pt-0 text-sm text-muted-foreground">{children}</div>
}


