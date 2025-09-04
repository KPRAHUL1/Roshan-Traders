const base =
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

const variants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-ring',
  secondary: 'bg-secondary text-secondary-foreground border hover:bg-secondary/80 focus:ring-ring',
  ghost: 'bg-transparent text-foreground hover:bg-accent focus:ring-ring',
  danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-ring',
}

export default function Button({ variant = 'primary', className = '', children, ...props }) {
  const variantClass = variants[variant] || variants.primary
  const combined = `${base} ${variantClass} px-4 py-2 ${className}`.trim()
  return (
    <button className={combined} {...props}>
      {children}
    </button>
  )
}


