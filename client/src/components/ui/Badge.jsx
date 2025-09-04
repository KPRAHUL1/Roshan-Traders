export default function Badge({ children, color = 'gray' }) {
  const colors = {
    gray: 'bg-muted text-muted-foreground',
    blue: 'bg-primary/10 text-primary',
    green: 'bg-green-100 text-green-800',
    amber: 'bg-amber-100 text-amber-800',
    red: 'bg-destructive/10 text-destructive',
  }
  const cls = `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
    colors[color] || colors.gray
  }`
  return <span className={cls}>{children}</span>
}


